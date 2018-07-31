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
            <Route path="/takeaway" exact={true} component={Main}/>
            <Route path="/search" exact={true} component={Main}/>
            <Route path="/user" exact={true} component={Main}/>
            <Route path="/order" exact={true} component={Main}/>
            <Route path="/shop" exact={true} component={ShopDetail}/>
            </div>
        </Router>;
    }
}

export {Root};
