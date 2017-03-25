//--------------------------------------------------------
//-- ESLint config
//--------------------------------------------------------
'use strict';

const fs   = require('fs');
const yaml = require('js-yaml');

module.exports = (() => {
	return yaml.safeLoad(fs.readFileSync(`${__dirname}/.eslintrc.yaml`, 'utf8'));
})();
