import * as React from "react";
import * as styles from "../../../styles/good-list.scss";
import { LoadImage } from "../LoadImage";
import { com } from "../../../models/ele";
import IGood = com.ele.model.dto.ele.IGood;

interface GoodListItemProps {
    goodItem: IGood;
    index: number;
}

class GoodListItem extends React.PureComponent<GoodListItemProps> {
    constructor(props: GoodListItemProps) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <li key={this.props.index}>
                <div className={styles.goodAvatar}>
                    <LoadImage URL={this.props.goodItem.imgUrl} className={"goodAvatar"}/>
                </div>
                <div className={styles.goodMes}>
                    <p className={styles.goodName}>{this.props.goodItem.name}</p>
                    {this.props.goodItem.desc && <p className={styles.goodDesc}>{this.props.goodItem.desc}</p>}
                    <p className={styles.goodSale}>月售{this.props.goodItem.monthSale}份
                        <span>好评率{this.props.goodItem.favorableRate}%</span>
                    </p>
                    <div className={styles.goodPrice}>
                        <span className="now-price">¥{this.props.goodItem.nowPrice}</span>
                        {this.props.goodItem.oriPrice && <del>¥{this.props.goodItem.oriPrice}</del>}
                        <span className={styles.addGood}></span>
                        {this.props.goodItem.orderNum > 0 && <span className={styles.orderNum}>{this.props.goodItem.orderNum}</span>}
                        {this.props.goodItem.orderNum > 0 && <span className={styles.subGood}></span>}
                    </div>
                </div>
            </li>
        );
    }
}

export { GoodListItem };
