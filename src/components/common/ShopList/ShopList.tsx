import * as React from "react";
import * as styles from "../../../styles/shop-list.scss";
import { ShopListItem } from "./ShopListItem";
import { ShopDetail } from "../../../models/ShopDetail";

interface ShopListProps {
    shopLists: ShopDetail[];
}

class ShopList extends React.Component<ShopListProps> {
    constructor(props: ShopListProps) {
        super(props);
    }

    public render(): JSX.Element {
        return <div className={styles.shopList}> {
            this.props.shopLists.map((item: ShopDetail, index: number) => {
                return <ShopListItem shopListItem={item}/>;
            })
        }
        </div>;
    }
}

export {ShopList};
