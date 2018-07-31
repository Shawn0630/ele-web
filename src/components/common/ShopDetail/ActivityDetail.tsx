import * as React from "react";
import * as styles from "../../../styles/activity-detail.scss";
import { com } from "../../../models/ele";
import Promotion = com.ele.model.dto.ele.Promotion;
import PromotionType = com.ele.model.dto.ele.PromotionType;
import IShopDetail = com.ele.model.dto.ele.IShopDetail;

interface ActivityDetailProps {
    shop: IShopDetail;
}

class ActivityDetail extends React.PureComponent<ActivityDetailProps> {

    constructor(props: ActivityDetailProps) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <div className={styles.activityDetail}>
                <div className={styles.shopName}>{this.props.shop.shopName}</div>
                <div className={styles.shopStar}>
                    <div className={styles.emptyStar}></div>
                    <div className={styles.fullStar} style={{ width: `${this.props.shop.starNum * 1.12}rem`}}></div>
                </div>
                <div className={styles.discountMes}>
                    <div className={styles.discountTitle}>
                        <span>优惠信息</span>
                    </div>
                    <ul>
                        {
                            this.props.shop.shopActivity.map((item: Promotion, index: number) => {
                                return (
                                    <li key={index}>
                                        {item.variety === PromotionType.NEW && <span className={styles.newUser}>新</span>}
                                        {item.variety === PromotionType.SUBTRACTION && <span className={styles.subtraction}>减</span>}
                                        {item.variety === PromotionType.SPECIAL && <span className={styles.special}>特</span>}
                                        {item.variety === PromotionType.DISCOUNT && <span className={styles.discount}>折</span>}
                                        {item.slogan}
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
                <div className={styles.shopSlogan}>
                    <div className={styles.sloganTitle}>
                        <span>商家公告</span>
                    </div>
                    {this.props.shop.slogan}
                </div>
                <div className={styles.backIcon}>
                    <span>X</span>
                </div>
            </div>
        );
    }
}

export { ActivityDetail };
