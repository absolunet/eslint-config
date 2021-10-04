# @absolunet/eslint-config-react

[![npm][npm-badge]][npm-url]
[![npm dependencies][dependencies-badge]][dependencies-url]
[![Tests][tests-badge]][tests-url]
[![npms][npms-badge]][npms-url]
[![License: MIT][license-badge]][license-url]


> ESLint config for React

Opinionated ESLint [shareable config](https://eslint.org/docs/developer-guide/shareable-configs.html) for React

Extends [@absolunet/eslint-config-browser](https://github.com/absolunet/eslint-config) and [eslint-config-airbnb](https://github.com/airbnb/javascript)


## Install

```
$ npm install @absolunet/eslint-config-react
```


## Usage

Add some ESLint config to your `.eslintrc.yaml`:

```yaml
extends: '@absolunet/react'
```


## Used plugins

- [@babel/eslint-parser] - For flow
- [eslint-plugin-import] - import/export syntax rules
- [eslint-plugin-jsx-a11y] - Accessibility rules on JSX elements
- [eslint-plugin-ordered-imports] - Sorting and grouping imports
- [eslint-plugin-react] - React
- [eslint-plugin-react-hooks] - Enforces rules for React Hooks

[@babel/eslint-parser]: https://github.com/babel/babel/tree/main/eslint/babel-eslint-parser
[eslint-plugin-import]: https://github.com/benmosher/eslint-plugin-import
[eslint-plugin-jsx-a11y]: https://github.com/evcohen/eslint-plugin-jsx-a11y
[eslint-plugin-ordered-imports]: https://github.com/KyleMayes/eslint-plugin-ordered-imports
[eslint-plugin-react]: https://github.com/yannickcr/eslint-plugin-react
[eslint-plugin-react-hooks]: https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks


## Related

- [Other configs](https://github.com/absolunet/eslint-config)


## Documentation

View [documentation](https://documentation.absolunet.com/eslint-config/react)


## License
[MIT](LICENSE) © [Absolunet](https://absolunet.com)




[npm-badge]:          https://img.shields.io/npm/v/@absolunet/eslint-config-react?style=flat-square
[dependencies-badge]: https://img.shields.io/david/absolunet/eslint-config?path=packages/react&style=flat-square
[tests-badge]:        https://img.shields.io/github/workflow/status/absolunet/eslint-config/tests/production?label=tests&style=flat-square
[npms-badge]:         https://badges.npms.io/%40absolunet%2Feslint-config-react.svg?style=flat-square
[license-badge]:      https://img.shields.io/badge/license-MIT-green?style=flat-square

[npm-url]:          https://www.npmjs.com/package/@absolunet/eslint-config-react
[dependencies-url]: https://david-dm.org/absolunet/eslint-config?path=packages/react
[tests-url]:        https://github.com/absolunet/eslint-config/actions?query=workflow%3Atests+branch%3Aproduction
[npms-url]:         https://npms.io/search?q=%40absolunet%2Feslint-config-react
[license-url]:      https://opensource.org/licenses/MIT
