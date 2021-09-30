# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).






## [Unreleased]
## [3.0.0] - 2021-09-30
### Changed
- Official release



## [3.0.0-beta.5] - 2021-09-28
### Changed
- Maintenance updates



## [3.0.0-beta.4] - 2021-09-17
### Changed
- Disable `import/dynamic-import-chunkname` (in `node-package`)
- Maintenance updates

### Fixed
- Make `eslint-config-prettier` a dependency and not a peer dependency



## [3.0.0-beta.3] - 2021-09-16
### Changed
- Remove `@magento/eslint-config` because it is not maintained and is incompatible with recent version of ESLint
- Manager and tester updates
- Maintenance updates

#### Update to Unicorn 36.0.0
- Add `unicorn/no-invalid-remove-event-listener` (in `browser`)
- Add `unicorn/no-useless-fallback-in-spread`



## [3.0.0-beta.2] - 2021-09-09
### Added
- Add `import` plugin and rules to `node-package`

### Changed
- Modify `jsdoc/check-types` to disable `unifyParentAndChildTypeChecks`
- Modify `node/file-extension-in-import` to force extension
- Disable `unicorn/import-index`
- Disable ESM rules in `test` because Jest runs in CommonJS
- Maintenance updates

#### React
- Add `import/order` and `ordered-imports/ordered-imports` to order imports
- Ignore `react/static-property-placement`
- Update `unicorn/prevent-abbreviations` (Ignore `params`)

#### Node.js
- Move `node/file-extension-in-import` from `node` to `node-package` 
- Move `node/no-unpublished-import` from `node` to `node-package` 
- Move `node/prefer-module` from `node` to `node-package` 
- Move `node/prefer-node-protocol` from `node` to `node-package` 
- Disable `node/no-extraneous-require` (in `node-package`)
- Disable `node/no-missing-require` (in `node-package`)

#### Update to Unicorn 35.0.0
- Add `unicorn/no-useless-length-check`
- Add `unicorn/no-useless-spread`
- Add `unicorn/prefer-object-from-entries`

#### Update to Jest (test) to 24.4.0
- Ignore `jest/max-nested-describe`

#### Dependencies updates
- Update to ESLint 7.32.0
- Update to JSDoc (jsdoc) 36.1.0
- Update to JSON (json) 3.1.0
- Update to Import (react) 2.24.2
- Update to React (react) 7.25.1

### Fixed
- Make `params` work in `unicorn/prevent-abbreviations` (react)
- Correct linting test



## [3.0.0-beta.1] - 2021-08-17
### Added
- Add Prettier config as last overwrite for all config packages
- Create `@absolunet/eslint-config-pwastudio` - With PWA Studio rules
- Create `@absolunet/eslint-config-spire` - With Spire rules
- Recover `@absolunet/eslint-loader` in this repository

### Changed
- Remove `core` rules treated by Prettier
- Drop support for Node.js 10
- Maintenance updates

#### Update to ESLint 7.31.0
- Update ECMAScript version to latest
- Modify `no-implicit-coercion` to add `disallowTemplateShorthand`

#### Update to Unicorn 34.0.1
- Add `unicorn/no-array-method-this-argument`
- Add `unicorn/no-static-only-class`
- Add `unicorn/prefer-array-flat`
- Add `unicorn/prefer-object-has-own`
- Add `unicorn/prefer-prototype-methods`
- Add `unicorn/prefer-switch`
- Add `unicorn/require-array-join-separator`
- Add `unicorn/require-number-to-fixed-digits-argument`
- Add `unicorn/no-document-cookie` (in `browser`)
- Add `unicorn/require-post-message-target-origin` (in `browser`)
- Add `unicorn/prefer-module` (in `node`)
- Add `unicorn/prefer-node-protocol` (in `node`)
- Ignore `unicorn/prefer-at`
- Ignore `unicorn/prefer-top-level-await`

#### Update to JSDoc (jsdoc) 35.4.5
- Add `jsdoc/no-multi-asterisks`
- Add `jsdoc/require-asterisk-prefix`
- Ignore `jsdoc/match-name`
- Ignore `jsdoc/multiline-blocks`
- Ignore `jsdoc/no-missing-syntax`
- Ignore `jsdoc/no-restricted-syntax`
- Ignore `jsdoc/tag-lines`

#### React
- Replace `babel-eslint` parser by `@babel/eslint-parser`

