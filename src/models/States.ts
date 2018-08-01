import { com } from "./ele";
import ShopProfile = com.ele.model.dto.ele.ShopProfile;
import { Variety } from "./Variety";
import { ShoppingCartItem } from "./ShoppingCartItem";

interface ResultState {
    shops: ShopProfile[];
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
