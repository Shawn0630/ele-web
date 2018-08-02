import * as React from "react";
import * as styles from "../../styles/shop-banner.scss";
import { com } from "../../models/ele";
import IShopDetail = com.ele.model.dto.ele.IShopDetail;

interface ShopBannerProps  {
    shop: IShopDetail;

    toActivityDetail(): void;
}

class ShopBanner extends React.PureComponent<ShopBannerProps> {

    constructor(props: ShopBannerProps) {
        super(props);
        this.toActivityDetail = this.toActivityDetail.bind(this);
    }

    public render(): JSX.Element {
        return (
            <div className={styles.shopBanner}>
                <div className={styles.mask}></div>
                <div className={styles.bg}></div>
                <div className={styles.backIcon}></div>
                <div className={styles.shop} onClick={this.toActivityDetail}>
                    <div className={styles.shopImg}>
                        <img src={this.props.shop.shopImgUrl} alt={"shopImg"}/>
                    </div>
                    <div className={styles.shopMes}>
                        <p>{this.props.shop.shopName}</p>
                        <p>{this.props.shop.shopService}</p>
                        <p>{this.props.shop.announcement}</p>
                    </div>
                    <div className={styles.shopDetail}>
                        >
          </div>
                </div>
                <div className={styles.shopActivity}>
                    <span>新</span>
                    {this.props.shop.slogan}
                    <span>{this.props.shop.activityNum}个活动</span>
                </div>
            </div>
        );
    }

    private toActivityDetail(): void {
        this.props.toActivityDetail();
    }
}

export { ShopBanner };
