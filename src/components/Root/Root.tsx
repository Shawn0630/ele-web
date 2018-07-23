import * as React from "react";
import { Provider } from "react-redux";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {App} from "../App";
import {Takeaway} from "../takeaway/Takeaway";

class Root extends React.PureComponent<{}> {

    public render(): JSX.Element {
        return <Router>
            <Route path="/" exact={true} component={Takeaway}/>
        </Router>;
    }
}

export {Root};
