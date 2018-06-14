//--------------------------------------------------------
//-- Tester
//--------------------------------------------------------
'use strict';

const ava    = require('ava');
const tester = require('@absolunet/tester');






tester.lintJs();
tester.lintJson();
tester.lintYaml();

ava.test('Config loads', (t) => {
	const data = require('../index');  // eslint-disable-line global-require
	t.deepEqual(typeof data, 'object', 'YAML is not parsable');
	t.deepEqual(typeof data.rules, 'object', 'Does not contain rules');
});
