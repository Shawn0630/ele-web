import * as React from "react";
import * as styles from "../../../styles/shop-list.scss";
import * as Utils from "../../../Utils";
import { ShopListItem } from "./ShopListItem";
import { com } from "../../../models/ele";
import Shop = com.ele.model.dto.ele.Shop;

interface ShopListProps {
    shops: Shop[];
}

interface ShopListStates {
    isTopShow: boolean;
}

class ShopList extends React.Component<ShopListProps> {
    constructor(props: ShopListProps) {
        super(props);

        this.state = {
            isTopShow: true
        };
    }

    public render(): JSX.Element {
        return <div className={styles.shopList} id={"shoplist"}> {
            this.props.shops.map((item: Shop, index: number) => {
                return <ShopListItem shopListItem={item} key={`shoplist-${index}`}/>;
            })
        }
        </div>;
    }
}

export {ShopList};
