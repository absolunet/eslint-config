# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).






## [Unreleased]



## [1.5.0] - 2020-02-11
### Changed
- Update Import (react) to 2.20.1
- Update React (react) to 7.18.3
- Update Jest (test) to 23.7.0
- Update manager and tester
- Convert tests to Given-When-Then
- Maintenance updates

#### Update to ESLint 6.8.0
- Added `no-dupe-else-if`
- Added `no-setter-return`
- Added `grouped-accessor-pairs` with `getBeforeSet` option
- Added `prefer-exponentiation-operator`
- Replaced `unicorn/prefer-exponentiation-operator` with `prefer-exponentiation-operator`

#### Update to Unicorn 16.1.0
- Added `unicorn/prefer-modern-dom-apis`
- Added `unicorn/prefer-negative-index`
- Added `unicorn/prefer-replace-all`
- Added `unicorn/prefer-trim-start-end`

#### Update JSDoc (jsdoc) to 21.0.0
- Added `jsdoc/check-access`
- Added `jsdoc/check-property-names`
- Added `jsdoc/check-values`
- Added `jsdoc/empty-tags`
- Added `jsdoc/require-property`
- Added `jsdoc/require-property-description`
- Added `jsdoc/require-property-name`
- Added `jsdoc/require-property-type`



## [1.4.4] - 2019-11-01
### Added
- Creation of `@absolunet/eslint-config-json` - With JSON rules

### Changed
- Update JSDoc (jsdoc) to 17.0.0



## [1.4.3] - 2019-10-31
### Added
- In `@absolunet/eslint-config-nwayo` added `whatInput` as a global variable

### Changed
- Switch `function-paren-newline` rule to `multiline` for more flexibility
- In `@absolunet/eslint-config-nwayo` disabled `unicorn/consistent-function-scoping` because it conflicts with nwayo's architecture
- Update Jest (test) to 23.0.2
- Maintenance updates

#### Update to ESLint 6.6.0
- Enforce `enforceForOrderingRelations` on `no-unsafe-negation`
- Enforce `enforceForIndexOf` on `use-isnan`

#### Update JSDoc (jsdoc) to 16.1.1
- Enable 'jsdoc' mode

### Fixed
- In `@absolunet/eslint-config-react` disabled `unicorn/prevent-abbreviations` on filenames like in version 1.4.1



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
- Added `no-import-assign`
- Added `prefer-regex-literals`
- Enforce these rules on classes
  - `use-isnan`
  - `accessor-pairs`
  - `computed-property-spacing`

#### Update to Unicorn 12.0.2
- Added `unicorn/consistent-function-scoping`
- Added `unicorn/no-nested-ternary`
- Added `unicorn/prefer-string-slice`
- Upgraded `unicorn/no-abusive-eslint-disable` rule from warning to error

#### @absolunet/eslint-config-browser
- Added `unicorn/prefer-dataset`

#### @absolunet/eslint-config-package
- Added `unicorn/expiring-todo-comments`

#### Dependencies updates
- JSDoc (jsdoc) to 15.10.0
- React (react) to 7.16.0
- Jest (test) to 22.17.0




## [1.4.0-beta.3] - 2019-08-29
### Changed

#### Update to ESLint 6.2.2
- Update ECMAScript version to 2020
- Added `function-call-argument-newline` rule

#### Dependencies updates
- Airbnb (react) to 18.0.1
- Jest (test) to 22.16.0

#### @absolunet/eslint-config-test
- Now validates with ESM

#### Relaxed rules
- Remove `no-restricted-imports` rule



## [1.4.0-beta.2] - 2019-08-09
### Added
- Creation of @absolunet/eslint-config-test - With Jest rules



## [1.4.0-beta.1] - 2019-08-05
### Added
- Creation of `@absolunet/eslint-config-jsdoc`
- Creation of `@absolunet/eslint-config-package`

### Removed
- Deletion of `@absolunet/eslint-config-library`

### Changed
- `@absolunet/eslint-config-react` now depends on `eslint-config-airbnb`
- `@absolunet/eslint-config-browser` doesn't include jQuery environment anymore
- `@absolunet/eslint-config-nwayo` includes jQuery environment directly

#### Update to ESLint 6.1.0
- Ajusted some rules to keep linting the same

#### Update to Unicorn 10.0.0
- Added `unicorn/no-keyword-prefix`
- Added `unicorn/prefer-event-key`
- Added `unicorn/prefer-flat-map`

#### Relaxation
- Changed `object-shorthand` from `consistent` to `always`
- Removed `unicorn/filename-case` because it's an irritant



## [1.3.0] - 2019-03-28
### Added
- Creation of `@absolunet/eslint-config-browser`
- Add an abstraction to nwayo config

### Changed
#### Update to ESLint 5.15.3
- Added `no-useless-catch`
- Added `prefer-named-capture-group`
- Changed indent option 'VariableDeclarator' to 'first'
- Changed ecmaVersion to '2019'

#### Update to Unicorn 8.0.1
- Added `unicorn/no-console-spaces`
- Added `unicorn/no-for-loop`
- Added `unicorn/no-unreadable-array-destructuring`
- Added `unicorn/no-unused-properties`
- Added `unicorn/no-zero-fractions`
- Added `unicorn/prefer-includes`
- Added `unicorn/prefer-node-append`
- Added `unicorn/prefer-node-remove`
- Added `unicorn/prefer-query-selector`
- Added `unicorn/prefer-text-content`
- Added `unicorn/prevent-abbreviations`

#### Relaxation
- Changed `accessor-pairs` to allow getters without setters
- Changed `key-spacing` option to enforce space after colon on single-line to be consistent
- Removed `no-tabs` because it's an irritant to commented code
- Removed `unicorn/no-unsafe-regex` because it's an irritant



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
- Added 🦄 Unicorn



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






[Unreleased]:   https://github.com/absolunet/eslint-config/compare/1.5.0...HEAD
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
