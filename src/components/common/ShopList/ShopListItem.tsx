import * as React from "react";
import LazyLoad from "react-lazyload"; // tslint:disable-line
import * as styles from "../../../styles/shop-list.scss";
import * as res from "../../../styles/images";
import { com } from "../../../models/ele";
import { LoadImage } from "../../common/LoadImage/LoadImage";
import Shop = com.ele.model.dto.ele.Shop;
import PromotionType = com.ele.model.dto.ele.PromotionType;
import Promotion = com.ele.model.dto.ele.Promotion;

interface ShopListItemProps {
    shopListItem: Shop;
}

class ShopListItem extends React.Component<ShopListItemProps> {
    constructor(props: ShopListItemProps) {
        super(props);
    }

    public render(): JSX.Element {

        const placeHolder: JSX.Element = <img src={res.placehoder} className={styles.img} alt="Placeholder"/>;

        return <li className={styles.shopItem}>
            <div className={styles.topItem}
                 style={this.props.shopListItem.shopActivity && { marginBottom: `${0.2}rem`}}>
                <div className={styles.left}>
                    <div className={styles.shopImg}>
                        <LazyLoad offset={0} placeholder={placeHolder}>
                            <LoadImage URL={this.props.shopListItem.imgUrl} className={styles.img}/>
                        </LazyLoad>
                    </div>
                    {
                        this.props.shopListItem.isNewShop &&
                        <div className={styles.newShop}>
                            <span>新店</span>
                        </div>
                    }
                    <div className={styles.shopMes}>
                        <div className={styles.shopTitle}>
                            {
                                this.props.shopListItem.isBrand && <span className={styles.brand}>品牌</span>
                            }
                            <span className={styles.shopName}>{this.props.shopListItem.shopName}</span>
                        </div>
                        <div className={styles.shopScore}>
                            <div className={styles.emptyStars}></div>
                            <div className={styles.fullStars} style={{ width: `${this.props.shopListItem.starNum * 0.56}rem`}}></div>
                            <span className={styles.starNum}>{this.props.shopListItem.starNum}</span>
                            <span className={styles.monthSale}>{this.props.shopListItem.monthlySales}单</span>
                            <p>¥{this.props.shopListItem.initMoney}起送 / 配送费约¥{this.props.shopListItem.deliveryFee}</p>
                        </div>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.shopService}>
                        {this.props.shopListItem.isInsurance && <span>保</span>}
                        {this.props.shopListItem.isOntime && <span>准</span>}
                        {this.props.shopListItem.needtip && <span>票</span>}
                    </div>
                    <div className={styles.distribution}>
                        {this.props.shopListItem.isBird && <span className={styles.bird}>蜂鸟专送</span>}
                        {this.props.shopListItem.isOntime && <span className={styles.ontime}>准时达</span>}
                    </div>
                    <div className={styles.shopDistance}>
                        {this.props.shopListItem.distance}公里 / <span>{this.props.shopListItem.needTime}</span>
                    </div>
                </div>
            </div>
            {
                this.props.shopListItem.shopActivity &&
                <div className={styles.shopActivity}>
                    <ul className={styles.activityList}>
                        {
                            this.props.shopListItem.shopActivity.map((activity: Promotion, index: number) => {
                                return (
                                    (index < 2) &&
                                    <li key={index}>
                                        <p>
                                            {activity.variety === PromotionType.NEW &&
                                                <span className={styles.newUser}>新</span>}
                                            {activity.variety === PromotionType.SUBTRACTION &&
                                                <span className={styles.subtraction}>减</span>}
                                            {activity.variety === PromotionType.SPECIAL &&
                                                <span className={styles.special}>特</span>}
                                            {activity.variety === PromotionType.DISCOUNT &&
                                                <span className={styles.discount}>折</span>}
                                            {activity.slogan}
                                        </p>
                                    </li>
                                );
                            })
                        }
                    </ul>
                    <div className={styles.activityNum}>
                        {this.props.shopListItem.shopActivity.length}个活动<span></span>
                    </div>
                </div>
            }
        </li>;
    }
}

export {ShopListItem};
