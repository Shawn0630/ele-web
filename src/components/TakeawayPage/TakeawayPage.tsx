import * as React from "react";
import * as styles from "../../styles/takeaway.scss";
import { com } from "../../models/ele";
import Shop = com.ele.model.dto.ele.Shop;
import { Variety } from "../../models/Variety";
import { ShopList } from "../common/ShopList/ShopList";
import { VarietyList } from "../common/VarietyList/VarietyList";
import { Component, toComponent } from "../../models/Component";
import { Route, RouteComponentProps } from "react-router-dom";

interface TakeawayPageParams {

}

interface StateProps {
    shops: Shop[];
    varieties: Variety[];
}

interface DispatchProps {
    getShopList(): void;
    getVarietyList(): void;
}

interface TakeawayPageStates {
    isTopShow: boolean;
}

interface TakeawayPageProps extends StateProps, DispatchProps, RouteComponentProps<TakeawayPageParams> { }

class TakeawayPage extends React.Component<TakeawayPageProps, TakeawayPageStates> {
    constructor(props: TakeawayPageProps) {
        super(props);
        this.state = {
            isTopShow: false
        };

        this.props.getShopList();
        this.props.getVarietyList();
    }

    public render(): JSX.Element {
        if (this.props.shops == null || this.props.varieties == null) {
            return null;
        }

        return <div className={styles.takeawayContainer} ref="takeaway">
                <VarietyList varietyDetails={this.props.varieties}></VarietyList>
                <div className={styles.interval}></div>
                <ShopList shops={this.props.shops}></ShopList>
                {this.state.isTopShow && <div className={styles.topIcon}></div>}
            </div>;
    }
}

export {TakeawayPage, StateProps, DispatchProps};
