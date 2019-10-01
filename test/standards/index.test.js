//--------------------------------------------------------
//-- ESLint config - Standard tests
//--------------------------------------------------------
import fss        from '@absolunet/fss';
import { tester } from '@absolunet/tester';


//-- Validate subpackages package.json
Object.values(tester.subpackages).forEach((root) => {
	const configPath = `${root}/package.json`;

	describe(`Validate ${tester.getReadablePath(configPath)}`, () => {
		test(`Ensure 'package.json' contains ESLint shareable config metadata`, () => {
			const config = fss.readJson(configPath);
			expect(config.name, 'Name must be valid').toMatch(/^@absolunet\/eslint-config-(?<kebab1>[a-z][a-z0-9]*)(?<kebab2>-[a-z0-9]+)*$/u);
			expect(config.keywords, 'Keywords must be valid').toIncludeAllMembers(['eslint', 'eslintconfig', 'eslint-config']);
		});
	});
});
