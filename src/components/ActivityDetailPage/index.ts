import * as React from "react";
import * as Redux from "redux";
import * as ReactRedux from "react-redux";
import { withRouter } from "react-router-dom";
import { ActivityDetailPage as ActivitylDetailPageComponent, DispatchProps, StateProps } from "./ActivityDetailPage";
import { RootState } from "../../models/States";
import { getShopDetail } from "../../actions/result-actions";
import { shopDetailSelector } from "../../selectors/result";

function mapStateToProps(state: RootState, ownProps: {}): StateProps {
    return {
        ...ownProps,
        shopDetail: shopDetailSelector(state)
    };
}

function mapDisPatchToProps(dispatch: Redux.Dispatch<RootState>): DispatchProps {
    return {
        getShopDetail: (): void => {
            dispatch(getShopDetail());
        }
    };
}

// tslint:disable-next-line
const ActivityDetailPage: React.ComponentClass = withRouter(ReactRedux.connect(mapStateToProps, mapDisPatchToProps)(ActivitylDetailPageComponent));
export { ActivityDetailPage };
