import * as React from "react";
import * as Redux from "redux";
import * as ReactRedux from "react-redux";
import {withRouter} from "react-router-dom";
import {BottomBar as BottomBarComponent} from "./BottomBar";

// tslint:disable-next-line
const BottomBar: React.ComponentClass = withRouter(BottomBarComponent);
export {BottomBar};
