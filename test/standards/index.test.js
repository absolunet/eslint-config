//--------------------------------------------------------
//-- ESLint config - Standard tests
//--------------------------------------------------------
import fss        from '@absolunet/fss';
import { tester } from '@absolunet/tester';


//-- Validate subpackages package.json
Object.values(tester.subpackages).forEach((root) => {
	const configPath = `${root}/package.json`;

	describe(`Validate ${tester.getReadablePath(configPath)}`, () => {
		const config = fss.readJson(configPath);

		test(`Ensure name is valid`, () => {
			expect(config.name).toMatch(/^@absolunet\/eslint-config-(?<kebab1>[a-z][a-z0-9]*)(?<kebab2>-[a-z0-9]+)*$/u);
		});

		test(`Ensure keywords are valid`, () => {
			expect(config.keywords).toIncludeAllMembers(['eslint', 'eslintconfig', 'eslint-config']);
		});
	});
});
