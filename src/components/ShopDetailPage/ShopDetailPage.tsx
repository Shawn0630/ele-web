import * as React from "react";
import * as styles from "../../styles/shop-detail.scss";
import { com } from "../../models/ele";
import ShopDetail = com.ele.model.dto.ele.ShopDetail;
import ShopEvaluation = com.ele.model.dto.ele.ShopEvaluation;
import { Route, RouteComponentProps } from "react-router-dom";
import { mockEvaluation, mockShop } from "./mock";
import { ShopBanner } from "./ShopBanner";
import { GoodList } from "./GoodList";
import { Evaluation } from "./Evaluation";

interface StateProps {
    shopDetail: ShopDetail;
    shopEvaluation: ShopEvaluation;
}

interface DispatchProps {
    getShopDetail(): void;
    getShopEvaluation(): void;
}

interface ShopDetailProps extends StateProps, DispatchProps, RouteComponentProps<{}> {}

class ShopDetailPage extends React.PureComponent<ShopDetailProps> {

    constructor(props: ShopDetailProps) {
        super(props);

        this.toActivityDetail = this.toActivityDetail.bind(this);
    }

    public componentDidMount(): void {
        this.props.getShopDetail();
        this.props.getShopEvaluation();
    }

    public render(): JSX.Element {
        if (this.props.shopDetail == null || this.props.shopEvaluation == null) {
            return null;
        }

        return <div className={styles.shopDetail}>
            <ShopBanner shop={mockShop} toActivityDetail={this.toActivityDetail}/>
            <div className={styles.switchLabel}>
                <span className={styles.active}>商品</span>
                <span>评价</span>
            </div>
            <div className={styles.shopContent}>
                <div className={styles.goodEvaluation} ref="goodEvaluation">
                    <GoodList shop={this.props.shopDetail}/>
                    <Evaluation evaluation={this.props.shopEvaluation}/>
                </div>
            </div>
        </div>;
    }

    private toActivityDetail(): void {
        this.props.history.push("/shop/activity");
    }
}

export { ShopDetailPage, StateProps, DispatchProps};
