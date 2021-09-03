//--------------------------------------------------------
//-- Loader - Given-When-Then
//--------------------------------------------------------
import path     from 'path';
import * as gwt from '../../../../test/base.gwt';

const given = { ...gwt.given };
const when  = { ...gwt.when };
const then  = { ...gwt.then };


let myFunction;
let root;
let file;
let config;


//-- Given - Reset
given.noFunction = () => {
	myFunction = undefined;
};

given.noRoot = () => {
	root = undefined;
};

given.noFile = () => {
	file = undefined;
};

given.noConfig = () => {
	config = undefined;
};


//-- Given
given.root = () => {
	root = path.join(__dirname, 'fixtures');
};


//-- When
when.packageIsLoaded = () => {
	myFunction = require(path.join(__dirname, '..', '..', 'dist', 'node'));  // eslint-disable-line node/global-require
};

when.functionIsCalled = () => {
	when.packageIsLoaded();
	when.attempting(() => {
		config = myFunction(root, file);
	});
};


//-- Then
then.defaultExportShouldBeAFunction = () => {
	expect(myFunction).toBeFunction();
};

then.configShouldContainFileContent = () => {
	expect(config).toContainEntry(['lorem', 'ipsum']);
};

then.configShouldContainPrettierConfig = () => {
	expect(config.rules).toContainEntry(['indent', 'off']);
};


export { given, when, then };
