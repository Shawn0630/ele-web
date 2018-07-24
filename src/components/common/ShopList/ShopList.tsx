import * as React from "react";
import * as styles from "../../../styles/shop-list.scss";
import { ShopListItem } from "./ShopListItem";
import { mock, ShopDetail} from "../../../models/ShopDetail";

interface ShopListProps {
    shopLists: ShopDetail[];
}

class ShopList extends React.Component<ShopListProps> {
    constructor(props: ShopListProps) {
        super(props);
    }

    public render(): JSX.Element {
        return <div className={styles.shopList}> {
            mock.map((item: ShopDetail, index: number) => {
                return <ShopListItem shopListItem={item}/>;
            })
        }
        </div>;
    }
}

export {ShopList};
