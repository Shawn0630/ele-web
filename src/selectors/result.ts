import { RootState } from "../models/States";
import { Variety } from "../models/Variety";
import { com } from "../models/ele";
import Shop = com.ele.model.dto.ele.Shop;

function shopListSelector(state: RootState): Shop[] {
    return state.result.shops;
}

function varietyListSelector(state: RootState): Variety[] {
    return state.result.varieties;
}

export { shopListSelector, varietyListSelector };
