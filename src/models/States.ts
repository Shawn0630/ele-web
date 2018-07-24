import { Shop } from "./Shop";
import { Variety } from "./Variety";

interface ResultState {
    shops: Shop[];
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
