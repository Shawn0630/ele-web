import * as Redux from "redux";
import { CartState } from "../models/States";
import { CartActions } from "../actions/cart-actions";

const defaultState: CartState = {
    items: []
};

function reduceCart(state: CartState = defaultState, action: Redux.Action): CartState {
    switch (action.type) {
        case CartActions.GET_SHOPPING_CART:
            return reduceGetShoppingCart(state, action as CartActions.GetShoppingCart);
        default:
            return state;
    }
}

function reduceGetShoppingCart(state: CartState, action: CartActions.GetShoppingCart): CartState {
    return {
        items: action.items
    };
}

export { reduceCart };
