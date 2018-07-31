import * as React from "react";
import * as styles from "../../styles/load-image.scss";
import * as res from "../../styles/images";

enum State {
    PENDING, SUCCESS, ERROR
}
interface LoadImageProps {
    URL: string;
    className: string;
}

interface LoadImageState {
    loadState: State;
}

export class LoadImage extends React.PureComponent<LoadImageProps, LoadImageState> {

    constructor(props: LoadImageProps) {
        super(props);

        this.state = {
            loadState: State.PENDING
        };

        this.onError = this.onError.bind(this);
        this.onLoad = this.onLoad.bind(this);
    }

    public render(): JSX.Element {

       switch (this.state.loadState) {
            case State.PENDING:
                return <img src={this.props.URL} className={this.props.className}
                            onLoad={this.onLoad} onError={this.onError} alt="Loading"/>;
            case State.ERROR:
                return <img src={res.placehoder} className={this.props.className} alt="Error"/>;
            default:
               return <img src={this.props.URL} className={this.props.className} alt="Success"/>;
       }
    }

    private onLoad(event: React.SyntheticEvent<HTMLImageElement>): void {
        this.setState({
            loadState: State.SUCCESS
        });
    }

    private onError(event: React.SyntheticEvent<HTMLImageElement>): void {
        this.setState({
            loadState: State.ERROR
        });
    }

}
