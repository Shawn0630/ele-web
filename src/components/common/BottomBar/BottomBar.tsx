import * as React from "react";
import { RouteComponentProps} from "react-router-dom";
import * as styles from "../../../styles/bottom-bar.scss";
import { Component } from "../../../models/Component";

interface BottomBarProps {
    component: Component;
}

class BottomBar extends React.Component<BottomBarProps> {

    constructor(props: BottomBarProps) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <div id="bottomBar" className={styles.bottomBar}>
                <div>
                {
                this.props.component === Component.TAKEAWAY ?
                    (<span className={styles.takeawayBlue}></span>) :
                    (<span className={styles.takeawayGrey}></span>)
                }
                    <p>外卖</p>
                </div>
                <div>
                {
                this.props.component === Component.SEARCH ?
                    (<span className={styles.searchBlue}></span>) :
                    (<span className={styles.searchGrey}></span>)
                }
                    <p>搜索</p>
                </div>
                <div>
                {
                this.props.component === Component.ORDER ?
                    (<span className={styles.orderBlue}></span>) :
                    (<span className={styles.orderGrey}></span>)
                }
                    <p>订单</p>
                </div>
                <div>
                {
                this.props.component === Component.USER ?
                    (<span className={styles.userBlue}></span>) :
                    (<span className={styles.userGrey}></span>)
                }
                    <p>我的</p>
                </div>
            </div>
        );
    }

}

export {BottomBar};