#### Dependencies updates
- Update JSON (json) to 3.0.0
- Update Import (react) to 2.23.4
- Update React (react) to 7.24.0
- Update Jest (test) to 24.3.6



## [2.2.0] - 2021-02-15
### Changed
- Modify `no-unused-vars` to add `ignoreRestSiblings`
- Update to ESLint 7.20.0
- Update to Unicorn 28.0.1
- Update to JSDoc (jsdoc) to 32.0.0



## [2.1.0] - 2021-01-28
### Changed
- Support Node.js 10+
- Disable `node/no-unpublished-import` (in `test`)
- Disable `node/no-unpublished-require` (in `test`)

#### Update to Unicorn 27.0.0
- Add `unicorn/no-array-push-push`
- Add `unicorn/no-this-assignment`
- Ignore `unicorn/no-array-for-each`
- Modify `unicorn/numeric-separators-style` to add `onlyIfContainsSeparator`

#### Update to JSDoc (jsdoc) 31.4.0
- Add `jsdoc/require-yields`
- Add `jsdoc/require-yields-check`

### Fixed
- Add missing config files for `node-package`



## [2.0.0] - 2021-01-22
### Added
- Create `@absolunet/eslint-config-node-package` - With Node.js package rules

### Changed
- Moved `no-restricted-properties` from `@absolunet/eslint-config-node` to `@absolunet/eslint-config-core`
- Maintenance updates

#### Update to ESLint 7.18.0
- Update ECMAScript version to 2021
- Add `no-loss-of-precision`
- Add `no-promise-executor-return`
- Add `no-unreachable-loop`
- Add `no-unsafe-optional-chaining`
- Add `no-nonoctal-decimal-escape`
- Modify `no-extra-parens` to add `enforceForFunctionPrototypeMethods`
- Modify `array-callback-return` to add `allowImplicit`
- Renamed `id-blacklist` to `id-denylist`
- Remove `no-buffer-constructor`

#### Update to Unicorn 26.0.1
- Add `unicorn/empty-brace-spaces`
- Add `unicorn/no-lonely-if`
- Add `unicorn/no-new-array`
- Add `unicorn/no-object-as-default-parameter`
- Add `unicorn/no-useless-undefined`
- Add `unicorn/numeric-separators-style`
- Add `unicorn/prefer-array-find`
- Add `unicorn/prefer-array-index-of`
- Add `unicorn/prefer-array-some`
- Add `unicorn/prefer-date-now`
- Add `unicorn/prefer-default-parameters`
- Add `unicorn/prefer-math-trunc`
- Add `unicorn/prefer-number-properties`
- Add `unicorn/prefer-optional-catch-binding`
- Add `unicorn/prefer-regexp-test`
- Ignore `unicorn/consistent-destructuring`
- Ignore `unicorn/import-style`
- Ignore `unicorn/no-array-reduce`
- Ignore `unicorn/no-null`
- Ignore `unicorn/prefer-set-has`
- Ignore `unicorn/prefer-ternary`
- Ignore `unicorn/string-content`
- Renamed `unicorn/regex-shorthand` to `unicorn/better-regex`
- Renamed `unicorn/no-fn-reference-in-iterator` to `unicorn/no-array-callback-reference`
- Renamed `unicorn/no-array-instanceof` to `unicorn/no-instanceof-array`
- Renamed `unicorn/no-reduce` to `unicorn/no-array-reduce`
- Renamed `unicorn/prefer-dataset` to `unicorn/prefer-dom-node-dataset`
- Renamed `unicorn/prefer-flat-map` to `unicorn/prefer-array-flat-map`
- Renamed `unicorn/prefer-replace-all` to `unicorn/prefer-string-replace-all`
- Renamed `unicorn/prefer-starts-ends-with` to `unicorn/prefer-string-starts-ends-with`
- Renamed `unicorn/prefer-text-content` to `unicorn/prefer-dom-node-text-content`
- Renamed `unicorn/prefer-trim-start-end` to `unicorn/prefer-string-trim-start-end`
- Renamed `unicorn/prefer-event-key` to `unicorn/prefer-keyboard-event-key`
- Renamed `unicorn/prefer-node-append` to `unicorn/prefer-dom-node-append`
- Renamed `unicorn/prefer-node-remove` to `unicorn/prefer-dom-node-remove`

