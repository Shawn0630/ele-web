import * as React from "react";
import * as styles from "../../styles/shop-detail.scss";
import { ActivityDetail } from "./ActivityDetail";
import { mockEvaluation, mockShop } from "./mock";
import { ShopBanner } from "./ShopBanner";
import { GoodList } from "./GoodList";
import { ShopEvaluation } from "./ShopEvaluation";

class ShopDetail extends React.PureComponent<{}> {
    public render(): JSX.Element {
        return <div className={styles.shopDetail}>
            <ShopBanner shop={mockShop}/>
            <div className={styles.switchLabel}>
                <span className={styles.active}>商品</span>
                <span>评价</span>
            </div>
            <div className={styles.shopContent}>
                <div className={styles.goodEvaluation} ref="goodEvaluation">
                    <GoodList shop={mockShop}/>
                    <ShopEvaluation evaluation={mockEvaluation}/>
                </div>
            </div>
        </div>;
    }
}

export {ShopDetail};
