import { RootState } from "../models/States";
import { ShoppingCartItem } from "../models/ShoppingCartItem";

function cartItemsSelector(state: RootState): ShoppingCartItem[] {
    return state.cart.items;
}

export { cartItemsSelector };
