import { override } from "./override";

interface Config {
    apiRoot?: string;
    deliveryThresold?: number;
    deliveryFee?: number;
}

const original: Config = {
    apiRoot: "/apis/",
    deliveryThresold: 25,
    deliveryFee: 5
};

const config: Config = {...original, ...override};

export { Config, config };
