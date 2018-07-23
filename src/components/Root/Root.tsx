import * as React from "react";
import { Provider } from "react-redux";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {App} from "../App";
import {Main} from "../Main/Main";

class Root extends React.PureComponent<{}> {

    public render(): JSX.Element {
        return <Router>
            <Route path="/:component?" exact={true} component={Main}/>
        </Router>;
    }
}

export {Root};
