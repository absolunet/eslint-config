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

For type `script` or CommonJS

```yaml
extends: '@absolunet/eslint-config-node'
# or
extends: '@absolunet/eslint-config-node/script'
```

For type `module` or ESM

```yaml
extends: "@absolunet/eslint-config-node/module"
```

## Used plugins

- [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import) - import/export syntax rules
- [eslint-plugin-node](https://github.com/mysticatea/eslint-plugin-node) - Additional ESLint's rules for Node.js

## Used configuration

- [node/recommended-script](https://github.com/mysticatea/eslint-plugin-node#-configs) - Recommended rules for Node.js with CommonJS.
- [node/recommended-module](https://github.com/mysticatea/eslint-plugin-node#-configs) - Recommended rules for Node.js with ESM.
- [import/recommended](https://github.com/import-js/eslint-plugin-import) - Recommended rules for Import.

## Related

- [@absolunet/tester](https://github.com/absolunet/node-tester) - Test suite for Node.js projects.

- [Other configs](https://github.com/absolunet/eslint-config)

## Documentation

View [documentation](https://documentation.absolunet.com/eslint-config/node)

## License

[MIT](LICENSE) © [Absolunet](https://absolunet.com)

[npm-badge]: https://img.shields.io/npm/v/@absolunet/eslint-config-node?style=flat-square
[dependencies-badge]: https://img.shields.io/david/absolunet/eslint-config?path=packages/node&style=flat-square
[tests-badge]: https://img.shields.io/github/workflow/status/absolunet/eslint-config/tests/production?label=tests&style=flat-square
[npms-badge]: https://badges.npms.io/%40absolunet%2Feslint-config-node.svg?style=flat-square
[license-badge]: https://img.shields.io/badge/license-MIT-green?style=flat-square
[npm-url]: https://www.npmjs.com/package/@absolunet/eslint-config-node
[dependencies-url]: https://david-dm.org/absolunet/eslint-config?path=packages/node
[tests-url]: https://github.com/absolunet/eslint-config/actions?query=workflow%3Atests+branch%3Aproduction
[npms-url]: https://npms.io/search?q=%40absolunet%2Feslint-config-node
[license-url]: https://opensource.org/licenses/MIT
