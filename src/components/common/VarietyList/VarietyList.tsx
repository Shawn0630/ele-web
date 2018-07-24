import * as React from "react";
import * as styles from "../../../styles/variety-list.scss";
import { mock, VarietyDetail} from "../../../models/VarietyDetail";

interface VarietyProps {
    varietyDetails: VarietyDetail[];
}

class VarietyList extends React.Component<VarietyProps> {

    constructor(props: VarietyProps) {
        super(props);
    }

    public render(): JSX.Element {

        console.log(mock);

        return <ul id="varietyList" className={styles.varietyList}>
                {
                    this.props.varietyDetails.map((item: VarietyDetail, index: number) => {
                        return (
                            <li key={index}>
                                <img src={item.imgUrl} />
                                <p>{item.name}</p>
                            </li>
                        );
                    })
                }
        </ul>;
    }
}

export { VarietyList };
