import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import * as styles from "../../styles/top-bar.scss";

import { Component } from "../../models/Component";

interface TopBarContent {
    left: boolean;
    middle: string;
    right: boolean;
}

interface TopBarProps {
    component: Component;
    title?: string;
}

class TopBar extends React.Component<TopBarProps> {

    constructor(props: TopBarProps) {
        super(props);
    }

    public render(): JSX.Element {
        const content: TopBarContent = this.toTopBarContent(this.props.component, this.props.title);

        return (
            <div id="topBar" className={styles.topBar}>
            {
                content.left === true ?
                (<div className={styles.searchIcon}></div>) :
                (<div className={styles.backIcon}></div>)
            }
            <span>{content.middle}</span>
            {
                content.right && <div className={styles.accountIcon}></div>
            }
            </div>
        );
    }

    private toTopBarContent(component: Component, title: string): TopBarContent {
        switch (component) {
            case Component.TAKEAWAY:
                return {
                    left: true,
                    middle: title,
                    right: true
                };
            case Component.SEARCH:
                return {
                    left: true,
                    middle: "SEARCH",
                    right: false
                };
            case Component.ORDER:
                return {
                    left: false,
                    middle: "ORDER",
                    right: true
                };
            case "user":
                return {
                    left: false,
                    middle: "USER",
                    right: false
                };
            default:
                return {
                    left: true,
                    middle: title,
                    right: true
                };
        }
    }
}

export {TopBar};
