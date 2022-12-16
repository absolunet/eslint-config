# @absolunet/eslint-config-test

[![npm][npm-badge]][npm-url]
[![npm dependencies][dependencies-badge]][dependencies-url]
[![Tests][tests-badge]][tests-url]
[![npms][npms-badge]][npms-url]
[![License: MIT][license-badge]][license-url]

> ESLint config for testing

Opinionated ESLint [shareable config](https://eslint.org/docs/developer-guide/shareable-configs.html) for testing with [Jest](https://jestjs.io).

Extends [@absolunet/eslint-config-node](https://github.com/absolunet/eslint-config)

## Install

```
$ npm install @absolunet/eslint-config-test
```

## Usage

Add some ESLint config to your `.eslintrc.yaml`:

```yaml
extends: "@absolunet/eslint-config-test"
```

## Used plugins

- [eslint-plugin-jest](https://github.com/jest-community/eslint-plugin-jest) - Jest syntax rules

## Related

- [Other configs](https://github.com/absolunet/eslint-config)

## Documentation

View [documentation](https://documentation.absolunet.com/eslint-config/test)

## License

[MIT](LICENSE) © [Absolunet](https://absolunet.com)

[npm-badge]: https://img.shields.io/npm/v/@absolunet/eslint-config-test?style=flat-square
[dependencies-badge]: https://img.shields.io/david/absolunet/eslint-config?path=packages/test&style=flat-square
[tests-badge]: https://img.shields.io/github/workflow/status/absolunet/eslint-config/tests/production?label=tests&style=flat-square
[npms-badge]: https://badges.npms.io/%40absolunet%2Feslint-config-test.svg?style=flat-square
[license-badge]: https://img.shields.io/badge/license-MIT-green?style=flat-square
[npm-url]: https://www.npmjs.com/package/@absolunet/eslint-config-test
[dependencies-url]: https://david-dm.org/absolunet/eslint-config?path=packages/test
[tests-url]: https://github.com/absolunet/eslint-config/actions?query=workflow%3Atests+branch%3Aproduction
[npms-url]: https://npms.io/search?q=%40absolunet%2Feslint-config-test
[license-url]: https://opensource.org/licenses/MIT
