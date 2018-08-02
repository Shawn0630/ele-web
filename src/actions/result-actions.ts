import * as Redux from "redux";
import * as protobuf from "protobufjs";
import { com } from "../models/ele";
import ShopProfile = com.ele.model.dto.ele.ShopProfile;
import ShopDetail = com.ele.model.dto.ele.ShopDetail;
import ShopEvaluation = com.ele.model.dto.ele.ShopEvaluation;
import { mock as mockVarieties, Variety } from "../models/Variety";
import { ApiAction, ApiMethod } from "./api-action";

interface CachedShopListResult {
    cacheKey: string;
    shops: ShopProfile[];
}

namespace ResultActions {
    export const GET_SHOP_LIST: string = "GET_SHOP_LIST";
    export const GET_VARIETY_LIST: string = "GET_VARIETY_LIST";
    export const GET_SHOP_DETAIL: string = "GET_SHOP_DETAIL";
    export const GET_SHOP_EVALUATION: string = "GET_SHOP_EVALUATION";

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

    export class GetShopDetail extends ApiAction<{}, ArrayBuffer, ShopDetail> {
        constructor() {
            super(GET_SHOP_DETAIL, "detail", ApiMethod.GET, null);
        }

        protected convert(data: ArrayBuffer): ShopDetail {
            const reader: protobuf.Reader = new protobuf.Reader(new Uint8Array(data));

            return ShopDetail.decodeDelimited(reader);
        }
    }

    export class GetShopEvaluation extends ApiAction<{}, ArrayBuffer, ShopEvaluation> {
        constructor() {
            super(GET_SHOP_DETAIL, "evaluation", ApiMethod.GET, null);
        }

        protected convert(data: ArrayBuffer): ShopEvaluation {
            const reader: protobuf.Reader = new protobuf.Reader(new Uint8Array(data));

            return ShopEvaluation.decodeDelimited(reader);
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

function getShopDetail(): ResultActions.GetShopDetail {
    return new ResultActions.GetShopDetail().withBuffer();
}

function getShopEvaluation(): ResultActions.GetShopEvaluation {
    return new ResultActions.GetShopEvaluation().withBuffer();
}

export {ResultActions, getShopList, getShopDetail, getShopEvaluation, getVarietyList};
