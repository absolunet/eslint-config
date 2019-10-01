//--------------------------------------------------------
//-- ESLint config - Feature tests
//--------------------------------------------------------
import { tester } from '@absolunet/tester';

const { CLIEngine } = require(require.resolve('eslint', { paths: [`${__dirname}/../../packages/core`] }));



//-- Validate that subpackages return config
Object.entries(tester.subpackages).forEach(([name, root]) => {
	describe(`Validate that '${name}' works`, () => {
		test(`Ensure package returns valid ESlint shareable config`, () => {

			let config;

			expect(() => {
				config = require(root);  // eslint-disable-line global-require
			}, 'YAML is not parsable').not.toThrow();

			expect(config, 'Must contain config').toBeObject().not.toEqual({});

			let eslint;

			expect(() => {
				eslint = new CLIEngine({
					baseConfig: config,
					cwd: root,
					useEslintrc: false
				});
			}, 'Config is not parsable by ESLint').not.toThrow();

			expect(() => {
				eslint.executeOnText('');
			}, 'Config is not valid').not.toThrow();
		});

	});
});
