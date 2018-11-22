# ESLint config
[![Travis CI](https://travis-ci.com/absolunet/eslint-config.svg?branch=master)](https://travis-ci.com/absolunet/eslint-config/builds)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)

> Opinionated ESLint [shareable configs](https://eslint.org/docs/developer-guide/shareable-configs.html).

## Rulesets

| Package | Version | Description |
|---|---|---|
| **[@absolunet/eslint-config-core](packages/core)** | [![npm](https://img.shields.io/npm/v/@absolunet/eslint-config-core.svg)](https://www.npmjs.com/package/@absolunet/eslint-config-core) | **Core rules** *(included in all other configs)* |
| [@absolunet/eslint-config-node](packages/node) | [![npm](https://img.shields.io/npm/v/@absolunet/eslint-config-node.svg)](https://www.npmjs.com/package/@absolunet/eslint-config-node) | Node.js rules |
| [@absolunet/eslint-config-nwayo](packages/nwayo) | [![npm](https://img.shields.io/npm/v/@absolunet/eslint-config-nwayo.svg)](https://www.npmjs.com/package/@absolunet/eslint-config-nwayo) | [nwayo](https://absolunet.github.io/nwayo/) rules |
| [@absolunet/eslint-config-library](packages/library) | [![npm](https://img.shields.io/npm/v/@absolunet/eslint-config-library.svg)](https://www.npmjs.com/package/@absolunet/eslint-config-library) | Library rules *(exported for Node.js / browser)* |
| [@absolunet/eslint-config-react](packages/react) | [![npm](https://img.shields.io/npm/v/@absolunet/eslint-config-react.svg)](https://www.npmjs.com/package/@absolunet/eslint-config-react) | React rules |


## Install

```
$ npm install @absolunet/eslint-config-[RULESET]
```


## Usage

Add some ESLint config to your `.eslintrc.yaml`:

```yaml
extends: '@absolunet/[RULESET]'
```


## Used plugins

- [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn) - Various awesome rules


## Related

- [@absolunet/eslint-loader](https://github.com/absolunet/node-eslint-loader) - ESLint shareable config YAML loader.


## License
MIT © [Absolunet](https://absolunet.com)
