# @absolunet/eslint-config-node

[![npm][npm-badge]][npm-url]
[![npm dependencies][dependencies-badge]][dependencies-url]
[![Tests][tests-badge]][tests-url]
[![npms][npms-badge]][npms-url]
[![License: MIT][license-badge]][license-url]


> ESLint config for Node.js

Opinionated ESLint [shareable config](https://eslint.org/docs/developer-guide/shareable-configs.html) for Node.js.

Extends [@absolunet/eslint-config-core](https://github.com/absolunet/eslint-config)


## Install

```
$ npm install @absolunet/eslint-config-node
```


## Usage

Add some ESLint config to your `.eslintrc.yaml`:

```yaml
extends: '@absolunet/node'
```


## Used plugins

- [eslint-plugin-node](https://github.com/mysticatea/eslint-plugin-node) - Additional ESLint's rules for Node.js



## Used configuration

- [plugin:node/recommended-script](https://github.com/mysticatea/eslint-plugin-node#-configs) - Recommended rules by Node.js.


## Related

- [@absolunet/tester](https://github.com/absolunet/node-tester) - Test suite for Node.js projects.

- [Other configs](https://github.com/absolunet/eslint-config)


## Documentation

View [documentation](https://documentation.absolunet.com/eslint-config/node)


## License
[MIT](LICENSE) © [Absolunet](https://absolunet.com)




[npm-badge]:          https://img.shields.io/npm/v/@absolunet/eslint-config-node?style=flat-square
[dependencies-badge]: https://img.shields.io/david/absolunet/eslint-config?path=packages/node&style=flat-square
[tests-badge]:        https://img.shields.io/github/workflow/status/absolunet/eslint-config/tests/production?label=tests&style=flat-square
[npms-badge]:         https://badges.npms.io/%40absolunet%2Feslint-config-node.svg?style=flat-square
[license-badge]:      https://img.shields.io/badge/license-MIT-green?style=flat-square

[npm-url]:          https://www.npmjs.com/package/@absolunet/eslint-config-node
[dependencies-url]: https://david-dm.org/absolunet/eslint-config?path=packages/node
[tests-url]:        https://github.com/absolunet/eslint-config/actions?query=workflow%3Atests+branch%3Aproduction
[npms-url]:         https://npms.io/search?q=%40absolunet%2Feslint-config-node
[license-url]:      https://opensource.org/licenses/MIT
