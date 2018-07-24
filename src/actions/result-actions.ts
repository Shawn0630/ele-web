import * as Redux from "redux";
import { mock as mockShops, Shop } from "../models/Shop";
import { mock as mockVarieties, Variety } from "../models/Variety";

interface CachedShopListResult {
    cacheKey: string;
    shops: Shop[];
}

namespace ResultActions {
    export const GET_SHOP_LIST: string = "GET_SHOP_LIST";
    export const GET_VARIETY_LIST: string = "GET_VARIETY_LIST";

    export interface GetShopList extends Redux.Action {
        shops: Shop[];
    }

    export interface GetVarietyList extends Redux.Action {
        varieties: Variety[];
    }
}

function getShopList(): ResultActions.GetShopList {
    return {
        type: ResultActions.GET_SHOP_LIST,
        shops: mockShops
    };
}

function getVarietyList(): ResultActions.GetVarietyList {
    return {
        type: ResultActions.GET_VARIETY_LIST,
        varieties: mockVarieties
    };
}

export {ResultActions, getShopList, getVarietyList};
