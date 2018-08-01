import * as React from "react";
import { ActivityDetail } from "./ActivityDetail";
import { mock as mockShopDetail } from "./mock";
import { ShopBanner } from "./ShopBanner";
import { GoodList } from "./GoodList";

class ShopDetail extends React.PureComponent<{}> {
    public render(): JSX.Element {
        return <div id="shop" style={{ position: "absolute", width: "100%" }}>
        {/* <ActivityDetail shop={mockShopDetail}/> */}
        <ShopBanner shop={mockShopDetail}/>
        <GoodList shop={mockShopDetail}/>
        </div>;
    }
}

export {ShopDetail};
