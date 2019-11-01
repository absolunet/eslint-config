# ESLint config
[![Travis CI](https://travis-ci.com/absolunet/eslint-config.svg?branch=master)](https://travis-ci.com/absolunet/eslint-config/builds)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)

> Opinionated ESLint [shareable configs](https://eslint.org/docs/developer-guide/shareable-configs.html).

## Rulesets

| Package | Version | Description | Documentation |
|---|---|---|---|
| **[@absolunet/eslint-config-core](packages/core)** | [![npm](https://img.shields.io/npm/v/@absolunet/eslint-config-core.svg)](https://www.npmjs.com/package/@absolunet/eslint-config-core) | **Core rules** | [docs](https://documentation.absolunet.com/eslint-config/core) |
| [@absolunet/eslint-config-node](packages/node) | [![npm](https://img.shields.io/npm/v/@absolunet/eslint-config-node.svg)](https://www.npmjs.com/package/@absolunet/eslint-config-node) | Node.js rules | [docs](https://documentation.absolunet.com/eslint-config/node) |
| [@absolunet/eslint-config-test](packages/test) | [![npm](https://img.shields.io/npm/v/@absolunet/eslint-config-test.svg)](https://www.npmjs.com/package/@absolunet/eslint-config-test) | Testing rules | [docs](https://documentation.absolunet.com/eslint-config/test) |
| [@absolunet/eslint-config-browser](packages/browser) | [![npm](https://img.shields.io/npm/v/@absolunet/eslint-config-browser.svg)](https://www.npmjs.com/package/@absolunet/eslint-config-browser) | Browser rules | [docs](https://documentation.absolunet.com/eslint-config/browser) |
| [@absolunet/eslint-config-nwayo](packages/nwayo) | [![npm](https://img.shields.io/npm/v/@absolunet/eslint-config-nwayo.svg)](https://www.npmjs.com/package/@absolunet/eslint-config-nwayo) | [nwayo](https://documentation.absolunet.com/nwayo/) rules | [docs](https://documentation.absolunet.com/eslint-config/nwayo) |
| [@absolunet/eslint-config-react](packages/react) | [![npm](https://img.shields.io/npm/v/@absolunet/eslint-config-react.svg)](https://www.npmjs.com/package/@absolunet/eslint-config-react) | React rules | [docs](https://documentation.absolunet.com/eslint-config/react) |
| [@absolunet/eslint-config-jsdoc](packages/jsdoc) | [![npm](https://img.shields.io/npm/v/@absolunet/eslint-config-jsdoc.svg)](https://www.npmjs.com/package/@absolunet/eslint-config-jsdoc) | JSDoc rules | [docs](https://documentation.absolunet.com/eslint-config/jsdoc) |
| [@absolunet/eslint-config-package](packages/package) | [![npm](https://img.shields.io/npm/v/@absolunet/eslint-config-package.svg)](https://www.npmjs.com/package/@absolunet/eslint-config-package) | Package rules | [docs](https://documentation.absolunet.com/eslint-config/package) |
| [@absolunet/eslint-config-json](packages/json) | [![npm](https://img.shields.io/npm/v/@absolunet/eslint-config-json.svg)](https://www.npmjs.com/package/@absolunet/eslint-config-json) | JSON rules | [docs](https://documentation.absolunet.com/eslint-config/json) |

### Dependency tree
```
                                 ┌────────────────┐                            ┌────────────────┐          ┌────────────────┐
                                 │      core      │                            │     jsdoc      │          │      json      │
                                 └────────────────┘                            └────────────────┘          └────────────────┘
                                          │                                             │
                        ┌─────────────────┴─────────────────┐                           │
                        │                                   │                           │
                        ▼                                   ▼                           ▼
               ┌────────────────┐                  ┌────────────────┐          ┌────────────────┐
               │    browser     │                  │      node      │          │    package     │
               └────────────────┘                  └────────────────┘          └────────────────┘
                        │                                   │
             ┌──────────┴──────────┐                        │
             │                     │                        │
             ▼                     ▼                        ▼
    ┌────────────────┐    ┌────────────────┐       ┌────────────────┐
    │     nwayo      │    │     react      │       │      test      │
    └────────────────┘    └────────────────┘       └────────────────┘
```


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
