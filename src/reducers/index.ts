import * as Redux from "redux";
import { RootState } from "../models/States";
import { reduceResult } from "./result-reducer";
import { reduceGlobal } from "./global-reducer";
import { reduceCart } from "./cart-reducers";

const rootReducer: Redux.Reducer<RootState> = Redux.combineReducers<RootState>({
    result: reduceResult,
    global: reduceGlobal,
    cart: reduceCart
});

export {rootReducer};
