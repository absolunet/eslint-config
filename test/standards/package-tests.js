//--------------------------------------------------------
//-- Package tests
//--------------------------------------------------------
// eslint-disable-next-line import/no-anonymous-default-export
export default ({ given, when, then }) => {
	beforeEach(() => {
		given.noException();
		given.noRoot();
		given.noPackage();
		given.currentRoot();
	});

	test(`Ensure name is valid`, () => {
		when.packageIsParsed();
		then.packageNameShouldBeValid();
	});

	test(`Ensure keywords are valid`, () => {
		when.packageIsParsed();
		then.packageKeywordsShouldBeValid();
	});
};
