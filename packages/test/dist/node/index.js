"use strict";

var _pkgDir = _interopRequireDefault(require("pkg-dir"));

var _eslintLoader = _interopRequireDefault(require("@absolunet/eslint-loader"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//--------------------------------------------------------
//-- ESLint config
//--------------------------------------------------------
const config = (0, _eslintLoader.default)(_pkgDir.default.sync(__dirname));
module.exports = config;