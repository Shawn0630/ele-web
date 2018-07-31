import { com } from "./ele";
import ShopProfile = com.ele.model.dto.ele.ShopProfile;
import { Variety } from "./Variety";

interface ResultState {
    shops: ShopProfile[];
    varieties: Variety[];
}

interface GlobalState {
    errors: string[];
}

interface RootState {
    result: ResultState;
    global: GlobalState;
}

export {RootState, ResultState, GlobalState};
