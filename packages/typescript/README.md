# @absolunet/eslint-config-typescript

[![npm][npm-badge]][npm-url]
[![npm dependencies][dependencies-badge]][dependencies-url]
[![Tests][tests-badge]][tests-url]
[![npms][npms-badge]][npms-url]
[![License: MIT][license-badge]][license-url]

> ESLint config for TypeScript

Opinionated ESLint [shareable config](https://eslint.org/docs/developer-guide/shareable-configs.html) for [TypeScript](https://www.typescriptlang.org/).

Made to be combined with a [@absolunet/eslint-config-core](https://github.com/absolunet/eslint-config) sourced config.

## Install

```
$ npm install @absolunet/eslint-config-typescript
```

## Usage

Add some ESLint config to your `.eslintrc.yaml`:

```yaml
extends: "@absolunet/eslint-config-typescript"

parserOptions:
	project:
	 - "./tsconfig.json"  # Your TS config file
```

## Used parser

- [@typescript-eslint/parser](https://typescript-eslint.io/) - TypeScript parser

## Used plugins

- [@typescript-eslint](https://typescript-eslint.io/) - TypeScript linting rules

## Used configurations

- [@typescript-eslint/recommended](https://typescript-eslint.io/linting/configs) - Recommended rules for TypeScript
- [@typescript-eslint/recommended-requiring-type-checking](https://typescript-eslint.io/linting/configs) - Require type information rules

## Related

- [Other configs](https://github.com/absolunet/eslint-config)

## Documentation

View [documentation](https://documentation.absolunet.com/eslint-config/typescript)

## License

[MIT](LICENSE) © [Absolunet](https://absolunet.com)

[npm-badge]: https://img.shields.io/npm/v/@absolunet/eslint-config-typescript?style=flat-square
[dependencies-badge]: https://img.shields.io/david/absolunet/eslint-config?path=packages/typescript&style=flat-square
[tests-badge]: https://img.shields.io/github/workflow/status/absolunet/eslint-config/tests/production?label=tests&style=flat-square
[npms-badge]: https://badges.npms.io/%40absolunet%2Feslint-config-typescript.svg?style=flat-square
[license-badge]: https://img.shields.io/badge/license-MIT-green?style=flat-square
[npm-url]: https://www.npmjs.com/package/@absolunet/eslint-config-typescript
[dependencies-url]: https://david-dm.org/absolunet/eslint-config?path=packages/typescript
[tests-url]: https://github.com/absolunet/eslint-config/actions?query=workflow%3Atests+branch%3Aproduction
[npms-url]: https://npms.io/search?q=%40absolunet%2Feslint-config-typescript
[license-url]: https://opensource.org/licenses/MIT
