import * as React from "react";
import * as styles from "../../../styles/shop-list.scss";
import * as Utils from "../../../Utils";
import { ShopListItem } from "./ShopListItem";
import { com } from "../../../models/ele";
import ShopProfile = com.ele.model.dto.ele.ShopProfile;

interface ShopListProps {
    shops: ShopProfile[];
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
            this.props.shops.map((item: ShopProfile, index: number) => {
                return <ShopListItem shopListItem={item} key={`shoplist-${index}`}/>;
            })
        }
        </div>;
    }
}

export {ShopList};
