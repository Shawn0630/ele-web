import { com } from "./ele";
import ShopProfile = com.ele.model.dto.ele.ShopProfile;
import ShopDetail = com.ele.model.dto.ele.ShopDetail;
import ShopEvaluation = com.ele.model.dto.ele.ShopEvaluation;
import { Variety } from "./Variety";
import { ShoppingCartItem } from "./ShoppingCartItem";

interface ResultState {
    shops: ShopProfile[];
    shopDetail: ShopDetail;
    shopEvaulation: ShopEvaluation;
    varieties: Variety[];
}

interface GlobalState {
    errors: string[];
}

interface CartState {
    items: ShoppingCartItem[];
}

interface RootState {
    result: ResultState;
    global: GlobalState;
    cart: CartState;
}

export {RootState, ResultState, GlobalState, CartState};
