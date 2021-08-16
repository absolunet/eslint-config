# @absolunet/eslint-loader

[![npm](https://img.shields.io/npm/v/@absolunet/eslint-loader.svg)](https://www.npmjs.com/package/@absolunet/eslint-loader)
[![npm dependencies](https://david-dm.org/absolunet/eslint-config/status.svg?path=packages/loader)](https://david-dm.org/absolunet/eslint-config?path=packages/loader)
[![npms](https://badges.npms.io/%40absolunet%2Feslint-loader.svg)](https://npms.io/search?q=%40absolunet%2Feslint-loader)
[![tests](https://github.com/absolunet/eslint-config/workflows/tests/badge.svg?branch=master)](https://github.com/absolunet/eslint-config/actions?query=workflow%3Atests+branch%3Amaster)

> ESLint YAML configuration loader

Reads and parses an ESLint YAML [shareable config](https://eslint.org/docs/developer-guide/shareable-configs.html) file and merges [Prettier](https://github.com/prettier/eslint-config-prettier) configurations on top.


## Install

```
$ npm install @absolunet/eslint-loader
```


## Usage

Expects a `shareable-config.yaml` file in the root of your package.

```js
import loader from '@absolunet/eslint-loader';

module.exports = loader(__dirname);
```


## Used configuration

- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) - Turns off all rules that are unnecessary or might conflict with Prettier.


## Related

- [Opiniated configs](https://github.com/absolunet/eslint-config)


## Documentation

View [documentation](https://documentation.absolunet.com/eslint-config/loader)






<br><br>

## License
MIT © [Absolunet](https://absolunet.com)
