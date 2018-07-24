import * as React from "react";
import * as Redux from "redux";
import * as ReactRedux from "react-redux";
import { withRouter } from "react-router-dom";
import { DispatchProps, StateProps, TakeawayPage as TakeawayPageComponent } from "./TakeawayPage";
import {shopListSelector, varietyListSelector } from "../../selectors/result";
import { getShopList, getVarietyList } from "../../actions/result-actions";
import { RootState } from "../../models/States";

function mapStateToProps(state: RootState, ownProps: {}): StateProps {
    return {
        ...ownProps,
        shops: shopListSelector(state),
        varieties: varietyListSelector(state)
    };
}

function mapDisPatchToProps(dispatch: Redux.Dispatch<RootState>): DispatchProps {
    return {
        getShopList: (): void => {
            dispatch(getShopList());
        },
        getVarietyList: (): void => {
            dispatch(getVarietyList());
        }
    };
}

// tslint:disable-next-line
const TakeawayPage: React.ComponentClass = withRouter(ReactRedux.connect(mapStateToProps, mapDisPatchToProps)(TakeawayPageComponent));
export {TakeawayPage};
