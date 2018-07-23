import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import * as styles from "../../../styles/top-bar.scss";

interface TopBarProps {
    left: string;
    middle: string;
    right: boolean;
}

class TopBar extends React.Component<TopBarProps> {

    constructor(props: TopBarProps) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <div id="topBar" className={styles.topBar}>
            {
                this.props.left === "search" ?
                (<div className={styles.searchIcon}></div>) :
                (<div className={styles.backIcon}></div>)
            }
            <span>{this.props.middle}</span>
            {
                this.props.right && <div className={styles.accountIcon}></div>
            }
            </div>
        );
    }
}

export {TopBar};
