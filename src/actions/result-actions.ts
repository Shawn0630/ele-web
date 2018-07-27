import * as Redux from "redux";
import * as protobuf from "protobufjs";
import { com } from "../models/ele";
import Shop = com.ele.model.dto.ele.Shop;
import { mock as mockVarieties, Variety } from "../models/Variety";
import { ApiAction, ApiMethod } from "./api-action";

interface CachedShopListResult {
    cacheKey: string;
    shops: Shop[];
}

namespace ResultActions {
    export const GET_SHOP_LIST: string = "GET_SHOP_LIST";
    export const GET_VARIETY_LIST: string = "GET_VARIETY_LIST";

    export class GetShopList extends ApiAction<{}, ArrayBuffer, Shop[]> {
        constructor() {
            super(GET_SHOP_LIST, "shop", ApiMethod.GET, null);
        }
        protected convert(data: ArrayBuffer): Shop[] {
            const reader: protobuf.Reader = new protobuf.Reader(new Uint8Array(data));
            const shops: Shop[] = [];
            while (reader.len > reader.pos) {
                shops.push(Shop.decodeDelimited(reader));
            }

            return shops;
        }
    }

    export interface GetVarietyList extends Redux.Action {
        varieties: Variety[];
    }
}

function getShopList(): ResultActions.GetShopList {
    return new ResultActions.GetShopList().withBuffer();
}

function getVarietyList(): ResultActions.GetVarietyList {
    return {
        type: ResultActions.GET_VARIETY_LIST,
        varieties: mockVarieties
    };
}

export {ResultActions, getShopList, getVarietyList};
