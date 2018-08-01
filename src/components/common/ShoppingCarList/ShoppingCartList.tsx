import * as React from "react";
import * as styles from "../../../styles/good-list.scss";
import { config } from "../../../config";
import { ShoppingCartItem } from "../../../models/ShoppingCartItem";

interface StateProps {
    items: ShoppingCartItem[];
}

interface DispatchProps {
    getShoppingCart(): void;
}

interface ShoppingCartListStates {
    totalPrice: number;
    payText: string;
}

interface ShoppingCartListProps extends StateProps, DispatchProps {}

class ShoppingCartList extends React.PureComponent<ShoppingCartListProps, ShoppingCartListStates> {
    constructor(props: ShoppingCartListProps) {
        super(props);

        this.state = {
            totalPrice: 0,
            payText: `¥${config.deliveryThresold}元起送`
        };
    }

    public render(): JSX.Element {
        return <div>
        <div className={styles.shoppingCar}>
            <div className={styles.carAvatar}>
                <div className={styles.carImg} ref="carImg">
                    <span></span>
                </div>
            </div>
            <div className={styles.carMes}>
                <p>¥ {this.state.totalPrice}</p>
                <p>{`配送费¥ ${config.deliveryFee}`}</p>
            </div>
            <div className={styles.buyIcon} ref="buyIcon">{this.state.payText}</div>
        </div>
            <div className={styles.mask} ref="mask"></div>
            <div className={styles.carDetail} ref="carDetail">
                <div className={styles.topBar}>
                    <span>购物车</span>
                    <div className={styles.clear}>
                        <span></span>
                        清空
            </div>
                </div>
                <div className={styles.carList}>
                    <ul>
                        {
                            this.props.items.map((item: ShoppingCartItem, index: number) => {
                                return (
                                    <li key={index}>
                                        <span>{item.name}</span>
                                        <span>¥{item.price}</span>
                                        <div className={styles.addSub}>
                                            <span className={styles.img}></span>
                                            <span className={styles.orderNum}>{item.num}</span>
                                            <span className={styles.img}></span>
                                        </div>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>;
    }
}

export { ShoppingCartList, StateProps, DispatchProps };
