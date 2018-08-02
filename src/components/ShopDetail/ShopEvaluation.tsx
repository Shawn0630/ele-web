import * as React from "react";
import * as styles from "../../styles/shop-evaluation.scss";
import { com } from "../../models/ele";
import IShopEvaluation = com.ele.model.dto.ele.IShopEvaluation;
import IEvaluationStamp = com.ele.model.dto.ele.IEvaluationStamp;
import IEvaluationComment = com.ele.model.dto.ele.IEvaluationComment;

interface ShopEvaluationProps {
    evaluation: IShopEvaluation;
 }

interface ShopEvaluationStates {

}

class ShopEvaluation extends React.PureComponent<ShopEvaluationProps, ShopEvaluationStates> {
    constructor(props: ShopEvaluationProps) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <div className={styles.shopEvaluation}>
                <div className={styles.shopScore}>
                    <div className={styles.shopDecimal}>
                        <p>{this.props.evaluation.score}</p>
                        <p>综合评价</p>
                        <p>高于周边商家{this.props.evaluation.ratio}%</p>
                    </div>
                    <div className={styles.shopStar}>
                        <div className="service">
                            <span>服务态度</span>
                            <span className={styles.emptyStar}></span>
                            <span className={styles.fullStar} style={{ width: `${this.props.evaluation.service * 0.56}rem`}}></span>
                            <span className={styles.score}>{this.props.evaluation.service}</span>
                        </div>
                        <div className="dish">
                            <span>菜品评价</span>
                            <span className={styles.emptyStar}></span>
                            <span className={styles.fullStar} style={{ width: `${this.props.evaluation.dish * 0.56}rem` }}></span>
                            <span className={styles.score}>{this.props.evaluation.dish}</span>
                        </div>
                        <div className="time">
                            <span>送达时间</span>
                            <span>{this.props.evaluation.time}分钟</span>
                        </div>
                    </div>
                </div>
                <div className={styles.interval}></div>
                <div className={styles.userEvaluation}>
                    <ul className={styles.evaluationVariety} ref="evaluationVariety">
                        {
                            this.props.evaluation.stamps.map((item: IEvaluationStamp, index: number) => {
                                return (
                                    <span key={index} className={(index === 0 ? "active" : "") + (item.name === "不满意" ? "bad" : "")}>
                                        {item.name}({item.num})
                                    </span>
                                );
                            })
                        }
                    </ul>
                    <ul className={styles.evaluationList}>
                        {
                            this.props.evaluation.comments.map((item: IEvaluationComment, index: number) => {
                                return (
                                    <li key={index}>
                                        <div className={styles.userAvatar}>
                                            <img src={item.profileImg} alt={"profile image"}/>
                                        </div>
                                        <div className={styles.userEval}>
                                            <div className={styles.userMes}>
                                                <p>{item.name}<span>{item.time}</span></p>
                                                <span className={styles.emptyStar}></span>
                                                <span className={styles.fullStar} style={{ width: `${item.star * 0.56}rem`}}></span>
                                                {item.costTime && <p className="cost-time">{item.costTime}分钟送达</p>}
                                            </div>
                                            <div className={styles.evaluationContent}>{item.content}</div>
                                            <div className={styles.foodList}
                                                 style={{ marginTop: !item.content ? "0.6rem" : "" }}>
                                                {
                                                    item.foods.map((foodItem: string, foodIndex: number) => {
                                                        return (
                                                            <span key={foodIndex}>
                                                                {foodItem}
                                                            </span>
                                                        );
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export { ShopEvaluation };
