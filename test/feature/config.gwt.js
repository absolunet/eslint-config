//--------------------------------------------------------
//-- Config - Given-When-Then
//--------------------------------------------------------
import path from "path";
import deepmerge from "deepmerge";
import { given as baseGiven, when as baseWhen, then as baseThen } from "../base.gwt.js";

const given = { ...baseGiven };
const when = { ...baseWhen };
const then = { ...baseThen };

const { ESLint } = require(require.resolve("eslint", {
	paths: [path.join(__dirname, "..", "..", "packages", "core")],
}));

let root;
let config;
let extraConfig;
let eslint;

//-- Given - Reset
given.noRoot = () => {
	root = undefined;
};

given.noConfig = () => {
	config = undefined;
};

given.noExtraConfig = () => {
	extraConfig = undefined;
};

given.noESLint = () => {
	eslint = undefined;
};

//-- Given - Root
given.root = (value) => {
	root = value;
};

//-- Given - Extra config
given.extraConfig = (value) => {
	extraConfig = value;
};

given.currentExtraConfig = () => {
	// No extra config by default
	extraConfig = {};
};

//-- When - Config
when.configIsLoaded = () => {
	when.attempting(() => {
		config = require(root);
	});
};

when.extraConfigIsMerged = () => {
	config = deepmerge(config, extraConfig);
};

when.configIsParsed = () => {
	when.configIsLoaded();
	when.extraConfigIsMerged();

	when.attempting(() => {
		eslint = new ESLint({
			baseConfig: config,
			cwd: root,
			useEslintrc: false,
		});
	});
};

when.configIsUsed = async () => {
	when.configIsParsed();

	await when.attemptingAsync(async () => {
		await eslint.lintText("");
	});
};

//-- Then - Config
then.configShouldNotBeEmpty = () => {
	expect(config).toBeObject();
	expect(config).not.toEqual({});
};

export { given, when, then };
