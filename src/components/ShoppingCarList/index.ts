import * as React from "react";
import * as Redux from "redux";
import * as ReactRedux from "react-redux";
import { cartItemsSelector } from "../../selectors/cart";
import { getShoppingCart } from "../../actions/cart-actions";
import { RootState } from "../../models/States";
import { DispatchProps, ShoppingCartList as ShoppingCartListComponent, StateProps } from "./ShoppingCartList";

function mapStateToProps(state: RootState, ownProps: {}): StateProps {
    return {
        ...ownProps,
        items: cartItemsSelector(state)
    };
}

function mapDisPatchToProps(dispatch: Redux.Dispatch<RootState>): DispatchProps {
    return {
        getShoppingCart: (): void => {
            dispatch(getShoppingCart());
        }
    };
}

// tslint:disable-next-line
const ShoppingCartList: React.ComponentClass = ReactRedux.connect(mapStateToProps, mapDisPatchToProps)(ShoppingCartListComponent);
export { ShoppingCartList };
