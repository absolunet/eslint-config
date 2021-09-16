//--------------------------------------------------------
//-- Package - Given-When-Then
//--------------------------------------------------------
import fss from "@absolunet/fss";
import * as gwt from "../base.gwt";

const given = { ...gwt.given };
const when = { ...gwt.when };
const then = { ...gwt.then };

let root;
let packageConfig;

//-- Given - Reset
given.noRoot = () => {
	root = undefined;
};

given.noPackage = () => {
	packageConfig = undefined;
};

//-- Given - Root
given.root = (value) => {
	root = value;
};

//-- When - Package
when.packageIsParsed = () => {
	packageConfig = fss.readJson(`${root}/package.json`);
};

//-- Then - Config
then.packageNameShouldBeValid = () => {
	expect(packageConfig.name).toMatch(/^@absolunet\/eslint-config-(?<kebab1>[a-z][a-z0-9]*)(?<kebab2>-[a-z0-9]+)*$/u);
};

then.packageKeywordsShouldBeValid = () => {
	expect(packageConfig.keywords).toIncludeAllMembers(["eslint", "eslintconfig", "eslint-config"]);
};

export { given, when, then };
