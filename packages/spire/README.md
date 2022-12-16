# @absolunet/eslint-config-spire

[![npm][npm-badge]][npm-url]
[![npm dependencies][dependencies-badge]][dependencies-url]
[![Tests][tests-badge]][tests-url]
[![npms][npms-badge]][npms-url]
[![License: MIT][license-badge]][license-url]

> ESLint config for Spire

Opinionated ESLint [shareable config](https://eslint.org/docs/developer-guide/shareable-configs.html) for [Spire](https://www.episerver.com/products/b2b-commerce-cloud)

Extends [@absolunet/eslint-config-react](https://github.com/absolunet/eslint-config)

## Install

```
$ npm install @absolunet/eslint-config-spire
```

## Usage

Add some ESLint config to your `.eslintrc.yaml`:

```yaml
extends: "@absolunet/eslint-config-spire"
```

## Used parser

- [@typescript-eslint/parser](https://typescript-eslint.io/) - Allow for ESLint to lint TypeScript

## Used plugins

- [@typescript-eslint](https://typescript-eslint.io/) - Lint rules for TypeScript

## Used configurations

- [react/recommended](https://github.com/jsx-eslint/eslint-plugin-react#recommended) - Recommended rules for React.js
- [@typescript-eslint/recommended](https://typescript-eslint.io/linting/configs#recommended) - Recommended rules for TypeScript

## Related

- [Other configs](https://github.com/absolunet/eslint-config)

## Documentation

View [documentation](https://documentation.absolunet.com/eslint-config/spire)

## License

[MIT](LICENSE) © [Absolunet](https://absolunet.com)

[npm-badge]: https://img.shields.io/npm/v/@absolunet/eslint-config-spire?style=flat-square
[dependencies-badge]: https://img.shields.io/david/absolunet/eslint-config?path=packages/spire&style=flat-square
[tests-badge]: https://img.shields.io/github/workflow/status/absolunet/eslint-config/tests/production?label=tests&style=flat-square
[npms-badge]: https://badges.npms.io/%40absolunet%2Feslint-config-spire.svg?style=flat-square
[license-badge]: https://img.shields.io/badge/license-MIT-green?style=flat-square
[npm-url]: https://www.npmjs.com/package/@absolunet/eslint-config-spire
[dependencies-url]: https://david-dm.org/absolunet/eslint-config?path=packages/spire
[tests-url]: https://github.com/absolunet/eslint-config/actions?query=workflow%3Atests+branch%3Aproduction
[npms-url]: https://npms.io/search?q=%40absolunet%2Feslint-config-spire
[license-url]: https://opensource.org/licenses/MIT
