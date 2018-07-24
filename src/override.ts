import { Config } from "./config";
let override: Config = {};

try {
    override = require("./override.json"); // tslint:disable-line
} catch (e) {
    console.log("Unable to read overriden configuration, use original one"); // tslint:disable-line
}

export { override };
