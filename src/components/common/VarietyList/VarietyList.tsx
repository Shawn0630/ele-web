import * as React from "react";
import * as styles from "../../../styles/variety-list.scss";
import { mock, Variety} from "../../../models/Variety";

interface VarietyProps {
    varietyDetails: Variety[];
}

class VarietyList extends React.Component<VarietyProps> {

    constructor(props: VarietyProps) {
        super(props);
    }

    public render(): JSX.Element {
        return <ul id="varietyList" className={styles.varietyList}>
                {
                    this.props.varietyDetails.map((item: Variety, index: number) => {
                        return (
                            <li key={`variety-${index}`}>
                                <img src={item.imgUrl} alt={"variety"}/>
                                <p>{item.name}</p>
                            </li>
                        );
                    })
                }
        </ul>;
    }
}

export { VarietyList };
