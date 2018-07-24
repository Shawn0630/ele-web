import * as Redux from "redux";
import { GlobalState } from "../models/States";
import { ErrorActions } from "../actions/error-actions";

const defaultState: GlobalState = {
    errors: []
};

function reduceGlobal(state: GlobalState = defaultState, action: Redux.Action): GlobalState {
    switch (action.type) {
        case ErrorActions.ADD_ERROR:
            return reduceAddError(state, action as ErrorActions.AddErrorAction);
        case ErrorActions.REMOVE_ERROR:
            return reduceRemoveError(state, action as ErrorActions.RemoveErrorAction);
        default:
            return state;
    }
}

function reduceAddError(state: GlobalState, action: ErrorActions.AddErrorAction): GlobalState {
    if (state.errors.indexOf(action.error) < 0) {
        return {
            ...state,
            errors: [...state.errors, action.error]
        };
    } else {
        return state;
    }
}

function reduceRemoveError(state: GlobalState, action: ErrorActions.RemoveErrorAction): GlobalState {
    const index: number = state.errors.indexOf(action.error);
    if (index >= 0) {
        const errors: string[] = [...state.errors];
        errors.splice(index, 1);

        return {
            ...state,
            errors: errors
        };
    } else {
        return state;
    }
}

export {reduceGlobal};
