# @absolunet/eslint-loader

[![npm][npm-badge]][npm-url]
[![npm dependencies][dependencies-badge]][dependencies-url]
[![Tests][tests-badge]][tests-url]
[![npms][npms-badge]][npms-url]
[![License: MIT][license-badge]][license-url]

> ESLint YAML configuration loader

Reads and parses an ESLint YAML [shareable config](https://eslint.org/docs/developer-guide/shareable-configs.html) file and merges [Prettier](https://github.com/prettier/eslint-config-prettier) configurations on top.

## Install

```
$ npm install @absolunet/eslint-loader
```

## Usage

Expects a `shareable-config.yaml` file in the root of your package.

```js
import loader from "@absolunet/eslint-loader";

module.exports = loader(__dirname);
```

## Used configuration

- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) - Turns off all rules that are unnecessary or might conflict with Prettier.

## Related

- [Opiniated configs](https://github.com/absolunet/eslint-config)

## Documentation

View [documentation](https://documentation.absolunet.com/eslint-config/loader)

## License

[MIT](LICENSE) © [Absolunet](https://absolunet.com)

[npm-badge]: https://img.shields.io/npm/v/@absolunet/eslint-loader?style=flat-square
[dependencies-badge]: https://img.shields.io/david/absolunet/eslint-config?path=packages/loader&style=flat-square
[tests-badge]: https://img.shields.io/github/workflow/status/absolunet/eslint-config/tests/production?label=tests&style=flat-square
[npms-badge]: https://badges.npms.io/%40absolunet%2Feslint-loader.svg?style=flat-square
[license-badge]: https://img.shields.io/badge/license-MIT-green?style=flat-square
[npm-url]: https://www.npmjs.com/package/@absolunet/eslint-loader
[dependencies-url]: https://david-dm.org/absolunet/eslint-config?path=packages/loader
[tests-url]: https://github.com/absolunet/eslint-config/actions?query=workflow%3Atests+branch%3Aproduction
[npms-url]: https://npms.io/search?q=%40absolunet%2Feslint-loader
[license-url]: https://opensource.org/licenses/MIT
