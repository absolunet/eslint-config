//--------------------------------------------------------
//-- ESLint config - Module
//--------------------------------------------------------
import loader from "@absolunet/eslint-loader";
import deepMerge from "deepmerge";

const commonConfig = loader(__dirname, "shareable-config-common.yaml");
const moduleConfig = loader(__dirname, "shareable-config-module.yaml");

module.exports = deepMerge(commonConfig, moduleConfig);
