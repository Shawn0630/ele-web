import * as React from "react";
import * as styles from "../../styles/takeaway.scss";
import { ShopList } from "../common/ShopList/ShopList";
import { VarietyList } from "../common/VarietyList/VarietyList";
import { Component, toComponent } from "../../models/Component";
import { Route, RouteComponentProps } from "react-router-dom";

import { mock as mockShopDetails } from "../../models/ShopDetail";
import { mock as mockVarietyDetails } from "../../models/VarietyDetail";

interface TakeawayPageParams {
}

interface StateProps { }

interface TakeawayPageStates {
    isTopShow: boolean;
}

interface TakeawayPageProps extends StateProps, RouteComponentProps<TakeawayPageParams> { }

class TakeawayPage extends React.Component<TakeawayPageProps, TakeawayPageStates> {
    constructor(props: TakeawayPageProps) {
        super(props);
        this.state = {
            isTopShow: false
        };
    }

    public render(): JSX.Element {
        return <div className={styles.takeawayContainer} ref="takeaway">
                <VarietyList varietyDetails={mockVarietyDetails}></VarietyList>
                <div className={styles.interval}></div>
                <ShopList shopLists={mockShopDetails}></ShopList>
                {this.state.isTopShow && <div className={styles.topIcon}></div>}
            </div>;
    }
}

export {TakeawayPage};
