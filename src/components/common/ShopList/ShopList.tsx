import * as React from "react";
import * as styles from "../../../styles/shop-list.scss";
import { ShopListItem } from "./ShopListItem";
import { Shop } from "../../../models/Shop";

interface ShopListProps {
    shops: Shop[];
}

class ShopList extends React.Component<ShopListProps> {
    constructor(props: ShopListProps) {
        super(props);
    }

    public render(): JSX.Element {
        return <div className={styles.shopList}> {
            this.props.shops.map((item: Shop, index: number) => {
                return <ShopListItem shopListItem={item}/>;
            })
        }
        </div>;
    }
}

export {ShopList};
