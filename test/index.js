//--------------------------------------------------------
//-- Tester
//--------------------------------------------------------
// eslint-disable-next-line import/unambiguous
"use strict";

// eslint-disable-next-line import/no-commonjs
const { tester } = require("@absolunet/tester");

tester.init({
	repositoryType: "multi-package",
	packageType: "simple",
	nodeType: "commonjs",
});
