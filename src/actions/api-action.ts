import * as Redux from "redux";
import {Response} from "superagent";

enum ApiStatus {
    INITIALIZE, REQUEST, SUCCESS, FAILURE
}

enum ApiMethod {
    GET, POST, PUT, DELETE
}

enum PayloadType {
    FORM, JSON
}

interface ApiActionBase<T> extends Redux.Action {
    type: string;
    endpoint: string;
    method: ApiMethod;
    status: ApiStatus;
    error: {};
    payload: {};
    payloadType: PayloadType;
    data?: T;
    onClientError?(): T;
}

interface ApiActionEvent {
    direction: string;
    percent: number;
    total: number;
    loaded: number;
}

type ProgressHandler = (event: ApiActionEvent) => void;
type ResponseHandler = (error: {}, response?: Response) => void;
type HandlerMap = {
    "progress"?: ProgressHandler;
    "response"?: ResponseHandler;
};

abstract class ApiAction<P = {}, F = P, T = F> implements ApiActionBase<T> {
    public type: string;
    public endpoint: string;
    public method: ApiMethod;
    public status: ApiStatus;
    public error: Error;
    public payload: P;
    public payloadType: PayloadType;
    public data?: T;
    public handlers: HandlerMap;
    public useBuffer: boolean;
    public onClientError?: () => T;
    constructor(type: string, endpoint: string, method: ApiMethod = ApiMethod.GET, payload: P = null,
                payloadType: PayloadType = PayloadType.JSON, handlers: HandlerMap = null) {
        this.type = type;
        this.endpoint = endpoint;
        this.status = ApiStatus.INITIALIZE;
        this.method = method;
        this.payload = payload;
        this.payloadType = payloadType;
        this.handlers = handlers;
        this.error = null;
        this.data = null;
        this.useBuffer = false;
        this.onClientError = (): T => null;
    }

    public withBuffer(): this {
        this.useBuffer = true;

        return this;
    }

    public toRequest(): this {
        this.status = ApiStatus.REQUEST;

        return this;
    }

    public async toSuccess(data: F): Promise<ApiActionBase<T>> {
        return new Promise<ApiActionBase<T>>((resolve: (value: ApiActionBase<T>) => void, reject: (reason: {}) => void): void => {
            try {
                resolve({
                    ...this.toBase(ApiStatus.SUCCESS),
                    data: this.convert(data)
                });
            } catch (e) {
                reject(e);
            }
        });
    }

    public toFailure(error: string): ApiActionBase<{}> {
        return {
            ...this.toBase(ApiStatus.FAILURE),
            error: error
        };
    }

    public toBase(status: ApiStatus = this.status): ApiActionBase<T> {
        return {
            type: this.type,
            endpoint: this.endpoint,
            method: this.method,
            status: status,
            error: this.error,
            payload: this.payload,
            payloadType: this.payloadType,
            data: this.data,
            onClientError: this.onClientError
        };
    }

    protected abstract convert(data: F): T;

}

abstract class CachedApiAction<P = {}, F = P, T = F> extends ApiAction<P, F, T> {
    constructor(type: string, endpoint: string, method: ApiMethod = ApiMethod.POST, payload: P = null,
                payloadType: PayloadType = PayloadType.JSON, handlers: HandlerMap = null) {
        super(type, endpoint, method, payload, payloadType, handlers);
    }

    public abstract loadCachedResult(): Promise<ApiActionBase<T>>;
}

export {ApiAction, CachedApiAction, ApiStatus, ApiMethod, ApiActionBase, PayloadType, ApiActionEvent,
        HandlerMap, ProgressHandler, ResponseHandler};
