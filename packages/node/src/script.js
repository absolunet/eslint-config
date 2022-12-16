//--------------------------------------------------------
//-- ESLint config - Script
//--------------------------------------------------------
import loader from "@absolunet/eslint-loader";
import deepMerge from "deepmerge";

const commonConfig = loader(__dirname, "shareable-config-common.yaml");
const scriptConfig = loader(__dirname, "shareable-config-script.yaml");

module.exports = deepMerge(commonConfig, scriptConfig);
