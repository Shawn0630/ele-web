import * as React from "react";
import * as styles from "../../styles/good-list.scss";
import { com } from "../../models/ele";
import IShopDetail = com.ele.model.dto.ele.IShopDetail;
import IVariety = com.ele.model.dto.ele.IVariety;
import IGood = com.ele.model.dto.ele.IGood;
import { GoodListItem } from "./GoodListItem";
import { ShoppingCartList } from "../ShoppingCarList";

interface GoodListProps {
    shop: IShopDetail;
}

interface GoodListStates {}

class GoodList extends React.PureComponent<GoodListProps, GoodListStates> {

    constructor(props: GoodListProps) {
        super(props);
    }

    public render(): JSX.Element {
        return <div className={styles.list} ref="goodList">
            <div className={styles.goodVariety}>
                <ul>
                    {
                        this.props.shop.varietyList.map((item: IVariety, index: number) => {
                            return (
                                <li key={index} className={index === 0 && "active"}>
                                    <span>{item.name}</span>
                                    {item.orderNum > 0 && <span className={styles.orderNum}>{item.orderNum}</span>}
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
            <div className={styles.goodList} ref="goods">
                <ul>
                    {
                        this.props.shop.varietyList.map((item: IVariety, index: number) => {
                            return (
                                <li key={index} data-name={item.name}>
                                    <div className={styles.title}>
                                        {item.name}<span>{item.desc}</span><span>...</span>
                                    </div>
                                    <div className={styles.floatSlogan}>{item.name} {item.desc}</div>
                                    <ul>
                                        {
                                            item.goodList.map((goodItem: IGood, goodIndex: number) => {
                                                return <GoodListItem goodItem={goodItem} index={goodIndex}/>;
                                            })
                                        }
                                    </ul>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
            <ShoppingCartList />
        </div>;
    }
}

export {GoodList};
