import * as React from "react";
import * as Redux from "redux";
import * as ReactRedux from "react-redux";
import { withRouter } from "react-router-dom";
import { TopBar as TopBarComponent } from "./TopBar";

// tslint:disable-next-line
const TopBar: React.ComponentClass = withRouter(TopBarComponent);
export { TopBar };
