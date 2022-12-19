# @absolunet/eslint-config-jsdoc

[![npm][npm-badge]][npm-url]
[![npm dependencies][dependencies-badge]][dependencies-url]
[![Tests][tests-badge]][tests-url]
[![npms][npms-badge]][npms-url]
[![License: MIT][license-badge]][license-url]

> ESLint config for JSDoc

Opinionated ESLint [shareable config](https://eslint.org/docs/developer-guide/shareable-configs.html) for [JSDoc](https://jsdoc.app).

Made to be combined with a [@absolunet/eslint-config-core](https://github.com/absolunet/eslint-config) sourced config.

## Install

```
$ npm install @absolunet/eslint-config-jsdoc
```

## Usage

Add some ESLint config to your `.eslintrc.yaml`:

```yaml
extends: "@absolunet/eslint-config-jsdoc"
```

## Used plugins

- [eslint-plugin-jsdoc](https://github.com/gajus/eslint-plugin-jsdoc) - JSDoc linting rules

## Used configuration

- [jsdoc/recommended](https://github.com/gajus/eslint-plugin-jsdoc#configuration) - Recommended rules for JSDoc

## Related

- [Other configs](https://github.com/absolunet/eslint-config)

## Documentation

View [documentation](https://documentation.absolunet.com/eslint-config/jsdoc)

## License

[MIT](LICENSE) © [Absolunet](https://absolunet.com)

[npm-badge]: https://img.shields.io/npm/v/@absolunet/eslint-config-jsdoc?style=flat-square
[dependencies-badge]: https://img.shields.io/david/absolunet/eslint-config?path=packages/jsdoc&style=flat-square
[tests-badge]: https://img.shields.io/github/workflow/status/absolunet/eslint-config/tests/production?label=tests&style=flat-square
[npms-badge]: https://badges.npms.io/%40absolunet%2Feslint-config-jsdoc.svg?style=flat-square
[license-badge]: https://img.shields.io/badge/license-MIT-green?style=flat-square
[npm-url]: https://www.npmjs.com/package/@absolunet/eslint-config-jsdoc
[dependencies-url]: https://david-dm.org/absolunet/eslint-config?path=packages/jsdoc
[tests-url]: https://github.com/absolunet/eslint-config/actions?query=workflow%3Atests+branch%3Aproduction
[npms-url]: https://npms.io/search?q=%40absolunet%2Feslint-config-jsdoc
[license-url]: https://opensource.org/licenses/MIT
