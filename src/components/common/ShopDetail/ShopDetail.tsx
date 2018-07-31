import * as React from "react";
import { ActivityDetail } from "./ActivityDetail";
import { mock as mockShopDetail } from "./mock";

class ShopDetail extends React.PureComponent<{}> {
    public render(): JSX.Element {
        return <div id="shop" style={{ position: "absolute", width: "100%" }}>
        <ActivityDetail shop={mockShopDetail}/>
        </div>;
    }
}

export {ShopDetail};
