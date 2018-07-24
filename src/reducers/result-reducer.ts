import * as Redux from "redux";
import { ResultState } from "../models/States";
import { ResultActions } from "../actions/result-actions";

const defaultState: ResultState = {
    shops: null,
    varieties: null
};

function reduceResult(state: ResultState = defaultState, action: Redux.Action): ResultState {
    switch (action.type) {
        case ResultActions.GET_SHOP_LIST:
            return reduceGetShopList(state, action as ResultActions.GetShopList);
        case ResultActions.GET_VARIETY_LIST:
            return reduceGetVarietyList(state, action as ResultActions.GetVarietyList);
        default:
            return state;
    }
}

function reduceGetShopList(state: ResultState, action: ResultActions.GetShopList): ResultState {
    return {
        ...state,
        shops: action.shops
    };
}

function reduceGetVarietyList(state: ResultState, action: ResultActions.GetVarietyList): ResultState {
    return {
        ...state,
        varieties: action.varieties
    };
}

export {reduceResult};
