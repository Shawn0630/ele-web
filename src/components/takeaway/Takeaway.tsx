import * as React from "react";
import { TopBar } from "../common/TopBar/TopBar";
import { BottomBar, BottomChooseType} from "../common/BottomBar/BottomBar";
import { RouteComponentProps } from "react-router-dom";

interface StateProps { }

interface TakeawayStates {
    isTopShow: boolean;
}

interface TakeawayProps extends StateProps, RouteComponentProps<{}> {}

class Takeaway extends React.Component<TakeawayProps, TakeawayStates> {
    constructor(props: TakeawayProps) {
        super(props);

        this.state = {
            isTopShow: false
        };

    }

    public render(): JSX.Element {
        return (
            <div id="takeaway">
                <TopBar left={"search"} middle={"test"} right={true}></TopBar>
                <BottomBar bottomChoose={BottomChooseType.SEARCH}></BottomBar>
            </div>
        );
    }
}

export {Takeaway};
