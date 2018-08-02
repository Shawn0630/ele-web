import * as Redux from "redux";
import { ResultState } from "../models/States";
import { ResultActions } from "../actions/result-actions";
import { ApiStatus } from "../actions/api-action";

const defaultState: ResultState = {
    shops: null,
    varieties: null,
    shopDetail: null,
    shopEvaulation: null
};

function reduceResult(state: ResultState = defaultState, action: Redux.Action): ResultState {
    switch (action.type) {
        case ResultActions.GET_SHOP_LIST:
            return reduceGetShopList(state, action as ResultActions.GetShopList);
        case ResultActions.GET_VARIETY_LIST:
            return reduceGetVarietyList(state, action as ResultActions.GetVarietyList);
        case ResultActions.GET_SHOP_DETAIL:
            return reduceGetShopDetail(state, action as ResultActions.GetShopDetail);
        case ResultActions.GET_SHOP_EVALUATION:
            return reduceGetShopEvaluation(state, action as ResultActions.GetShopEvaluation);
        default:
            return state;
    }
}

function reduceGetShopList(state: ResultState, action: ResultActions.GetShopList): ResultState {
    switch (action.status) {
        case ApiStatus.SUCCESS:
            return {
                ...state,
                shops: action.data
            };
        case ApiStatus.INITIALIZE:
            return {
                ...state,
                shops: null
            };
        case ApiStatus.FAILURE:
            return {
                ...state,
                shops: null
            };
        default:
            return state;
    }
}

function reduceGetShopDetail(state: ResultState, action: ResultActions.GetShopDetail): ResultState {
    switch (action.status) {
        case ApiStatus.SUCCESS:
            return {
                ...state,
                shopDetail: action.data
            };
        case ApiStatus.INITIALIZE:
            return {
                ...state,
                shopDetail: null
            };
        case ApiStatus.FAILURE:
            return {
                ...state,
                shopDetail: null
            };
        default:
            return state;
    }
}

function reduceGetShopEvaluation(state: ResultState, action: ResultActions.GetShopEvaluation): ResultState {
    switch (action.status) {
        case ApiStatus.SUCCESS:
            return {
                ...state,
                shopEvaulation: action.data
            };
        case ApiStatus.INITIALIZE:
            return {
                ...state,
                shopEvaulation: null
            };
        case ApiStatus.FAILURE:
            return {
                ...state,
                shopEvaulation: null
            };
        default:
            return state;
    }
}

function reduceGetVarietyList(state: ResultState, action: ResultActions.GetVarietyList): ResultState {
    return {
        ...state,
        varieties: action.varieties
    };
}

export {reduceResult};
