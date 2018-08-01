import * as Redux from "redux";
import { ApiAction, ApiMethod } from "./api-action";
import { mock as mockShoppingCartItem, ShoppingCartItem} from "../models/ShoppingCartItem";

namespace CartActions {
    export const GET_SHOPPING_CART: string = "GET_SHOPPING_CART";

    export interface GetShoppingCart extends Redux.Action {
        items: ShoppingCartItem[];
    }
}

function getShoppingCart(): CartActions.GetShoppingCart {
    return {
        type: CartActions.GET_SHOPPING_CART,
        items: mockShoppingCartItem
    };
}

export {CartActions, getShoppingCart};
