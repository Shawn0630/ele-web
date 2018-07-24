import * as Redux from "redux";
import * as agent from "superagent";
import * as ReduxThunk from "redux-thunk";
import {ApiAction, ApiActionBase, ApiActionEvent, ApiMethod, ApiStatus, CachedApiAction,
        HandlerMap, PayloadType} from "../actions/api-action";
import {addError} from "../actions/error-actions";
import {Map} from "immutable";
import {config} from "../config";
//import {AuthActions} from "../actions/auth-actions";

interface ResponseError {
    response: agent.Response;
    status: number;
    message: string;
}

async function callApi(endpoint: string, method: ApiMethod, type: PayloadType,
                       payload: {[key: string]: {}}, handlers: HandlerMap, useBuffer: boolean): Promise<{}> {
    const url: string = endpoint.indexOf(config.apiRoot) === -1 ? config.apiRoot + endpoint : endpoint;
    switch (method) {
        case ApiMethod.POST:
        case ApiMethod.PUT:
            let request: agent.SuperAgentRequest;
            if (method === ApiMethod.POST) {
                request = agent.post(url);
            } else if (method === ApiMethod.PUT) {
                request = agent.put(url);
            } else {
                return Promise.reject(`Unexpected ApiMethod: ${method}`);
            }
            request.withCredentials();
            if (useBuffer) {
                request = request.responseType("arraybuffer");
                request.set("Content-Type", "application/json");
                request.set("accept", "protobuf");
                request.send(payload);
            } else if (type === PayloadType.JSON) {
                request.set("Content-Type", "application/json");
                request.send(payload);
            } else {
                // form
                let hasFile: boolean = false;
                for (const key of Object.keys(payload)) {
                    request.field(key, payload[key] as string);
                    if (payload[key] instanceof File) {
                        hasFile = true;
                    }
                }
                // if this involves uploading a file
                if (handlers != null && handlers.progress != null) {
                    // attach progress handler
                    request.on("progress", (event: ApiActionEvent): void => {
                        handlers.progress(event);
                    });
                }
            }

            return new Promise<{}>((resolve: (value: {}) => void, reject: (reason: {}) => void): void => {
                request.end((err: ResponseError, res: agent.Response) => { // attach handlers properly
                    if (err != null) {
                        if (handlers != null && handlers.response != null) {
                            handlers.response(err);
                        }
                        let errorMessage: string = err.message;
                        if (err.response != null && err.response.text != null && err.response.text.trim().length > 0) {
                            errorMessage = err.response.text;
                        }
                        reject(errorMessage);
                    } else if (!res.ok) {
                        const error: string = res.text;
                        if (handlers != null && handlers.response != null) {
                            handlers.response(error);
                        }
                        reject(res.text);
                    } else {
                        if (handlers != null && handlers.response != null) {
                            handlers.response(null, res);
                        }

                        if (res.body != null) {
                            resolve(res.body);

                            return;
                        }
                        resolve(res.text);
                    }
                });
            });
        case ApiMethod.DELETE:
            return new Promise<{}>((resolve: (value: {}) => void, reject: (reason: {}) => void): void => {
                agent.delete(url).withCredentials().end((err: Error, res: agent.Response): void => {
                    if (err != null) {
                        reject(err);
                    } else if (!res.ok) {
                        reject(res.text);
                    } else {
                        resolve(res.body);
                    }
                });
            });
        default:
            return handleGet(url, useBuffer);
    }
}

async function handleGet(url: string, useBuffer: boolean): Promise<{}> {
    return new Promise<{}>((resolve: (value: {}) => void, reject: (reason: {}) => void): void => {
        let req: agent.Request = agent.get(url).withCredentials();
        if (useBuffer) {
            req = req.responseType("arraybuffer");
            req.set("accept", "protobuf");
        }
        req.end((err: ResponseError, res: agent.Response): void => {
            if (err != null) {
                let errorMessage: string = err.toString();
                if (err.response != null && err.response.text != null && err.response.text.trim().length > 0) {
                    errorMessage = err.response.text;
                } else if (err.message != null) {
                    errorMessage = err.message;
                }
                reject(errorMessage);
            } else if (!res.ok) {
                reject(res.text);
            } else if (res.body != null) {
                resolve(res.body);
            } else {
                resolve(res.text);
            }
        });
    });
}

function apiMiddleware(): Redux.Middleware {
    return <R, S, E>(api: Redux.MiddlewareAPI<S>): Redux.Dispatch<S> =>
        (next: Redux.Dispatch<S>): Redux.Dispatch<S> =>
            (action: ReduxThunk.ThunkAction<R, S, E>): void => {
                if (action instanceof CachedApiAction && action.status === ApiStatus.INITIALIZE) {
                    action.loadCachedResult().then(
                        (result: ApiActionBase<{}>) => {
                            api.dispatch(result);
                        },
                        (error: string) => {
                            api.dispatch(action.toRequest());
                        }
                    );
                    next(action.toBase());
                } else if (action instanceof ApiAction && action.status === ApiStatus.INITIALIZE) {
                    api.dispatch(action.toRequest());
                    next(action.toBase());
                } else if (action instanceof ApiAction && action.status === ApiStatus.REQUEST) {
                    callApi(
                        action.endpoint, action.method, action.payloadType, action.payload, action.handlers, action.useBuffer
                    )
                    .then(async (data: {}) => action.toSuccess(data))
                    .then(
                        (result: ApiActionBase<{}>) => api.dispatch(result),
                        (error: string) => {
                            // if (action.type !== AuthActions.USER_CHECK) {
                            //     api.dispatch(addError(error));
                            // }
                            api.dispatch(action.toFailure(error));
                        }
                    );
                    next(action.toBase());
                } else {
                    next(action);
                }
            };
}

export {apiMiddleware};