#### Addition of Node (node) 11.1.0
- Add `node/no-exports-assign`
- Add `node/no-extraneous-import` (in node-package)
- Add `node/no-extraneous-require` (in node-package)
- Add `node/no-missing-import` (in node-package)
- Add `node/no-missing-require` (in node-package)
- Add `node/no-unpublished-bin`
- Add `node/no-unpublished-import`
- Add `node/no-unpublished-require`
- Add `node/no-unsupported-features/node-builtins`
- Add `node/process-exit-as-throw`
- Add `node/shebang`
- Add `node/no-deprecated-api`
- Add `node/exports-style`
- Add `node/file-extension-in-import`
- Add `node/prefer-global/buffer`
- Add `node/prefer-global/console`
- Add `node/prefer-global/process`
- Add `node/prefer-global/text-decoder`
- Add `node/prefer-global/text-encoder`
- Add `node/prefer-global/url-search-params`
- Add `node/prefer-global/url`
- Add `node/prefer-promises/dns`
- Add `node/prefer-promises/fs`
- Ignore `node/no-callback-literal`
- Ignore `node/no-restricted-import`
- Ignore `node/no-unsupported-features/es-builtins`
- Ignore `node/no-unsupported-features/es-syntax` 
- Renamed `callback-return` to `node/callback-return`
- Renamed `global-require` to `node/global-require`
- Renamed `handle-callback-err` to `node/handle-callback-err`
- Renamed `no-mixed-requires` to `node/no-mixed-requires`
- Renamed `no-new-require` to `node/no-new-require`
- Renamed `no-path-concat` to `node/no-path-concat`
- Renamed `no-process-env` to `node/no-process-env`
- Renamed `no-process-exit` to `node/no-process-exit`
- Renamed `no-restricted-modules` to `node/no-restricted-require`
- Renamed `no-sync` to `node/no-sync`

#### Update to JSDoc (jsdoc) to 31.0.8
- Add `jsdoc/no-bad-blocks`
- Add `jsdoc/require-throws`
- Ignore `jsdoc/check-line-alignment`
- Ignore `jsdoc/no-defaults`

#### Dependencies updates
- Update JSON (json) to 2.1.2
- Update Airbnb (react) to 18.2.1
- Update Import (react) to 2.22.1
- Update jsx-a11y (react) to 6.4.1
- Update React (react) to 7.22.0
- Update Jest (test) to 24.1.3

### Removed
- Remove distribution from git repository



## [1.5.1] - 2020-02-20
### Changed
- Disable `unicorn/no-keyword-prefix`
- Maintenance updates



## [1.5.0] - 2020-02-11
### Changed
- Update Import (react) to 2.20.1
- Update React (react) to 7.18.3
- Update Jest (test) to 23.7.0
- Update manager and tester
- Convert tests to Given-When-Then
- Maintenance updates

#### Update to ESLint 6.8.0
- Add `no-dupe-else-if`
- Add `no-setter-return`
- Add `grouped-accessor-pairs` with `getBeforeSet`
- Add `prefer-exponentiation-operator`
- Replaced `unicorn/prefer-exponentiation-operator` with `prefer-exponentiation-operator`

#### Update to Unicorn 16.1.0
- Add `unicorn/prefer-modern-dom-apis`
- Add `unicorn/prefer-negative-index`
- Add `unicorn/prefer-replace-all`
- Add `unicorn/prefer-trim-start-end`

#### Update JSDoc (jsdoc) to 21.0.0
- Add `jsdoc/check-access`
- Add `jsdoc/check-property-names`
- Add `jsdoc/check-values`
- Add `jsdoc/empty-tags`
- Add `jsdoc/require-property`
- Add `jsdoc/require-property-description`
- Add `jsdoc/require-property-name`
- Add `jsdoc/require-property-type`



## [1.4.4] - 2019-11-01
### Added
- Create `@absolunet/eslint-config-json` - With JSON rules

### Changed
- Update JSDoc (jsdoc) to 17.0.0



## [1.4.3] - 2019-10-31
### Added
- In `@absolunet/eslint-config-nwayo` add `whatInput` as a global variable

### Changed
- Switch `function-paren-newline` to `multiline` for more flexibility
- In `@absolunet/eslint-config-nwayo` disable `unicorn/consistent-function-scoping` because it conflicts with nwayo's architecture
- Update Jest (test) to 23.0.2
- Maintenance updates

#### Update to ESLint 6.6.0
- Enforce `enforceForOrderingRelations` on `no-unsafe-negation`
- Enforce `enforceForIndexOf` on `use-isnan`

#### Update JSDoc (jsdoc) to 16.1.1
- Enable 'jsdoc' mode

