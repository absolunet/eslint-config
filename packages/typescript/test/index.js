//--------------------------------------------------------
//-- Tester
//--------------------------------------------------------
"use strict"; // eslint-disable-line strict

const { tester } = require("@absolunet/tester");

tester.init({
	repositoryType: "sub-package",
	packageType: "simple",
	nodeType: "commonjs",
});
