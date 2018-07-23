import * as React from "react";
import { TopBar } from "../common/TopBar/TopBar";
import { BottomBar } from "../common/BottomBar/BottomBar";
import { Component, toComponent} from "../../models/Component";
import { RouteComponentProps } from "react-router-dom";

interface MainParams {
    component: string;
}

interface StateProps { }

interface MainStates {
    isTopShow: boolean;
}

interface MainProps extends StateProps, RouteComponentProps<MainParams> {}

class Main extends React.Component<MainProps, MainStates> {
    constructor(props: MainProps) {
        super(props);

        this.state = {
            isTopShow: false
        };

    }

    public render(): JSX.Element {
        const component: string = this.props.match.params.component;

        return (
            <div id="main">
                <TopBar component={toComponent(component)}></TopBar>

                <BottomBar component={toComponent(component)}></BottomBar>
            </div>
        );
    }

}

export {Main};
