import * as React from "react";
import { RouteComponentProps} from "react-router-dom";
import * as styles from "../../../styles/bottom-bar.scss";

interface BottomBarProps {
    bottomChoose: BottomChooseType;
}
enum BottomChooseType {
    TAKEAWAY = "takeaway",
    SEARCH = "search",
    ORDER = "order",
    USER = "user"
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
                    this.props.bottomChoose === BottomChooseType.TAKEAWAY ?
                    (<span className={styles.takeawayBlue}></span>) :
                    (<span className={styles.takeawayGrey}></span>)
                }
                    <p>外卖</p>
                </div>
                <div>
                {
                    this.props.bottomChoose === BottomChooseType.SEARCH ?
                    (<span className={styles.searchBlue}></span>) :
                    (<span className={styles.searchGrey}></span>)
                }
                    <p>搜索</p>
                </div>
                <div>
                {
                    this.props.bottomChoose === BottomChooseType.ORDER ?
                    (<span className={styles.orderBlue}></span>) :
                    (<span className={styles.orderGrey}></span>)
                }
                    <p>订单</p>
                </div>
                <div>
                {
                    this.props.bottomChoose === BottomChooseType.USER ?
                    (<span className={styles.userBlue}></span>) :
                    (<span className={styles.userGrey}></span>)
                }
                    <p>我的</p>
                </div>
            </div>
        );
    }

}

export {BottomBar, BottomChooseType};
