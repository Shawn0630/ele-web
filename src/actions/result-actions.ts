import * as Redux from "redux";
import * as protobuf from "protobufjs";
import { com } from "../models/ele";
import ShopProfile = com.ele.model.dto.ele.ShopProfile;
import { mock as mockVarieties, Variety } from "../models/Variety";
import { ApiAction, ApiMethod } from "./api-action";

interface CachedShopListResult {
    cacheKey: string;
    shops: ShopProfile[];
}

namespace ResultActions {
    export const GET_SHOP_LIST: string = "GET_SHOP_LIST";
    export const GET_VARIETY_LIST: string = "GET_VARIETY_LIST";

    export class GetShopList extends ApiAction<{}, ArrayBuffer, ShopProfile[]> {
        constructor() {
            super(GET_SHOP_LIST, "shop", ApiMethod.GET, null);
        }
        protected convert(data: ArrayBuffer): ShopProfile[] {
            const reader: protobuf.Reader = new protobuf.Reader(new Uint8Array(data));
            const shops: ShopProfile[] = [];
            while (reader.len > reader.pos) {
                shops.push(ShopProfile.decodeDelimited(reader));
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