### Fixed
- In `@absolunet/eslint-config-react` disable `unicorn/prevent-abbreviations` on filenames like in version 1.4.1



## [1.4.2] - 2019-10-21
### Added
- GitHub community files

### Changed
- Update JSDoc (jsdoc) to 15.12.0
- Update Jest (test) to 22.19.0
- Maintenance updates



## [1.4.1] - 2019-10-11
### Changed
- Update to Unicorn 12.0.2
- Convert all warnings in `@absolunet/eslint-config-core` in errors and moved them in sub configs
- Maintenance updates

### Fixed
- Disable `unicorn/no-nested-ternary` because it conflicts with `no-extra-parens`
- Disable `unicorn/prevent-abbreviations` on filenames



## [1.4.0] - 2019-10-09
### Changed

#### Update to ESLint 6.5.1
- Add `no-import-assign`
- Add `prefer-regex-literals`
- Enforce these rules on classes
  - `use-isnan`
  - `accessor-pairs`
  - `computed-property-spacing`

#### Update to Unicorn 12.0.2
- Add `unicorn/consistent-function-scoping`
- Add `unicorn/no-nested-ternary`
- Add `unicorn/prefer-string-slice`
- Upgrade `unicorn/no-abusive-eslint-disable` from warning to error

#### @absolunet/eslint-config-browser
- Add `unicorn/prefer-dataset`

#### @absolunet/eslint-config-package
- Add `unicorn/expiring-todo-comments`

#### Dependencies updates
- JSDoc (jsdoc) to 15.10.0
- React (react) to 7.16.0
- Jest (test) to 22.17.0




## [1.4.0-beta.3] - 2019-08-29
### Changed

#### Update to ESLint 6.2.2
- Update ECMAScript version to 2020
- Add `function-call-argument-newline`

#### Dependencies updates
- Airbnb (react) to 18.0.1
- Jest (test) to 22.16.0

#### @absolunet/eslint-config-test
- Now validates with ESM

#### Relaxed rules
- Remove `no-restricted-imports`



## [1.4.0-beta.2] - 2019-08-09
### Added
- Create @absolunet/eslint-config-test - With Jest rules



## [1.4.0-beta.1] - 2019-08-05
### Added
- Create `@absolunet/eslint-config-jsdoc`
- Create `@absolunet/eslint-config-package`

### Removed
- Delete `@absolunet/eslint-config-library`

### Changed
- `@absolunet/eslint-config-react` now depends on `eslint-config-airbnb`
- `@absolunet/eslint-config-browser` doesn't include jQuery environment anymore
- `@absolunet/eslint-config-nwayo` includes jQuery environment directly

#### Update to ESLint 6.1.0
- Ajust some rules to keep linting the same

#### Update to Unicorn 10.0.0
- Add `unicorn/no-keyword-prefix`
- Add `unicorn/prefer-event-key`
- Add `unicorn/prefer-flat-map`

#### Relaxation
- Change `object-shorthand` from `consistent` to `always`
- Remove `unicorn/filename-case` because it's an irritant



## [1.3.0] - 2019-03-28
### Added
- Create `@absolunet/eslint-config-browser`
- Add an abstraction to nwayo config

### Changed
#### Update to ESLint 5.15.3
- Add `no-useless-catch`
- Add `prefer-named-capture-group`
- Change `indent` option 'VariableDeclarator' to 'first'
- Change ecmaVersion to '2019'

#### Update to Unicorn 8.0.1
- Add `unicorn/no-console-spaces`
- Add `unicorn/no-for-loop`
- Add `unicorn/no-unreadable-array-destructuring`
- Add `unicorn/no-unused-properties`
- Add `unicorn/no-zero-fractions`
- Add `unicorn/prefer-includes`
- Add `unicorn/prefer-node-append`
- Add `unicorn/prefer-node-remove`
- Add `unicorn/prefer-query-selector`
- Add `unicorn/prefer-text-content`
- Add `unicorn/prevent-abbreviations`

#### Relaxation
- Change `accessor-pairs` to allow getters without setters
- Change `key-spacing` option to enforce space after colon on single-line to be consistent
- Remove `no-tabs` because it's an irritant to commented code
- Remove `unicorn/no-unsafe-regex` because it's an irritant



## [1.2.2] - 2018-11-23
### Changed
- Switch to multi-packages repo
- Update to ESLint 5.9.0
- Remove `require-unicode-regexp` in browser environment (IE11 incompatible)



