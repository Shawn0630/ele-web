import { RootState } from "../models/States";
import { Variety } from "../models/Variety";
import { com } from "../models/ele";
import ShopProfile = com.ele.model.dto.ele.ShopProfile;

function shopListSelector(state: RootState): ShopProfile[] {
    return state.result.shops;
}

function varietyListSelector(state: RootState): Variety[] {
    return state.result.varieties;
}

export { shopListSelector, varietyListSelector };
