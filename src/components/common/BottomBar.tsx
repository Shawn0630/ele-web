import * as React from "react";
import { RouteComponentProps} from "react-router-dom";
import * as styles from "../../styles/bottom-bar.scss";
import { Component } from "../../models/Component";

interface BottomBarProps {
    component: Component;

    toDist(component: Component): void;
}

class BottomBar extends React.Component<BottomBarProps> {

    constructor(props: BottomBarProps) {
        super(props);

        this.toDist = this.toDist.bind(this);
    }

    public render(): JSX.Element {
        return (
            <div id="bottomBar" className={styles.bottomBar}>
                <div onClick={this.toDist(Component.TAKEAWAY)}>
                {
                this.props.component === Component.TAKEAWAY ?
                    (<span className={styles.takeawayBlue}></span>) :
                    (<span className={styles.takeawayGrey}></span>)
                }
                    <p>Takeaway</p>
                </div>
                <div onClick={this.toDist(Component.SEARCH)}>
                {
                this.props.component === Component.SEARCH ?
                    (<span className={styles.searchBlue}></span>) :
                    (<span className={styles.searchGrey}></span>)
                }
                    <p>Search</p>
                </div>
                <div onClick={this.toDist(Component.ORDER)}>
                {
                this.props.component === Component.ORDER ?
                    (<span className={styles.orderBlue}></span>) :
                    (<span className={styles.orderGrey}></span>)
                }
                    <p>Orders</p>
                </div>
                <div onClick={this.toDist(Component.USER)}>
                {
                this.props.component === Component.USER ?
                    (<span className={styles.userBlue}></span>) :
                    (<span className={styles.userGrey}></span>)
                }
                    <p>My</p>
                </div>
            </div>
        );
    }

    private toDist(component: Component): (event: React.SyntheticEvent<HTMLDivElement>) => void {
        return (event: React.SyntheticEvent<HTMLDivElement>): void => {
            this.props.toDist(component);
        };
    }

}

export {BottomBar};