## [1.2.0] - 2018-10-24
### Changed
- Update to ESLint 5.7.0
- Update to Unicorn 6.0.1



## [1.1.1] - 2018-07-24
### Fixed
- Cleanup + Better tester



## [1.1.0] - 2018-07-23
### Changed
- Update to ESLint 5.2.0
- Add 🦄 Unicorn



## [1.0.0] - 2018-06-14
### Changed
- Add tests



## [0.3.0] - 2018-03-07
### Changed
- Upgrade to ESLint 4.18.2



## [0.2.0] - 2017-08-29
### Changed
- Upgrade to ESLint 4.5.0



## [0.1.1] - 2017-06-14
### Fixed
- Too restrictive



## [0.1.0] - 2017-06-13
### Changed
- Upgrade to ESLint 4.0.0



## [0.0.2] - 2017-03-27
### Fixed
- Correction on globals



## [0.0.1] - 2017-03-27
### Added
- Initial






[Unreleased]:   https://github.com/absolunet/eslint-config/compare/3.0.0...HEAD
[3.0.0]:        https://github.com/absolunet/eslint-config/compare/3.0.0-beta.5...3.0.0
[3.0.0-beta.5]: https://github.com/absolunet/eslint-config/compare/3.0.0-beta.4...3.0.0-beta.5
[3.0.0-beta.4]: https://github.com/absolunet/eslint-config/compare/3.0.0-beta.3...3.0.0-beta.4
[3.0.0-beta.3]: https://github.com/absolunet/eslint-config/compare/3.0.0-beta.2...3.0.0-beta.3
[3.0.0-beta.2]: https://github.com/absolunet/eslint-config/compare/3.0.0-beta.1...3.0.0-beta.2
[3.0.0-beta.1]: https://github.com/absolunet/eslint-config/compare/2.2.0...3.0.0-beta.1
[2.2.0]:        https://github.com/absolunet/eslint-config/compare/2.1.0...2.2.0
[2.1.0]:        https://github.com/absolunet/eslint-config/compare/2.0.0...2.1.0
[2.0.0]:        https://github.com/absolunet/eslint-config/compare/1.5.1...2.0.0
[1.5.1]:        https://github.com/absolunet/eslint-config/compare/1.5.0...1.5.1
[1.5.0]:        https://github.com/absolunet/eslint-config/compare/1.4.4...1.5.0
[1.4.4]:        https://github.com/absolunet/eslint-config/compare/1.4.3...1.4.4
[1.4.3]:        https://github.com/absolunet/eslint-config/compare/1.4.2...1.4.3
[1.4.2]:        https://github.com/absolunet/eslint-config/compare/1.4.1...1.4.2
[1.4.1]:        https://github.com/absolunet/eslint-config/compare/1.4.0...1.4.1
[1.4.0]:        https://github.com/absolunet/eslint-config/compare/1.4.0-beta.3...1.4.0
[1.4.0-beta.3]: https://github.com/absolunet/eslint-config/compare/1.4.0-beta.2...1.4.0-beta.3
[1.4.0-beta.2]: https://github.com/absolunet/eslint-config/compare/1.4.0-beta.1...1.4.0-beta.2
[1.4.0-beta.1]: https://github.com/absolunet/eslint-config/compare/1.3.0...1.4.0-beta.1
[1.3.0]:        https://github.com/absolunet/eslint-config/compare/1.2.2...1.3.0
[1.2.2]:        https://github.com/absolunet/eslint-config/compare/1.2.0...1.2.2
[1.2.0]:        https://github.com/absolunet/eslint-config/compare/1.1.1...1.2.0
[1.1.1]:        https://github.com/absolunet/eslint-config/compare/1.1.0...1.1.1
[1.1.0]:        https://github.com/absolunet/eslint-config/compare/1.0.0...1.1.0
[1.0.0]:        https://github.com/absolunet/eslint-config/compare/0.3.0...1.0.0
[0.3.0]:        https://github.com/absolunet/eslint-config/compare/0.2.0...0.3.0
[0.2.0]:        https://github.com/absolunet/eslint-config/compare/0.1.1...0.2.0
[0.1.1]:        https://github.com/absolunet/eslint-config/compare/0.1.0...0.1.1
[0.1.0]:        https://github.com/absolunet/eslint-config/compare/0.0.2...0.1.0
[0.0.2]:        https://github.com/absolunet/eslint-config/compare/0.0.1...0.0.2
[0.0.1]:        https://github.com/absolunet/eslint-config/releases/tag/0.0.1
