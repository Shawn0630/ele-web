import * as React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Main } from "../Main/Main";
import { ShopDetailPage } from "../ShopDetailPage";
import { ActivityDetailPage } from "../ActivityDetailPage";

class Root extends React.PureComponent<{}> {

    public render(): JSX.Element {
        return <Router>
            <div>
            <Route path="/:component(takeaway|search|order|user|)" exact={true} component={Main}/>
            <Route path="/shop" exact={true} component={ShopDetailPage}/>
                <Route path="/shop/activity" exact={true} component={ActivityDetailPage}/>
            </div>
        </Router>;
    }
}

export {Root};
