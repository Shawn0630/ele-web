import { RootState } from "../models/States";
import { Variety } from "../models/Variety";
import { com } from "../models/ele";
import ShopProfile = com.ele.model.dto.ele.ShopProfile;
import ShopDetail = com.ele.model.dto.ele.ShopDetail;
import ShopEvaluation = com.ele.model.dto.ele.ShopEvaluation;

function shopListSelector(state: RootState): ShopProfile[] {
    return state.result.shops;
}

function varietyListSelector(state: RootState): Variety[] {
    return state.result.varieties;
}

function shopDetailSelector(state: RootState): ShopDetail {
    return state.result.shopDetail;
}

function shopEvaluationSelector(state: RootState): ShopEvaluation {
    return state.result.shopEvaulation;
}

export { shopListSelector, varietyListSelector, shopDetailSelector, shopEvaluationSelector };
