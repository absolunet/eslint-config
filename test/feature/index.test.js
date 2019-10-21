//--------------------------------------------------------
//-- ESLint config - Feature tests
//--------------------------------------------------------
import { tester } from '@absolunet/tester';

const { CLIEngine } = require(require.resolve('eslint', { paths: [`${__dirname}/../../packages/core`] }));



//-- Validate that subpackages return config
Object.entries(tester.subpackages).forEach(([name, root]) => {
	describe(`Validate that '${name}' works`, () => {
		let config;
		let eslint;

		test(`Ensure YAML is parsable`, () => {
			expect(() => {
				config = require(root);  // eslint-disable-line global-require
			}).not.toThrow();
		});

		test(`Ensure file contains config`, () => {
			expect(config).toBeObject();
			expect(config).not.toEqual({});
		});

		test(`Ensure config is parsable by ESLint`, () => {
			expect(() => {
				eslint = new CLIEngine({
					baseConfig: config,
					cwd: root,
					useEslintrc: false
				});
			}).not.toThrow();
		});

		test(`Ensure config can be used`, () => {
			expect(() => {
				eslint.executeOnText('');
			}).not.toThrow();
		});
	});
});
