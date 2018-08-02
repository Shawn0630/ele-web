import * as React from "react";
import { TopBar } from "../common/TopBar";
import { TakeawayPage } from "../TakeawayPage";
import { BottomBar } from "../common/BottomBar";
import { Component, toComponent} from "../../models/Component";
import { Route, RouteComponentProps } from "react-router-dom";

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

        this.toDist = this.toDist.bind(this);
    }

    public render(): JSX.Element {
        const component: string = this.props.match.params.component;

        return (
            <div id="main">
                <TopBar component={toComponent(component)}></TopBar>
                <div>
                    <Route path="/" exact={true} component={TakeawayPage}/>
                    <Route path="/takeaway" exact={true} component={TakeawayPage}/>
                </div>
                <BottomBar component={toComponent(component)} toDist={this.toDist}></BottomBar>
            </div>
        );
    }

    private toDist(component: Component): void {
        let url: string;
        switch (component) {
            case Component.TAKEAWAY:
                 url  = "/takeaway";
                 break;
            case Component.SEARCH:
                 url = "/search";
                 break;
            case Component.ORDER:
                 url = "/order";
                 break;
            case Component.USER:
                 url = "/user";
                 break;
            default:
                 url = "/takeaway";

        }
        this.props.history.push(url);
    }

}

export {Main};
