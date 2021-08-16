//--------------------------------------------------------
//-- Loader - Feature tests
//--------------------------------------------------------
import { given, when, then } from './index.gwt';


describe(`Validate that loader works`, () => {

	beforeEach(() => {
		given.noException();
		given.noFunction();
		given.noRoot();
		given.noFile();
		given.noConfig();
	});


	test(`Ensure default export is a function`, () => {
		when.packageIsLoaded();
		then.defaultExportShouldBeAFunction();
	});

	test(`Ensure root path is mandatory`, () => {
		when.packageIsLoaded();
		when.functionIsCalled();
		then.shouldHaveThrownMessageContaining('"root" is required');
	});

	test(`Ensure config contains parsed file content`, () => {
		given.rootDefined();
		when.packageIsLoaded();
		when.functionIsCalled();
		then.configShouldContainFileContent();
	});

	test(`Ensure Prettier config overwrites file content`, () => {
		given.rootDefined();
		when.packageIsLoaded();
		when.functionIsCalled();
		then.configShouldContainPrettierConfig();
	});

});
