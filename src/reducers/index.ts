import * as Redux from "redux";
import { RootState } from "../models/States";
import { reduceResult } from "./result-reducer";
import { reduceGlobal } from "./global-reducer";

const rootReducer: Redux.Reducer<RootState> = Redux.combineReducers<RootState>({
    result: reduceResult,
    global: reduceGlobal
});

export {rootReducer};
