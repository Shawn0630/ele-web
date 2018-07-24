import { override } from "./override";

interface Config {
    apiRoot?: string;
}

const original: Config = {
    apiRoot: "/apis/"
};

const config: Config = {...original, ...override};

export { Config, config };
