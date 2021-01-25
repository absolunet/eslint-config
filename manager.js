//--------------------------------------------------------
//-- Manager
//--------------------------------------------------------
'use strict';

const path        = require('path');
const fss         = require('@absolunet/fss');      // eslint-disable-line node/no-unpublished-require
const { manager } = require('@absolunet/manager');  // eslint-disable-line node/no-unpublished-require

manager.init({
	repositoryType: 'multi-package',
	dist: {
		node: true
	},
	tasks: {
		prepare: {
			postRun: ({ terminal }) => {
				terminal.print(`Sync Node.js version in all package.json`).spacer();

				const nodeVersion = fss.readJson(path.join(__dirname, 'package.json')).engines.node;

				fss.scandir(path.join(__dirname, 'packages'), 'dir', { fullPath: true }).forEach((root) => {
					const packageFile = `${root}/package.json`;
					const packageData = fss.readJson(packageFile);
					packageData.engines.node = nodeVersion;
					fss.writeJson(packageFile, packageData, { space: 2 });
				});

			}
		}
	}
});
