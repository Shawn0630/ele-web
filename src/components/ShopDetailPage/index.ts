import * as React from "react";
import * as Redux from "redux";
import * as ReactRedux from "react-redux";
import { withRouter } from "react-router-dom";
import { DispatchProps, ShopDetailPage as ShopDetailPageComponent, StateProps } from "./ShopDetailPage";
import { RootState } from "../../models/States";
import { getShopDetail, getShopEvaluation } from "../../actions/result-actions";
import { shopDetailSelector, shopEvaluationSelector} from "../../selectors/result";

function mapStateToProps(state: RootState, ownProps: {}): StateProps {
    return {
        ...ownProps,
        shopDetail: shopDetailSelector(state),
        shopEvaluation: shopEvaluationSelector(state)
    };
}

function mapDisPatchToProps(dispatch: Redux.Dispatch<RootState>): DispatchProps {
    return {
        getShopDetail: (): void => {
            dispatch(getShopDetail());
        },
        getShopEvaluation: (): void => {
            dispatch(getShopEvaluation());
        }
    };
}

// tslint:disable-next-line
const ShopDetailPage: React.ComponentClass = withRouter(ReactRedux.connect(mapStateToProps, mapDisPatchToProps)(ShopDetailPageComponent));
export { ShopDetailPage };
