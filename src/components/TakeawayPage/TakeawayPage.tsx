import * as React from "react";
import * as styles from "../../styles/takeaway.scss";
import { com } from "../../models/ele";
import ShopProfile = com.ele.model.dto.ele.ShopProfile;
import { Variety } from "../../models/Variety";
import { ShopList } from "../ShopList/ShopList";
import { VarietyList } from "../common/VarietyList";
import { Component, toComponent } from "../../models/Component";
import { Route, RouteComponentProps } from "react-router-dom";

interface TakeawayPageParams {

}

interface StateProps {
    shops: ShopProfile[];
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

        this.scrollToTop = this.scrollToTop.bind(this);
    }

    public componentDidMount(): void {
        this.props.getShopList();
        this.props.getVarietyList();

        $(window).scroll(() => {
            if ($(window).scrollTop() > 100) {
                this.setState({
                    isTopShow: true
                });
            } else {
                this.setState({
                    isTopShow: false
                });
            }
        });
    }

    public render(): JSX.Element {
        if (this.props.shops == null || this.props.varieties == null) {
            return null;
        }

        return <div className={styles.takeawayContainer} id="takeaway">
                <VarietyList varietyDetails={this.props.varieties}></VarietyList>
                <div className={styles.interval}></div>
                <ShopList shops={this.props.shops}></ShopList>
                {this.state.isTopShow && <div className={styles.topIcon} onClick={this.scrollToTop}></div>}
            </div>;
    }

    private scrollToTop(): void {
        $("html, body").animate({scrollTop: 0}, 500);
        //$(window).scrollTop(0);
    }
}

export {TakeawayPage, StateProps, DispatchProps};
