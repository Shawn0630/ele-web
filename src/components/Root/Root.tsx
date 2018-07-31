import * as React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Main } from "../Main/Main";
import { ActivityDetail } from "../common/ShopDetail/ActivityDetail";
import { ShopDetail } from "../common/ShopDetail/ShopDetail";

class Root extends React.PureComponent<{}> {

    public render(): JSX.Element {
        return <Router>
            <div>
            <Route path="/:component(takeaway|search|order|user|)" exact={true} component={Main}/>
            <Route path="/shop/activity" component={ShopDetail}/>
            </div>
        </Router>;
    }
}

export {Root};
