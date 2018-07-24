import * as Redux from "redux";

namespace ErrorActions {
    export const ADD_ERROR: string = "ADD_ERROR";
    export const REMOVE_ERROR: string = "REMOVE_ERROR";

    export interface AddErrorAction extends Redux.Action {
        error: string;
    }

    export interface RemoveErrorAction extends Redux.Action {
        error: string;
    }
}

function addError(error: string): ErrorActions.AddErrorAction {
    return {
        type: ErrorActions.ADD_ERROR,
        error: error
    };
}

function removeError(error: string): ErrorActions.RemoveErrorAction {
    return {
        type: ErrorActions.REMOVE_ERROR,
        error: error
    };
}

export {ErrorActions, addError, removeError};
