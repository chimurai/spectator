# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [21.0.0](https://github.com/ngneat/spectator/compare/v20.0.0...v21.0.0) (2025-07-12)


### ⚠ BREAKING CHANGES

* 🧨 removed TestBed.get support

* chore: 🤖 fix karma tests

* chore: 🤖 bump @angular-builders/jest to v20

* chore: 🤖 fix karma bug

`NODE_ENV=build yarn test` throws an error:

TypeError [ERR_INVALID_STATE]: Invalid state:
Controller is already closed

bug: https://github.com/angular/angular-cli/pull/30653

Update Angular to latest version with Karma fix:

npx ng update @angular/core@latest @angular/cli@latest
@angular/cdk@latest

* chore: 🤖 bump @angular peerDependencies to >= 20.0.0
* 🧨 peerDependencies @angular/*: >= 20.0.0

* chore: 🤖 fix hanging Karma

"ERROR Some of your tests did a full page reload!"

### Features

* 🎸 upgrade to Angular v20 ([#711](https://github.com/ngneat/spectator/issues/711)) ([460f5be](https://github.com/ngneat/spectator/commit/460f5beef8468c70cf30a98e8adc86747122d5de)), closes [/github.com/karma-runner/karma/issues/3887#issuecomment-2717292474](https://github.com/ngneat//github.com/karma-runner/karma/issues/3887/issues/issuecomment-2717292474)

## [20.0.0](https://github.com/ngneat/spectator/compare/v19.6.2...v20.0.0) (2025-06-22)


### ⚠ BREAKING CHANGES

* CompatibleSpy<T> type checks it's methods and
enables types on inherited jasmine.Spy<T> methods. Existing tests
may break at build if mocked returns are the wrong types.

* test: add additional tests for type checks

### Features

* add strong typings to function spies on SpyObject ([#707](https://github.com/ngneat/spectator/issues/707)) ([9010a89](https://github.com/ngneat/spectator/commit/9010a8962dc9621187c03dde44d9fb41f7cc6247))


### Bug Fixes

* fix void spy regressions, and properly type andCallFake ([#710](https://github.com/ngneat/spectator/issues/710)) ([96f7322](https://github.com/ngneat/spectator/commit/96f732295fd89a93c185d7995a0048d208ca08f0))
* regression caused by strong typings change ([#708](https://github.com/ngneat/spectator/issues/708)) ([70c3a23](https://github.com/ngneat/spectator/commit/70c3a235b076a4dfbae2ced870dd6e3dea2f6e4e))

### [19.6.2](https://github.com/ngneat/spectator/compare/v19.6.1...v19.6.2) (2025-06-01)


### Bug Fixes

* setHostInput should work the same across all types ([#704](https://github.com/ngneat/spectator/issues/704)) ([e96e174](https://github.com/ngneat/spectator/commit/e96e174665d88f76613684129126d7f0c6a055d4))

### [19.6.1](https://github.com/ngneat/spectator/compare/v19.6.0...v19.6.1) (2025-05-23)


### Bug Fixes

* remove `waitForAsync` (zoneless support) ([#703](https://github.com/ngneat/spectator/issues/703)) ([e817393](https://github.com/ngneat/spectator/commit/e817393b1ec2689aed9161c7f44046f9a15eb0e5))

## [19.6.0](https://github.com/ngneat/spectator/compare/v19.5.0...v19.6.0) (2025-05-14)


### Features

* Allow Direct Usage of DOMSelector Instances in Custom Matchers ([#701](https://github.com/ngneat/spectator/issues/701)) ([15a7c07](https://github.com/ngneat/spectator/commit/15a7c07adc56d04affea665e2589e862e1becbd2))

## [19.5.0](https://github.com/ngneat/spectator/compare/v19.4.1...v19.5.0) (2025-04-29)


### Features

* add support for componentImports config ([#699](https://github.com/ngneat/spectator/issues/699)) ([bd7ce91](https://github.com/ngneat/spectator/commit/bd7ce91bcc39f0aff0f9701bae4478e7ba6d61b3))


### Bug Fixes

* 🐛 type check on component outputs ([#693](https://github.com/ngneat/spectator/issues/693)) ([08c9a21](https://github.com/ngneat/spectator/commit/08c9a21aab8e44a34d706a9a017a267bb4e675a3)), closes [#689](https://github.com/ngneat/spectator/issues/689)

### [19.4.1](https://github.com/ngneat/spectator/compare/v19.4.0...v19.4.1) (2025-01-28)


### Bug Fixes

* **spectator:** setInput with object parameter for alias names ([#692](https://github.com/ngneat/spectator/issues/692)) ([25afec2](https://github.com/ngneat/spectator/commit/25afec2852a7a6147ccfa19ccb24a160934c82de))

## [19.4.0](https://github.com/ngneat/spectator/compare/v19.3.0...v19.4.0) (2025-01-25)


### Features

* **spectator:** add support for runInInjectionContext() ([#690](https://github.com/ngneat/spectator/issues/690)) ([b501939](https://github.com/ngneat/spectator/commit/b5019395f448d873898f29394ee50eadaa048317))

## [19.3.0](https://github.com/ngneat/spectator/compare/v19.2.0...v19.3.0) (2024-12-28)


### Features

* **schematics:** introduce unitTestRunner option to support Vitest ([#688](https://github.com/ngneat/spectator/issues/688)) ([c924703](https://github.com/ngneat/spectator/commit/c924703c114f586e104fd72114749dbfb035cf52))

## [19.2.0](https://github.com/ngneat/spectator/compare/v19.1.2...v19.2.0) (2024-12-17)


### Features

* support Vitest mocking ([#686](https://github.com/ngneat/spectator/issues/686)) ([691c476](https://github.com/ngneat/spectator/commit/691c476e7108eb556c47cab1f449b2f4687ebb23))

### [19.1.2](https://github.com/ngneat/spectator/compare/v19.1.1...v19.1.2) (2024-11-29)

### [19.1.1](https://github.com/ngneat/spectator/compare/v19.1.0...v19.1.1) (2024-11-28)


### Bug Fixes

* 🤖 upgrade jquery to v3.7.1 ([#678](https://github.com/ngneat/spectator/issues/678)) ([618c2d0](https://github.com/ngneat/spectator/commit/618c2d07ea8481c66b30794a8df9f2d3c94643f0)), closes [#676](https://github.com/ngneat/spectator/issues/676)

## [19.1.0](https://github.com/ngneat/spectator/compare/v19.0.0...v19.1.0) (2024-09-12)


### Features

* allow `OutputEmitterRef` keys in `triggerEventHandler` ([#672](https://github.com/ngneat/spectator/issues/672)) ([06bc093](https://github.com/ngneat/spectator/commit/06bc0931a1c196d3bacaa8f188469d7d291ac20e))
* **spectator:** support for Function-based outputs ([#671](https://github.com/ngneat/spectator/issues/671)) ([02ed01d](https://github.com/ngneat/spectator/commit/02ed01d11e0c9a6cc68c2400102449185d605079))

## [19.0.0](https://github.com/ngneat/spectator/compare/v18.0.2...v19.0.0) (2024-06-19)


### ⚠ BREAKING CHANGES

* 🧨 The library now required a min version of Angular 18.0.0

- npx ng update @angular/core@18 @angular/cli@18 @angular/cdk@18
  @angular-eslint/schematics@18 --force
- yarn upgrade jest-preset-angular@14.1.0
- yarn upgrade @angular-builders/jest@18
- yarn upgrade browserslist (fix BrowserslistError)

* ci: 🎡 bump @angular peer dependencies to v18
* 🧨 angular v18

### Features

* 🎸 upgrade to Angular 18 ([#660](https://github.com/ngneat/spectator/issues/660)) ([74f2e0b](https://github.com/ngneat/spectator/commit/74f2e0bdecfaff6c6e587d1b0a2f180e0b0f96c9))

### [18.0.2](https://github.com/ngneat/spectator/compare/v18.0.1...v18.0.2) (2024-04-30)


### Bug Fixes

* 🏷️ Use generic return type for all jest matchers ([#655](https://github.com/ngneat/spectator/issues/655)) ([f322a65](https://github.com/ngneat/spectator/commit/f322a652f1c82ae96a60da76b3c78c3d555f4713))

### [18.0.1](https://github.com/ngneat/spectator/compare/v18.0.0...v18.0.1) (2024-03-21)


### Bug Fixes

* **spectator:** set input accepts alias names ([#652](https://github.com/ngneat/spectator/issues/652)) ([13c8bf1](https://github.com/ngneat/spectator/commit/13c8bf160dcfef593eed9284abdb0c037ac76bbb))

## [18.0.0](https://github.com/ngneat/spectator/compare/v17.1.0...v18.0.0) (2024-03-21)


### ⚠ BREAKING CHANGES

* using Angular types not available in versions lower
than 17.3.0

### Features

* 🎸 fix input/output type inference ([#651](https://github.com/ngneat/spectator/issues/651)) ([8cacdda](https://github.com/ngneat/spectator/commit/8cacddac18a2939fbf537bb74f0ca1dbcb1fa6e6))


### Bug Fixes

* 🐛 component re-render when updating fields in lifecycle hook ([#646](https://github.com/ngneat/spectator/issues/646)) ([e522c99](https://github.com/ngneat/spectator/commit/e522c995b51b85f3d73349d3d5cfe892f24f3500))

## [17.1.0](https://github.com/ngneat/spectator/compare/v17.0.0...v17.1.0) (2024-03-04)


### Features

* **spectator:** support defer block behavior ([#641](https://github.com/ngneat/spectator/issues/641)) ([030ad64](https://github.com/ngneat/spectator/commit/030ad64980db301963faf21d0b2e2ac831bd65a2))

## [17.0.0](https://github.com/ngneat/spectator/compare/v16.0.0...v17.0.0) (2024-02-17)


### ⚠ BREAKING CHANGES

* **spectator:** remove 'props' and 'setProps' from host/directive
factories

* fix: infer input signals when setting inputs on createComponent

* test: align signal input test between jasmine/jest

* refactor: rename input signal types to be aligned

Fixed type names of InferSignalInputs and InputSignalInput (which was a
typo) to be aligned with Angular's InputSignal type, rather than
SignalInput

* refactor: remove unnecessary generic params from factories

* fix: setprops behaviour for pipe factory

* docs: update documentation to reflect api Changes

Added disclaimers for createHostFactory, createDirectiveFactory, and
createPipeFactory as they don't support props/setProps anymore.

### Features

* **spectator:** Support input signals ([#638](https://github.com/ngneat/spectator/issues/638)) ([3f63c68](https://github.com/ngneat/spectator/commit/3f63c68440f2dc11cb251e49d8ebdc8a9a44a5e9))

## [16.0.0](https://github.com/ngneat/spectator/compare/v15.0.1...v16.0.0) (2023-12-16)


### ⚠ BREAKING CHANGES

* 🧨 The library now requires a minimum version of Angular 17.0.0

### Features

* Updated jQuery package ([#629](https://github.com/ngneat/spectator/issues/629)) ([9478289](https://github.com/ngneat/spectator/commit/9478289fd35894f9e9fda2785c459d2bfdb276e0))


### Bug Fixes

* **matchers:** use computed styles to determine hidden-ness ([#622](https://github.com/ngneat/spectator/issues/622)) ([6c5e7b6](https://github.com/ngneat/spectator/commit/6c5e7b6f939d10e07036a67c86805a32d435a7c5))


* Angular 17 (#633) ([b064ea7](https://github.com/ngneat/spectator/commit/b064ea7990e30887a3fb71082ba8bc2dd78b89a1)), closes [#633](https://github.com/ngneat/spectator/issues/633) [#631](https://github.com/ngneat/spectator/issues/631) [#631](https://github.com/ngneat/spectator/issues/631)

### [15.0.1](https://github.com/ngneat/spectator/compare/v15.0.0...v15.0.1) (2023-06-09)


### Bug Fixes

* 🐛 jest SpyObject mock ([#615](https://github.com/ngneat/spectator/issues/615)) ([27fce63](https://github.com/ngneat/spectator/commit/27fce6341d029211c1a43ec80642d2cc46499f66)), closes [#614](https://github.com/ngneat/spectator/issues/614)

## [15.0.0](https://github.com/ngneat/spectator/compare/v14.0.0...v15.0.0) (2023-05-21)


### ⚠ BREAKING CHANGES

* 🧨 The library now required a min version of Angular 16.0.0

- npx ng update @angular/core@16 @angular/cli@16 @angular/cdk@16
  @angular-eslint/schematics@16 --force
- update jest-preset-angular@13.1.0
- remove postinstall ngcc

* fix: 🐛 removed Angular entryComponents type

fix: 🐛 doesServiceImplementsOnDestroy type
     Type 'S' is not assignable to type 'object'.ts(2322)
     types.ts(33, 48): This type parameter might need an `extends object` constraint.

fix: 🐛 yarn.lock conflicts in @types/node and caniuse-lite
* 🧨 entryComponents is removed
* 🧨 The library now required a min version of Angular
16.0.0

* refactor: 💡 remove outdated eslint rule exceptions

Definition for rule '@typescript-eslint/no-empty-interface' was
not found  @typescript-eslint/no-empty-interface

Definition for rule '@typescript-eslint/no-shadow' was
not found  @typescript-eslint/no-shadow

Definition for rule '@typescript-eslint/consistent-type-assertions' was
not found  @typescript-eslint/consistent-type-assertions

### Features

* 🎸 upgrade to Angular 16 ([#605](https://github.com/ngneat/spectator/issues/605)) ([6620d24](https://github.com/ngneat/spectator/commit/6620d2426625c7ac2c019f402a93b567cae35322)), closes [/github.com/angular/angular/blob/main/CHANGELOG.md#1600-2023-05-03](https://github.com/ngneat//github.com/angular/angular/blob/main/CHANGELOG.md/issues/1600-2023-05-03)

## [14.0.0](https://github.com/ngneat/spectator/compare/v13.0.0...v14.0.0) (2023-01-16)


### ⚠ BREAKING CHANGES

* 🧨 Angular 15.1
* 🧨 The library now required a min version of Angular 15.1.0

(cherry picked from commit 9bf4f928181b65ab2134e6604f3e8d5bf868499b)

Co-authored-by: Christo Zietsman <christo.zietsman@redstor.com>

### Features

* upgrade to Angular 15.1 ([#599](https://github.com/ngneat/spectator/issues/599)) ([7743dc6](https://github.com/ngneat/spectator/commit/7743dc64cc9a866c220048a6d12bd7f1ecd8cf23))

## [13.0.0](https://github.com/ngneat/spectator/compare/v12.2.1...v13.0.0) (2022-12-21)


### ⚠ BREAKING CHANGES

* 🧨 Angular 15
* 🧨 The library now required a min version of Angular 15.0.3

* feat: update karma test runner config for ng 15

- update @angular-builders/jest to 15

- update devkit karma settings to follow ng15 standards

- run 14 to 15 migration for cli

- add test file inclusion to angular.json

- remove webpack code from test.ts

Co-authored-by: Mark Bruning <mark.bruning@ensono.com>

### Features

* 🎸 upgrade to Angular 15 ([#594](https://github.com/ngneat/spectator/issues/594)) ([458a76e](https://github.com/ngneat/spectator/commit/458a76e6ebade4391acfd20330f13c99f4d3ab40))

### [12.2.1](https://github.com/ngneat/spectator/compare/v12.2.0...v12.2.1) (2022-12-06)


### Bug Fixes

* **#592:** create routing factory issue overriding standalone components, directives or pipes ([#593](https://github.com/ngneat/spectator/issues/593)) ([80f9624](https://github.com/ngneat/spectator/commit/80f9624ef738032af3d5f63fdabc6f2d8e99d7d0)), closes [#592](https://github.com/ngneat/spectator/issues/592)

## [12.2.0](https://github.com/ngneat/spectator/compare/v12.1.1...v12.2.0) (2022-11-20)


### Features

* **matchers:** add toHaveExactTrimmedText matcher ([#588](https://github.com/ngneat/spectator/issues/588)) ([bb5b843](https://github.com/ngneat/spectator/commit/bb5b8439ba9e8619630f2bb0f28adc27c03ed302))

### [12.1.1](https://github.com/ngneat/spectator/compare/v12.1.0...v12.1.1) (2022-11-13)

## [12.1.0](https://github.com/ngneat/spectator/compare/v12.0.1...v12.1.0) (2022-11-13)


### Features

* **query:** allow to specify parent selector option ([#590](https://github.com/ngneat/spectator/issues/590)) ([d2fcdf8](https://github.com/ngneat/spectator/commit/d2fcdf821d7a1f4f0c1dd0bb61f935aeb22b8bf2))


### Bug Fixes

* **dom-selectors:** `byRole` typings ([#591](https://github.com/ngneat/spectator/issues/591)) ([e537f64](https://github.com/ngneat/spectator/commit/e537f649f69e6c89526d32c5d028370a82093ef5))

### [12.0.1](https://github.com/ngneat/spectator/compare/v12.0.0...v12.0.1) (2022-10-30)

## [12.0.0](https://github.com/ngneat/spectator/compare/v11.4.1...v12.0.0) (2022-10-30)


### ⚠ BREAKING CHANGES

* 🧨 The library now required a min version of Angular 14.2.0

### Features

* 🎸 change peer dep to 14.2.0 ([ffad43b](https://github.com/ngneat/spectator/commit/ffad43b2f6b01527d3c9e65caa776306edcfa377))

### [11.4.1](https://github.com/ngneat/spectator/compare/v11.4.0...v11.4.1) (2022-10-30)

## [11.4.0](https://github.com/ngneat/spectator/compare/v11.3.0...v11.4.0) (2022-10-30)


### Features

* **components:** allow to override standalone components ([#584](https://github.com/ngneat/spectator/issues/584)) ([464c807](https://github.com/ngneat/spectator/commit/464c807ee12bff8cc61a75a90ec732c2b115d58f))

## [11.3.0](https://github.com/ngneat/spectator/compare/v11.2.1...v11.3.0) (2022-10-19)


### Features

* allow erroring on unknown elements/properties ([#586](https://github.com/ngneat/spectator/issues/586)) ([cc8bb94](https://github.com/ngneat/spectator/commit/cc8bb94909c6aa59124b9a69f70556f4bcb0af4d))

### [11.2.1](https://github.com/ngneat/spectator/compare/v11.2.0...v11.2.1) (2022-09-30)


### Bug Fixes

* **matchers:** prevent crash on elements in a Shadow DOM ([#585](https://github.com/ngneat/spectator/issues/585)) ([9d2996b](https://github.com/ngneat/spectator/commit/9d2996bea10bcf81eefd94abfcbc4609f57e2831))

## [11.2.0](https://github.com/ngneat/spectator/compare/v11.1.3...v11.2.0) (2022-09-23)


### Features

* **dom-spectator:** add query with root opt for Type selector ([#580](https://github.com/ngneat/spectator/issues/580)) ([b5a0f35](https://github.com/ngneat/spectator/commit/b5a0f359d8bc8ddaf757cdc8d2948d53ab3b978c))
* **matchers:** add toBeIndeterminate matcher ([#577](https://github.com/ngneat/spectator/issues/577)) ([b158a27](https://github.com/ngneat/spectator/commit/b158a278e8d0bdfd4b4f8e9c743f35fbf0a3b44e))

### [11.1.3](https://github.com/ngneat/spectator/compare/v11.1.1...v11.1.3) (2022-07-26)


### Bug Fixes

* 🐛 revert jquery patch ([d66a8bc](https://github.com/ngneat/spectator/commit/d66a8bcafb850f9d62e054692964bac8b20a9807)), closes [#572](https://github.com/ngneat/spectator/issues/572)
* unpatch `setTimeout` before importing jQuery so it is not captured by zone.js ([#573](https://github.com/ngneat/spectator/issues/573)) ([6cd5a1b](https://github.com/ngneat/spectator/commit/6cd5a1bef735c7bc6cbbb6db465556430547b014))

### [11.1.2](https://github.com/ngneat/spectator/compare/v11.1.1...v11.1.2) (2022-07-25)


### Bug Fixes

* 🐛 revert jquery patch ([d66a8bc](https://github.com/ngneat/spectator/commit/d66a8bcafb850f9d62e054692964bac8b20a9807)), closes [#572](https://github.com/ngneat/spectator/issues/572)

### [11.1.1](https://github.com/ngneat/spectator/compare/v11.1.0...v11.1.1) (2022-07-24)


### Bug Fixes

* unpatch `setTimeout` before importing jQuery so it is not captured by zone.js ([#571](https://github.com/ngneat/spectator/issues/571)) ([76572b1](https://github.com/ngneat/spectator/commit/76572b1320cc14890167308564e77ef2fcb9a68b))

## [11.1.0](https://github.com/ngneat/spectator/compare/v11.0.2...v11.1.0) (2022-06-26)


### Features

* 🎸 support jest esm ([#565](https://github.com/ngneat/spectator/issues/565)) ([46d5261](https://github.com/ngneat/spectator/commit/46d526144021f11dea485038a9b988411af0963c))

### [11.0.2](https://github.com/ngneat/spectator/compare/v11.0.0...v11.0.2) (2022-06-23)


### Bug Fixes

* 🐛 release schematics ([8405fc1](https://github.com/ngneat/spectator/commit/8405fc110ba950d3f36f06e2e0334e0c01e7f1b3)), closes [#563](https://github.com/ngneat/spectator/issues/563)
* remove migration bin ([9a9be75](https://github.com/ngneat/spectator/commit/9a9be753d952f14438936e5bdbb19112958bb953)), closes [#557](https://github.com/ngneat/spectator/issues/557)

### [11.0.1](https://github.com/ngneat/spectator/compare/v11.0.0...v11.0.1) (2022-06-17)


### Bug Fixes

* remove migration bin ([9a9be75](https://github.com/ngneat/spectator/commit/9a9be753d952f14438936e5bdbb19112958bb953)), closes [#557](https://github.com/ngneat/spectator/issues/557)

## [11.0.0](https://github.com/ngneat/spectator/compare/v10.0.1...v11.0.0) (2022-06-07)


### ⚠ BREAKING CHANGES

* Angular 14

Peer dependency is Angualr 14

### Features

* 🎸 upgrade to Angular 14 ([#553](https://github.com/ngneat/spectator/issues/553)) ([d6fcea4](https://github.com/ngneat/spectator/commit/d6fcea4a98981db7c5ba183cda46dbf13cb276a7))

### [10.0.1](https://github.com/ngneat/spectator/compare/v10.0.0...v10.0.1) (2022-03-24)


### Bug Fixes

* 🐛 setInput should run host dc ([c40a2a6](https://github.com/ngneat/spectator/commit/c40a2a6ef7dbd780da09a017d01b0158354d141b)), closes [#539](https://github.com/ngneat/spectator/issues/539)
* **matchers:** test css variables via getPropertyValue ([#530](https://github.com/ngneat/spectator/issues/530)) ([94ebfe3](https://github.com/ngneat/spectator/commit/94ebfe37699496b154b40bb9b507b0f925a8ef24))

## [10.0.0](https://github.com/ngneat/spectator/compare/v9.0.0...v10.0.0) (2021-12-23)


### ⚠ BREAKING CHANGES

* **startup error:** This change will result in a compile error for any `MatcherFunction` that uses `HTMLElement` properties or functions.

`MatcherFunction` in `@testing-library/dom` now receives a parameter of type `Element`,
where it previously was `HTMLElement` - so users will have to test/cast to `HTMLElement`
if they need `HTMLElement` properties or methods in their matcher function.

### Bug Fixes

* **startup error:** update @testing-library/dom to update pretty-format ([#522](https://github.com/ngneat/spectator/issues/522)) ([647ef89](https://github.com/ngneat/spectator/commit/647ef89c1d30930d0c74f4c3a899183ee4dbe834))

## [9.0.0](https://github.com/ngneat/spectator/compare/v8.3.1...v9.0.0) (2021-11-20)


### ⚠ BREAKING CHANGES

* 🧨 The library now requires Angular v13

### Features

* 🎸 upgrade to angular v13 ([1644abb](https://github.com/ngneat/spectator/commit/1644abb8592226863393172e41712b159afd1145))


### Bug Fixes

* add code to KeyboardEvent ([#512](https://github.com/ngneat/spectator/issues/512)) ([8b6f2b0](https://github.com/ngneat/spectator/commit/8b6f2b02a5d54b04d5f56c3eff264df09b0af6a4))

### [8.3.2](https://github.com/ngneat/spectator/compare/v8.3.1...v8.3.2) (2021-11-16)


### Bug Fixes

* add code to KeyboardEvent ([#512](https://github.com/ngneat/spectator/issues/512)) ([8b6f2b0](https://github.com/ngneat/spectator/commit/8b6f2b02a5d54b04d5f56c3eff264df09b0af6a4))

### [8.3.1](https://github.com/ngneat/spectator/compare/v8.3.0...v8.3.1) (2021-10-27)


### Bug Fixes

* allow passing any values to the `Route#data` ([#504](https://github.com/ngneat/spectator/issues/504)) ([0eb9bbc](https://github.com/ngneat/spectator/commit/0eb9bbcadf1f45616909a78e9ef052466900781a))

## [8.3.0](https://github.com/ngneat/spectator/compare/v8.2.0...v8.3.0) (2021-10-26)


### Features

* allow overriding global `teardown` options ([#502](https://github.com/ngneat/spectator/issues/502)) ([e25b5eb](https://github.com/ngneat/spectator/commit/e25b5eb2e9b9fdba5fd6163661d3089aabf0363c))


### Bug Fixes

* **matchers:** toHaveStyle matcher throws TypeError error ([#503](https://github.com/ngneat/spectator/issues/503)) ([a80211a](https://github.com/ngneat/spectator/commit/a80211a9ee2eb2eaceed2cdab7e517e354d2a38d))

## [8.2.0](https://github.com/ngneat/spectator/compare/v8.1.0...v8.2.0) (2021-10-25)


### Features

* allow providing `ModuleTeardownOptions` ([#499](https://github.com/ngneat/spectator/issues/499)) ([81edca6](https://github.com/ngneat/spectator/commit/81edca66b62b25d056a64ee26da57422df55bfb5))


### Bug Fixes

* CustomMatcherResult message property should be function ([#500](https://github.com/ngneat/spectator/issues/500)) ([44ae8c2](https://github.com/ngneat/spectator/commit/44ae8c2804aae29ed5b133f369a03c845d2798d2))

## [8.1.0](https://github.com/ngneat/spectator/compare/v8.0.4...v8.1.0) (2021-09-29)


### Features

* **Router:** Import RouterTestingModule when stubs are enabled ([#488](https://github.com/ngneat/spectator/issues/488)) ([5308c26](https://github.com/ngneat/spectator/commit/5308c26654a46d36594f3c7127727cf7fbe60364))

### [8.0.4](https://github.com/ngneat/spectator/compare/v8.0.3...v8.0.4) (2021-08-28)


### Bug Fixes

* 🐛 add router and animations as peer deps ([a4dce33](https://github.com/ngneat/spectator/commit/a4dce332ea8203103c5d62b4a47cc7ea47cb5908)), closes [#478](https://github.com/ngneat/spectator/issues/478)

### [8.0.3](https://github.com/ngneat/spectator/compare/v8.0.2...v8.0.3) (2021-08-10)

### [8.0.2](https://github.com/ngneat/spectator/compare/v8.0.1...v8.0.2) (2021-08-04)

### [8.0.1](https://github.com/ngneat/spectator/compare/v8.0.0...v8.0.1) (2021-07-16)


### Bug Fixes

* 🐛 use an accurate type in matchers ([83755e4](https://github.com/ngneat/spectator/commit/83755e47ac3f38f804998a29aa2474f2179c162c)), closes [#382](https://github.com/ngneat/spectator/issues/382)

## [8.0.0](https://github.com/ngneat/spectator/compare/v7.2.0...v8.0.0) (2021-07-16)


### ⚠ BREAKING CHANGES

* 🧨 upgrade to v12

### Features

* 🎸 migrate to angular v12 ([#457](https://github.com/ngneat/spectator/issues/457)) ([6443d09](https://github.com/ngneat/spectator/commit/6443d09c14314b566213c35d8ecc88d4350113a3))
* 🎸 upgrade to angular v12 ([5b19bc6](https://github.com/ngneat/spectator/commit/5b19bc695aad9a9e7cfd1c41ec7c55681ebf383c))

## [7.2.0](https://github.com/ngneat/spectator/compare/v7.1.0...v7.2.0) (2021-06-10)

## [7.1.0](https://github.com/ngneat/spectator/compare/v7.0.1...v7.1.0) (2021-03-07)


### Features

* **schematics:** use actual component name in test file ([#409](https://github.com/ngneat/spectator/issues/409)) ([eb1698f](https://github.com/ngneat/spectator/commit/eb1698fe3b244731d0a576ba5260b7830d6739b6))
* add VSCode snippets for jest ([#407](https://github.com/ngneat/spectator/issues/407)) ([eab68bb](https://github.com/ngneat/spectator/commit/eab68bb8f4f27e8704730824d504d2b720b9ff4f))

### [7.0.1](https://github.com/ngneat/spectator/compare/v7.0.0...v7.0.1) (2021-03-05)


### Bug Fixes

* 🐛 update peer deps ([89c4bcd](https://github.com/ngneat/spectator/commit/89c4bcdda64f6c33d88de4da06f26bd812ebfd3c))

## [7.0.0](https://github.com/ngneat/spectator/compare/v6.1.3...v7.0.0) (2021-01-28)


### ⚠ BREAKING CHANGES

* 🧨 Schematics support for ng11

### Features

* 🎸 support ng v11 ([7af8376](https://github.com/ngneat/spectator/commit/7af83761a7bd1f5355fc469966ae600f782e319f))

### [6.1.4](https://github.com/ngneat/spectator/compare/v6.1.3...v6.1.4) (2021-01-28)

<a name="6.1.3"></a>
## [6.1.3](https://github.com/ngneat/spectator/compare/v6.1.2...v6.1.3) (2021-01-13)


### Bug Fixes

* **selectors:** forgot to expose byrole selector ([#376](https://github.com/ngneat/spectator/issues/376)) ([9887bdb](https://github.com/ngneat/spectator/commit/9887bdb))



<a name="6.1.2"></a>
## [6.1.2](https://github.com/ngneat/spectator/compare/v6.1.1...v6.1.2) (2020-12-02)


### Bug Fixes

* **schematics:** respect the skipTests option ([#370](https://github.com/ngneat/spectator/issues/370)) ([c9ff534](https://github.com/ngneat/spectator/commit/c9ff534))



<a name="6.1.1"></a>
## [6.1.1](https://github.com/ngneat/spectator/compare/v6.1.0...v6.1.1) (2020-11-13)



<a name="6.1.0"></a>
# [6.1.0](https://github.com/ngneat/spectator/compare/v6.0.0...v6.1.0) (2020-11-05)


### Features

* support run ngOnChanges hook for change bingins ([#348](https://github.com/ngneat/spectator/issues/348)) ([#360](https://github.com/ngneat/spectator/issues/360)) ([2a6cd5e](https://github.com/ngneat/spectator/commit/2a6cd5e))



<a name="6.0.0"></a>
# [6.0.0](https://github.com/ngneat/spectator/compare/v5.14.0...v6.0.0) (2020-10-09)


### Features

* 🎸 version 6 ([4fede6e](https://github.com/ngneat/spectator/commit/4fede6e))


### BREAKING CHANGES

* see the breaking changes file



<a name="5.14.0"></a>
# [5.14.0](https://github.com/ngneat/spectator/compare/v5.13.4...v5.14.0) (2020-10-09)


### Features

* 🎸 expose event creators ([#355](https://github.com/ngneat/spectator/issues/355)) ([1d46020](https://github.com/ngneat/spectator/commit/1d46020))



<a name="5.13.4"></a>
## [5.13.4](https://github.com/ngneat/spectator/compare/v5.13.3...v5.13.4) (2020-10-01)


### Bug Fixes

* **component-host:** setting for wrong variable ([#352](https://github.com/ngneat/spectator/issues/352)) ([975c1d2](https://github.com/ngneat/spectator/commit/975c1d2))



<a name="5.13.3"></a>
## [5.13.3](https://github.com/ngneat/spectator/compare/v5.13.2...v5.13.3) (2020-09-04)


### Bug Fixes

* change accessor to property in ActivatedRouteStub ([#346](https://github.com/ngneat/spectator/issues/346)) ([4bdd0ce](https://github.com/ngneat/spectator/commit/4bdd0ce))



<a name="5.13.2"></a>
## [5.13.2](https://github.com/ngneat/spectator/compare/v5.13.1...v5.13.2) (2020-09-02)



<a name="5.13.1"></a>
## [5.13.1](https://github.com/ngneat/spectator/compare/v5.13.0...v5.13.1) (2020-08-31)


### Bug Fixes

* **routing:** fix 'Navigation triggered outside Angular Zone' warning ([#334](https://github.com/ngneat/spectator/issues/334)) ([d186172](https://github.com/ngneat/spectator/commit/d186172))



<a name="5.13.0"></a>
# [5.13.0](https://github.com/ngneat/spectator/compare/v5.11.0...v5.13.0) (2020-08-01)


### Features

* **routing:** add support for ActivatedRoute url property ([#326](https://github.com/ngneat/spectator/issues/326)) ([d74e534](https://github.com/ngneat/spectator/commit/d74e534))
* **routing:** add support for router tree state mocking ([#331](https://github.com/ngneat/spectator/issues/331)) ([dfd8317](https://github.com/ngneat/spectator/commit/dfd8317)), closes [#328](https://github.com/ngneat/spectator/issues/328)



<a name="5.12.0"></a>
# [5.12.0](https://github.com/ngneat/spectator/compare/v5.11.0...v5.12.0) (2020-07-12)


### Features

* **routing:** add support for ActivatedRoute url property ([#326](https://github.com/ngneat/spectator/issues/326)) ([d74e534](https://github.com/ngneat/spectator/commit/d74e534))



<a name="5.11.0"></a>
# [5.11.0](https://github.com/ngneat/spectator/compare/v5.10.0...v5.11.0) (2020-06-24)


### Features

* support jest-circus ([#321](https://github.com/ngneat/spectator/issues/321)) ([fc9e6ec](https://github.com/ngneat/spectator/commit/fc9e6ec))



<a name="5.10.0"></a>
# [5.10.0](https://github.com/ngneat/spectator/compare/v5.9.1...v5.10.0) (2020-06-23)


### Features

* downlevel .d.ts for older TS versions ([#320](https://github.com/ngneat/spectator/issues/320)) ([acb0eca](https://github.com/ngneat/spectator/commit/acb0eca))



<a name="5.9.1"></a>
## [5.9.1](https://github.com/ngneat/spectator/compare/v5.9.0...v5.9.1) (2020-06-21)


### Bug Fixes

* make createSpyObject public ([#316](https://github.com/ngneat/spectator/issues/316)) ([#317](https://github.com/ngneat/spectator/issues/317)) ([bb128df](https://github.com/ngneat/spectator/commit/bb128df))



<a name="5.9.0"></a>
# [5.9.0](https://github.com/ngneat/spectator/compare/v5.8.0...v5.9.0) (2020-05-27)


### Features

* 🎸 support for overriding modules ([#302](https://github.com/ngneat/spectator/issues/302)) ([#313](https://github.com/ngneat/spectator/issues/313)) ([81deb6e](https://github.com/ngneat/spectator/commit/81deb6e))



<a name="5.8.0"></a>
# [5.8.0](https://github.com/ngneat/spectator/compare/v5.7.1...v5.8.0) (2020-05-24)


### Features

* support passing template in factory ([#299](https://github.com/ngneat/spectator/issues/299)) ([#311](https://github.com/ngneat/spectator/issues/311)) ([5135fab](https://github.com/ngneat/spectator/commit/5135fab))



<a name="5.7.1"></a>
## [5.7.1](https://github.com/ngneat/spectator/compare/v5.7.0...v5.7.1) (2020-05-14)


### Bug Fixes

* **spectator:** update jquery to 3.5.0 ([#307](https://github.com/ngneat/spectator/issues/307)) ([c356a88](https://github.com/ngneat/spectator/commit/c356a88))



<a name="5.7.0"></a>
# [5.7.0](https://github.com/ngneat/spectator/compare/v5.6.0...v5.7.0) (2020-05-14)


### Bug Fixes

* update jquery to 3.5.0 to mitigate xss attack ([#300](https://github.com/ngneat/spectator/issues/300)) ([26517a4](https://github.com/ngneat/spectator/commit/26517a4))
* **schematics:** get rid of schematics-utilities ([#297](https://github.com/ngneat/spectator/issues/297)) ([f702629](https://github.com/ngneat/spectator/commit/f702629))


### Features

* declareDirective support ([#304](https://github.com/ngneat/spectator/issues/304)) ([2032619](https://github.com/ngneat/spectator/commit/2032619))



<a name="5.6.1"></a>
## [5.6.1](https://github.com/ngneat/spectator/compare/v5.6.0...v5.6.1) (2020-04-21)



<a name="5.6.0"></a>
# [5.6.0](https://github.com/ngneat/spectator/compare/v5.5.0...v5.6.0) (2020-04-21)


### Features

* add key & keyCode parameter for keyboard events ([#296](https://github.com/ngneat/spectator/issues/296)) ([fcdb6a8](https://github.com/ngneat/spectator/commit/fcdb6a8))



<a name="5.5.0"></a>
# [5.5.0](https://github.com/ngneat/spectator/compare/v5.4.0...v5.5.0) (2020-04-18)


### Features

* **dom-selectors:** add `byTextContent` query ([#295](https://github.com/ngneat/spectator/issues/295)) ([159644f](https://github.com/ngneat/spectator/commit/159644f))



<a name="5.4.0"></a>
# [5.4.0](https://github.com/ngneat/spectator/compare/v5.3.1...v5.4.0) (2020-04-17)


### Features

* **dom-selectors:** add `selector` option to `byText` query ([#294](https://github.com/ngneat/spectator/issues/294)) ([a00139a](https://github.com/ngneat/spectator/commit/a00139a))



<a name="5.3.1"></a>
## [5.3.1](https://github.com/ngneat/spectator/compare/v5.3.0...v5.3.1) (2020-03-05)


### Bug Fixes

* **rgb-to-hex:** fix trim function to handle falsy value([#270](https://github.com/ngneat/spectator/issues/270)) ([#287](https://github.com/ngneat/spectator/issues/287)) ([9269832](https://github.com/ngneat/spectator/commit/9269832))



<a name="5.3.0"></a>
# [5.3.0](https://github.com/ngneat/spectator/compare/v5.2.1...v5.3.0) (2020-03-05)


### Features

* **lib:** use TestBed.get if .inject falsy - back compatibility… ([#284](https://github.com/ngneat/spectator/issues/284)) ([e39a75a](https://github.com/ngneat/spectator/commit/e39a75a)), closes [#283](https://github.com/ngneat/spectator/issues/283) [#283](https://github.com/ngneat/spectator/issues/283) [#283](https://github.com/ngneat/spectator/issues/283) [#283](https://github.com/ngneat/spectator/issues/283)



<a name="5.2.1"></a>
## [5.2.1](https://github.com/ngneat/spectator/compare/v5.2.0...v5.2.1) (2020-03-02)



<a name="5.2.0"></a>
# [5.2.0](https://github.com/ngneat/spectator/compare/v5.1.0...v5.2.0) (2020-03-01)


### Features

* **pipe:** add support for testing pipes ([#275](https://github.com/ngneat/spectator/issues/275)) ([f4a42a7](https://github.com/ngneat/spectator/commit/f4a42a7)), closes [#203](https://github.com/ngneat/spectator/issues/203)



<a name="5.1.0"></a>
# [5.1.0](https://github.com/ngneat/spectator/compare/v5.0.0...v5.1.0) (2020-02-26)


### Bug Fixes

* **matchers:** 🐛 add toHaveSelectedOptions matcher for jest ([#271](https://github.com/ngneat/spectator/issues/271)) ([a260377](https://github.com/ngneat/spectator/commit/a260377))
* schematics service for jest ([#276](https://github.com/ngneat/spectator/issues/276)) ([0f970c3](https://github.com/ngneat/spectator/commit/0f970c3))
* **mathers:** fix passing toHaveStyle if styles applied in attr… ([#274](https://github.com/ngneat/spectator/issues/274)) ([f1ec6e7](https://github.com/ngneat/spectator/commit/f1ec6e7))


### Features

* **dom-spectator:** add elem query with root opt for DOMSelecto… ([#277](https://github.com/ngneat/spectator/issues/277)) ([7409082](https://github.com/ngneat/spectator/commit/7409082))



<a name="5.0.0"></a>
# [5.0.0](https://github.com/ngneat/spectator/compare/v4.11.1...v5.0.0) (2020-02-18)


### Bug Fixes

* **schematics:** handle the path provided with the name ([#257](https://github.com/ngneat/spectator/issues/257)) ([c0d482a](https://github.com/ngneat/spectator/commit/c0d482a)), closes [#256](https://github.com/ngneat/spectator/issues/256)


### Features

* 🎸 upgrade to ng v9 ([5ec7a90](https://github.com/ngneat/spectator/commit/5ec7a90))
* support for overriding mocking component view providers ([#266](https://github.com/ngneat/spectator/issues/266)) ([23b78da](https://github.com/ngneat/spectator/commit/23b78da))
* upgrading to angular v9 ([#267](https://github.com/ngneat/spectator/issues/267)) ([e13c955](https://github.com/ngneat/spectator/commit/e13c955))


### BREAKING CHANGES

* Angular 9 is a peer deps now
* This PR sets the angular peer dependencies to v9

* feat: adding inject method to spectator

- This method taps into the type safe TestBed.inject function.
- Marked Spectator.get() as deprecated.

* refactor: updating function signature of inject

* refactor: updating Token<T> type and using with inject

* refactor: updating injectionType with actual declaration



<a name="4.11.2"></a>
## [4.11.2](https://github.com/ngneat/spectator/compare/v4.11.0...v4.11.2) (2020-01-09)


### Bug Fixes

* **schematics:** test should pass ([6e97635](https://github.com/ngneat/spectator/commit/6e97635))



<a name="4.11.1"></a>
## [4.11.1](https://github.com/ngneat/spectator/compare/v4.11.0...v4.11.1) (2020-01-08)



<a name="4.11.0"></a>
# [4.11.0](https://github.com/ngneat/spectator/compare/v4.10.0...v4.11.0) (2020-01-08)


### Bug Fixes

* 🐛 schematics support flat option ([#252](https://github.com/ngneat/spectator/issues/252)) ([535bc1c](https://github.com/ngneat/spectator/commit/535bc1c))


### Features

* 🎸 Add triggerEventHandler method ([#249](https://github.com/ngneat/spectator/issues/249)) ([#253](https://github.com/ngneat/spectator/issues/253)) ([319fa9b](https://github.com/ngneat/spectator/commit/319fa9b))



<a name="4.10.1"></a>
## [4.10.1](https://github.com/ngneat/spectator/compare/v4.10.0...v4.10.1) (2020-01-03)


### Bug Fixes

* 🐛 schematics support flat option ([#252](https://github.com/ngneat/spectator/issues/252)) ([535bc1c](https://github.com/ngneat/spectator/commit/535bc1c))



<a name="4.10.0"></a>
# [4.10.0](https://github.com/ngneat/spectator/compare/v4.9.0...v4.10.0) (2019-12-12)


### Bug Fixes

* let key parser handle single dot ([#246](https://github.com/ngneat/spectator/issues/246)) ([9538233](https://github.com/ngneat/spectator/commit/9538233))


### Features

* **schematics:** add --jest flag ([#228](https://github.com/ngneat/spectator/issues/228)) ([46a7e28](https://github.com/ngneat/spectator/commit/46a7e28))



<a name="4.9.0"></a>
# [4.9.0](https://github.com/ngneat/spectator/compare/v4.8.1...v4.9.0) (2019-12-05)


### Features

* added modifier key support to keyboard api ([#241](https://github.com/ngneat/spectator/issues/241)) ([#243](https://github.com/ngneat/spectator/issues/243)) ([34769bd](https://github.com/ngneat/spectator/commit/34769bd))



<a name="4.8.1"></a>
## [4.8.1](https://github.com/ngneat/spectator/compare/v4.8.0...v4.8.1) (2019-12-04)


### Bug Fixes

* 🐛 revert service schematics ([8d7c59d](https://github.com/ngneat/spectator/commit/8d7c59d)), closes [#242](https://github.com/ngneat/spectator/issues/242)



<a name="4.8.0"></a>
# [4.8.0](https://github.com/ngneat/spectator/compare/v4.7.0...v4.8.0) (2019-12-03)


### Features

* **spectator:** added directiveProviders to spectator-directive… ([#240](https://github.com/ngneat/spectator/issues/240)) ([fd7ce10](https://github.com/ngneat/spectator/commit/fd7ce10))



<a name="4.7.0"></a>
# [4.7.0](https://github.com/ngneat/spectator/compare/v4.6.0...v4.7.0) (2019-11-29)


### Bug Fixes

* **spectator:** fix for incorrect type definition on queryHostAll ([#230](https://github.com/ngneat/spectator/issues/230)) ([#237](https://github.com/ngneat/spectator/issues/237)) ([e936af7](https://github.com/ngneat/spectator/commit/e936af7))


### Features

* **matchers:** add more custom matchers to the API [#217](https://github.com/ngneat/spectator/issues/217) ([#235](https://github.com/ngneat/spectator/issues/235)) ([64fc816](https://github.com/ngneat/spectator/commit/64fc816))
* **spectator:** added expectConcurrent to spectator-http ([#231](https://github.com/ngneat/spectator/issues/231)) ([#238](https://github.com/ngneat/spectator/issues/238)) ([9468a0a](https://github.com/ngneat/spectator/commit/9468a0a))



<a name="4.6.0"></a>
# [4.6.0](https://github.com/ngneat/spectator/compare/v4.5.2...v4.6.0) (2019-11-19)


### Features

* selectOption accepts HTMLOptionElements ([#229](https://github.com/ngneat/spectator/issues/229)) ([f41966e](https://github.com/ngneat/spectator/commit/f41966e))



<a name="4.5.2"></a>
## [4.5.2](https://github.com/ngneat/spectator/compare/v4.5.0...v4.5.2) (2019-11-07)


### Bug Fixes

* 🐛 add jasmine to deps ([7b87583](https://github.com/ngneat/spectator/commit/7b87583))
* 🐛 revert jasmine types package ([b67341c](https://github.com/ngneat/spectator/commit/b67341c))



<a name="4.5.1"></a>
## [4.5.1](https://github.com/ngneat/spectator/compare/v4.5.0...v4.5.1) (2019-11-06)


### Bug Fixes

* 🐛 add jasmine to deps ([7b87583](https://github.com/ngneat/spectator/commit/7b87583))



<a name="4.5.0"></a>
# [4.5.0](https://github.com/ngneat/spectator/compare/v4.4.2...v4.5.0) (2019-10-21)


### Features

* **spectator:** add selectOption api and helper [#202](https://github.com/ngneat/spectator/issues/202) ([#212](https://github.com/ngneat/spectator/issues/212)) ([b58e4c9](https://github.com/ngneat/spectator/commit/b58e4c9))



<a name="4.4.2"></a>
## [4.4.2](https://github.com/ngneat/spectator/compare/v4.4.1...v4.4.2) (2019-10-16)


### Bug Fixes

* **jest/lib:** template mutation with createSpyObject ([#209](https://github.com/ngneat/spectator/issues/209)) ([e23af88](https://github.com/ngneat/spectator/commit/e23af88))
* **schematics:** respect component path provided with the name ([#199](https://github.com/ngneat/spectator/issues/199)) ([ed2fc48](https://github.com/ngneat/spectator/commit/ed2fc48)), closes [#195](https://github.com/ngneat/spectator/issues/195)



<a name="4.4.1"></a>
## [4.4.1](https://github.com/ngneat/spectator/compare/v4.4.0...v4.4.1) (2019-10-10)


### Bug Fixes

* fix for incorrect type inference on TS 3.3 and TS 3.5+ ([#205](https://github.com/ngneat/spectator/issues/205)) ([61370dd](https://github.com/ngneat/spectator/commit/61370dd))



<a name="4.4.0"></a>
# [4.4.0](https://github.com/ngneat/spectator/compare/v4.3.4...v4.4.0) (2019-10-06)


### Features

* 🎸 add tick helper ([059be16](https://github.com/ngneat/spectator/commit/059be16))



<a name="4.3.4"></a>
## [4.3.4](https://github.com/ngneat/spectator/compare/v4.3.3...v4.3.4) (2019-10-02)


### Bug Fixes

* support for textareas in typeInElement ([802270e](https://github.com/ngneat/spectator/commit/802270e))



<a name="4.3.3"></a>
## [4.3.3](https://github.com/ngneat/spectator/compare/v4.3.2...v4.3.3) (2019-10-02)



<a name="4.3.2"></a>
## [4.3.2](https://github.com/ngneat/spectator/compare/v4.3.1...v4.3.2) (2019-09-24)


### Bug Fixes

* **mock:** fix typings error on TS 3.5 ([26fc6ba](https://github.com/ngneat/spectator/commit/26fc6ba))



<a name="4.3.1"></a>
## [4.3.1](https://github.com/ngneat/spectator/compare/v4.3.0...v4.3.1) (2019-09-24)


### Bug Fixes

* **mock:** make SpyObject properties writable by default ([3d0931f](https://github.com/ngneat/spectator/commit/3d0931f))



<a name="4.3.0"></a>
# [4.3.0](https://github.com/ngneat/spectator/compare/v4.2.3...v4.3.0) (2019-09-20)


### Features

* **routing:** add option to disable stubs and use RouterTestingModule ([#188](https://github.com/ngneat/spectator/issues/188)) ([2fb7390](https://github.com/ngneat/spectator/commit/2fb7390))



<a name="4.2.3"></a>
## [4.2.3](https://github.com/ngneat/spectator/compare/v4.2.2...v4.2.3) (2019-09-17)


### Bug Fixes

* **spectator:** fix incorrect method typing ([#187](https://github.com/ngneat/spectator/issues/187)) ([a405438](https://github.com/ngneat/spectator/commit/a405438))



<a name="4.2.2"></a>
## [4.2.2](https://github.com/ngneat/spectator/compare/v4.2.1...v4.2.2) (2019-09-10)


### Bug Fixes

* 🐛 refactor entry components for ivy ([06d2c11](https://github.com/ngneat/spectator/commit/06d2c11))



<a name="4.2.1"></a>
## [4.2.1](https://github.com/ngneat/spectator/compare/v4.2.0...v4.2.1) (2019-09-09)


### Bug Fixes

* **spectator:** fix incorrect element typing ([#185](https://github.com/ngneat/spectator/issues/185)) ([9c1dae4](https://github.com/ngneat/spectator/commit/9c1dae4))



<a name="4.2.0"></a>
# [4.2.0](https://github.com/ngneat/spectator/compare/v4.0.2...v4.2.0) (2019-09-05)


### Bug Fixes

* support structural directive in host/directive ([#178](https://github.com/ngneat/spectator/issues/178)) ([216f1c8](https://github.com/ngneat/spectator/commit/216f1c8))


### Features

* 🎸 mouse ([0303844](https://github.com/ngneat/spectator/commit/0303844))
* **overrides:** improve type inference for host props overrides ([#178](https://github.com/ngneat/spectator/issues/178)) ([216f1c8](https://github.com/ngneat/spectator/commit/216f1c8))



<a name="4.1.0"></a>
# [4.1.0](https://github.com/ngneat/spectator/compare/v4.0.2...v4.1.0) (2019-09-04)


### Features

* 🎸 mouse ([0303844](https://github.com/ngneat/spectator/commit/0303844))



<a name="4.0.2"></a>
## [4.0.2](https://github.com/ngneat/spectator/compare/v4.0.1...v4.0.2) (2019-09-03)


### Bug Fixes

* **http:** rename data service option to service ([#172](https://github.com/ngneat/spectator/issues/172)) ([7fdc41c](https://github.com/ngneat/spectator/commit/7fdc41c))



<a name="4.0.1"></a>
## [4.0.1](https://github.com/ngneat/spectator/compare/v4.0.0...v4.0.1) (2019-09-01)


### Bug Fixes

* **mocks:** readd deprecated mocks ([a358f13](https://github.com/ngneat/spectator/commit/a358f13))
* **vscode-snippets:** change snippet language ([#169](https://github.com/ngneat/spectator/issues/169)) ([08cac5f](https://github.com/ngneat/spectator/commit/08cac5f))



<a name="4.0.0"></a>
# [4.0.0](https://github.com/ngneat/spectator/compare/v3.12.0...v4.0.0) (2019-08-26)


### Bug Fixes

* expose event helpers ([994bd7e](https://github.com/ngneat/spectator/commit/994bd7e))
* **directive:** fix missing directive instance ([6e58ce1](https://github.com/ngneat/spectator/commit/6e58ce1))
* fix query regression and unit testing improvements ([75f5512](https://github.com/ngneat/spectator/commit/75f5512))
* fix typing for queryAll ([954f31b](https://github.com/ngneat/spectator/commit/954f31b))
* **host:** make host fixture visible again ([9d98f25](https://github.com/ngneat/spectator/commit/9d98f25))
* **http:** backwards support for destructuring SpectatorHttp ([d9bd304](https://github.com/ngneat/spectator/commit/d9bd304))
* **lib:** export global injections ([897d1c8](https://github.com/ngneat/spectator/commit/897d1c8))
* **lib:** remove ng add schematic in favour of npm/yarn install ([372f848](https://github.com/ngneat/spectator/commit/372f848))
* **mock:** allow assigning read-only properties ([1542c24](https://github.com/ngneat/spectator/commit/1542c24))
* **schematics:** update schematics for v4 API changes ([4175b30](https://github.com/ngneat/spectator/commit/4175b30))
* **spectator:** fix for querying directives ([cdd3fd7](https://github.com/ngneat/spectator/commit/cdd3fd7))
* **tests:** support entry components ([51b5481](https://github.com/ngneat/spectator/commit/51b5481))


### Code Refactoring

* change NPM scope from [@netbasal](https://github.com/netbasal) to [@ngneat](https://github.com/ngneat) ([#160](https://github.com/ngneat/spectator/issues/160)) ([9c19f98](https://github.com/ngneat/spectator/commit/9c19f98))
* **http:** rename dataService to service ([abda34d](https://github.com/ngneat/spectator/commit/abda34d))


### Features

* **lib:** v4 changes ([50a599f](https://github.com/ngneat/spectator/commit/50a599f))
* **lib:** v4 changes ([aaeb7f9](https://github.com/ngneat/spectator/commit/aaeb7f9))
* add factory for SpectatorForDirective ([#157](https://github.com/ngneat/spectator/issues/157)) ([4d075da](https://github.com/ngneat/spectator/commit/4d075da))
* **service:** call OnDestroy lifecycle on service after each test ([899d79f](https://github.com/ngneat/spectator/commit/899d79f))
* add migration CLI script ([238cff5](https://github.com/ngneat/spectator/commit/238cff5))
* add routing support ([#151](https://github.com/ngneat/spectator/issues/151)) ([aacfb25](https://github.com/ngneat/spectator/commit/aacfb25))
* add support for overrides ([f45824c](https://github.com/ngneat/spectator/commit/f45824c))
* deprecate createService in favour of createServiceFactory ([3a70424](https://github.com/ngneat/spectator/commit/3a70424))
* support for Angular 8 and Jasmine 3 ([#152](https://github.com/ngneat/spectator/issues/152)) ([f84e73e](https://github.com/ngneat/spectator/commit/f84e73e))
* support for mocking component providers ([6c9fa9e](https://github.com/ngneat/spectator/commit/6c9fa9e))


### BREAKING CHANGES

For the full list of breaking changes in 4.0.0, please see [MIGRATION.md](https://github.com/ngneat/spectator/blob/master/MIGRATION.md).



<a name="3.12.0"></a>
# [3.12.0](https://github.com/ngneat/spectator/compare/v3.11.1...v3.12.0) (2019-08-15)


### Bug Fixes

* **mock:** fix regression caused by mocked properties ([#154](https://github.com/ngneat/spectator/issues/154)) ([0bfc287](https://github.com/ngneat/spectator/commit/0bfc287))


### Features

* **spectator:** use spectator element as default selector ([#155](https://github.com/ngneat/spectator/issues/155)) ([6b05f76](https://github.com/ngneat/spectator/commit/6b05f76))



<a name="3.11.1"></a>
## [3.11.1](https://github.com/ngneat/spectator/compare/v3.11.0...v3.11.1) (2019-08-08)


### Bug Fixes

* fix query regression and unit testing improvements ([#148](https://github.com/ngneat/spectator/issues/148)) ([3503bee](https://github.com/ngneat/spectator/commit/3503bee)), closes [#146](https://github.com/ngneat/spectator/issues/146)



<a name="3.11.0"></a>
# [3.11.0](https://github.com/ngneat/spectator/compare/v3.10.0...v3.11.0) (2019-08-06)


### Features

* **spectator:** additional query capabilities ([#143](https://github.com/ngneat/spectator/issues/143)) ([1dccdb2](https://github.com/ngneat/spectator/commit/1dccdb2)), closes [#142](https://github.com/ngneat/spectator/issues/142)



<a name="3.10.0"></a>
# [3.10.0](https://github.com/ngneat/spectator/compare/v3.9.2...v3.10.0) (2019-08-04)


### Bug Fixes

* **matchers:** element is hidden if it is falsy ([#127](https://github.com/ngneat/spectator/issues/127)) ([05ba520](https://github.com/ngneat/spectator/commit/05ba520))
* **matchers:** pass input to `isHidden` through jQuery (fixes [#122](https://github.com/ngneat/spectator/issues/122)) ([38b64f0](https://github.com/ngneat/spectator/commit/38b64f0))
* enforce usage of jest type definitions ([453928c](https://github.com/ngneat/spectator/commit/453928c))
* **spectator:** improve type inference even more ([877013b](https://github.com/ngneat/spectator/commit/877013b))
* **spectator:** improve type inference for Spectator ([1c3f23a](https://github.com/ngneat/spectator/commit/1c3f23a))
* remove circular dependency ([d499778](https://github.com/ngneat/spectator/commit/d499778))
* update jest due test execution error ([3fc7326](https://github.com/ngneat/spectator/commit/3fc7326))


### Features

* **mock:** writable properties for SpyObjects ([977059a](https://github.com/ngneat/spectator/commit/977059a))



<a name="3.9.2"></a>
## [3.9.2](https://github.com/ngneat/spectator/compare/v3.9.1...v3.9.2) (2019-06-21)


### Bug Fixes

* **http:** add missing methods ([b608473](https://github.com/ngneat/spectator/commit/b608473))
* **matchers:** visibility matchers work with Jest ([fd7c947](https://github.com/ngneat/spectator/commit/fd7c947))



<a name="3.9.1"></a>
## [3.9.1](https://github.com/ngneat/spectator/compare/v3.9.0...v3.9.1) (2019-05-22)


### Bug Fixes

* **global-injections:** allow override injections ([e1eaa5d](https://github.com/ngneat/spectator/commit/e1eaa5d))


### Features

* **lib:** add define global injections function ([5456230](https://github.com/ngneat/spectator/commit/5456230))



<a name="3.9.0"></a>
# [3.9.0](https://github.com/ngneat/spectator/compare/v3.8.2...v3.9.0) (2019-05-15)


### Bug Fixes

* **lib:** update jquery ([6097376](https://github.com/ngneat/spectator/commit/6097376))



<a name="3.8.2"></a>
## [3.8.2](https://github.com/ngneat/spectator/compare/v3.8.1...v3.8.2) (2019-05-15)


### Bug Fixes

* jQuery version bump ([9595b78](https://github.com/ngneat/spectator/commit/9595b78))



<a name="3.8.0"></a>
# [3.8.0](https://github.com/ngneat/spectator/compare/v3.7.1...v3.8.0) (2019-05-13)


### Bug Fixes

* **event-objects:** add missing code ([9edad7d](https://github.com/ngneat/spectator/commit/9edad7d))


### Features

* **service:** allow passing entrycomponents ([361188f](https://github.com/ngneat/spectator/commit/361188f))



<a name="3.7.1"></a>
## [3.7.1](https://github.com/ngneat/spectator/compare/v3.7.0...v3.7.1) (2019-05-07)


### Bug Fixes

* **mouse-events:** should bubble and add button option ([cbeea0d](https://github.com/ngneat/spectator/commit/cbeea0d)), closes [#105](https://github.com/ngneat/spectator/issues/105)
* **type-in-element:** should bubble by default ([496a91f](https://github.com/ngneat/spectator/commit/496a91f)), closes [#104](https://github.com/ngneat/spectator/issues/104)



<a name="3.6.1"></a>
## [3.6.1](https://github.com/ngneat/spectator/compare/3.6.0...3.6.1) (2019-03-31)


### Bug Fixes

* **config:** map schemas option to initial module config ([897c850](https://github.com/ngneat/spectator/commit/897c850))
* **jest:** fix for incorrect typing of SpyObject for Jest ([1cc0a36](https://github.com/ngneat/spectator/commit/1cc0a36))
* **lib:** avoid mockProvider to modify its inputs ([32bac7d](https://github.com/ngneat/spectator/commit/32bac7d))
* **lib:** create failing test for mockProvider leaking ([eed379a](https://github.com/ngneat/spectator/commit/eed379a))


### Features

* **jest:** imporove spy types ([f23de82](https://github.com/ngneat/spectator/commit/f23de82))
* **lib:** add failing test for method mocking ([36fec41](https://github.com/ngneat/spectator/commit/36fec41))
* **lib:** create test which fails when query doesn't find an element ([d3b3833](https://github.com/ngneat/spectator/commit/d3b3833))
* **lib:** handle not found elemenet by.directive ([2d32510](https://github.com/ngneat/spectator/commit/2d32510))
* **lib:** mockProvider allows mocking methods using 2nd argument ([fd2547c](https://github.com/ngneat/spectator/commit/fd2547c))
* **spectator:** mark toHaveAttribute second parameter as optional ([fc07596](https://github.com/ngneat/spectator/commit/fc07596))



<a name="3.5.0"></a>
# [3.5.0](https://github.com/ngneat/spectator/compare/3.1.0...3.5.0) (2019-03-10)


### Bug Fixes

* **jest:** expose dom selectors ([9c32bbc](https://github.com/ngneat/spectator/commit/9c32bbc)), closes [#62](https://github.com/ngneat/spectator/issues/62)
* **jest:** fix type collisions between jasmine/jest ([e7b6a44](https://github.com/ngneat/spectator/commit/e7b6a44))
* **lib:** revert pr ([8c00cde](https://github.com/ngneat/spectator/commit/8c00cde))


### Features

* **config:** add declareComponent option ([ccbf8ea](https://github.com/ngneat/spectator/commit/ccbf8ea))
* **internal:** use host debug element when debug element is missing ([882950b](https://github.com/ngneat/spectator/commit/882950b))
* **internal:** use host debug element when debug element is missing ([820c380](https://github.com/ngneat/spectator/commit/820c380))
* **lib:** add ng-add support ([064d452](https://github.com/ngneat/spectator/commit/064d452))
* **schematics:** create ng add schematics ([6d74f4f](https://github.com/ngneat/spectator/commit/6d74f4f)), closes [#53](https://github.com/ngneat/spectator/issues/53)
* avoid spec has no expectations when using expectOne ([8b74d46](https://github.com/ngneat/spectator/commit/8b74d46))



<a name="3.1.0"></a>
# [3.1.0](https://github.com/ngneat/spectator/compare/3.0.0...3.1.0) (2018-12-17)


### Bug Fixes

* **host:** componentProviders should act on the component ([ef84b16](https://github.com/ngneat/spectator/commit/ef84b16))
* **host:** componentProviders should not be overwritten always ([793e6e0](https://github.com/ngneat/spectator/commit/793e6e0))
* **jest:** add missing export ([a1a210b](https://github.com/ngneat/spectator/commit/a1a210b))
* **jest:** fix build ([7f058b3](https://github.com/ngneat/spectator/commit/7f058b3))
* **jest:** fixes after review comments ([2b7d2a5](https://github.com/ngneat/spectator/commit/2b7d2a5))
* **service:** loosen SpectatorService.get interface typing ([6ab678b](https://github.com/ngneat/spectator/commit/6ab678b))
* **service:** loosen type restrictions on SpectatorService.get ([b1adb37](https://github.com/ngneat/spectator/commit/b1adb37))
* **service:** merge options imports into module imports when creating a service TestBed ([70c9c1f](https://github.com/ngneat/spectator/commit/70c9c1f))
* **types:** add types to matchers definitions ([9de13d1](https://github.com/ngneat/spectator/commit/9de13d1))


### Features

* **lib:** disable change detection on a test level ([1df9d7f](https://github.com/ngneat/spectator/commit/1df9d7f))
* **mock:** allow to pass template with properties for mocks ([c2a3548](https://github.com/ngneat/spectator/commit/c2a3548))
* **mock:** create failing tests for mocks with properties ([f2a3fee](https://github.com/ngneat/spectator/commit/f2a3fee))
* **mock:** support for Jest mocking ([45f0677](https://github.com/ngneat/spectator/commit/45f0677))



<a name="1.13.1"></a>
## [1.13.1](https://github.com/ngneat/spectator/compare/2.0.2...v1.13.1) (2018-07-13)



<a name="1.13.0"></a>
# [1.13.0](https://github.com/ngneat/spectator/compare/v1.12.1...v1.13.0) (2018-07-06)


### Features

* **mock-component:** add identifier option for easier query ([cd32554](https://github.com/ngneat/spectator/commit/cd32554)), closes [#34](https://github.com/ngneat/spectator/issues/34)



<a name="1.12.1"></a>
## [1.12.1](https://github.com/ngneat/spectator/compare/v1.12.0...v1.12.1) (2018-07-05)


### Bug Fixes

* **query:** correct return type for queryAll ([a5c86d5](https://github.com/ngneat/spectator/commit/a5c86d5))



<a name="1.12.0"></a>
# [1.12.0](https://github.com/ngneat/spectator/compare/v1.11.1...v1.12.0) (2018-06-27)


### Features

* **query:** add dom-testing-library query tools ([82a42e2](https://github.com/ngneat/spectator/commit/82a42e2))



<a name="1.11.1"></a>
## [1.11.1](https://github.com/ngneat/spectator/compare/v1.8.1...v1.11.1) (2018-06-26)


### Bug Fixes

* **host:** don't override component inputs ([814e0b0](https://github.com/ngneat/spectator/commit/814e0b0))



<a name="1.8.1"></a>
## [1.8.1](https://github.com/ngneat/spectator/compare/v1.11.0...v1.8.1) (2018-06-26)


### Bug Fixes

* **dev:** add missing jQuery dependency ([11e4234](https://github.com/ngneat/spectator/commit/11e4234))
* **dev:** remove node_modules ([e42443d](https://github.com/ngneat/spectator/commit/e42443d))
* **host:** don't override input changes ([054a3c2](https://github.com/ngneat/spectator/commit/054a3c2)), closes [#31](https://github.com/ngneat/spectator/issues/31)


### Features

* **mock-component:** content projection for default MockComponent ([7c3ba52](https://github.com/ngneat/spectator/commit/7c3ba52))



<a name="1.11.0"></a>
# [1.11.0](https://github.com/ngneat/spectator/compare/v1.10.0...v1.11.0) (2018-06-20)


### Features

* **directive:** add MockDirective helper function ([842f0a7](https://github.com/ngneat/spectator/commit/842f0a7))



<a name="1.10.0"></a>
# [1.10.0](https://github.com/ngneat/spectator/compare/v1.9.1...v1.10.0) (2018-06-16)


### Features

* **changelog:** update ([30ed3da](https://github.com/ngneat/spectator/commit/30ed3da))
* **matchers:** add `toHaveProperty` and `toHaveAttribute` matchers ([303ae6d](https://github.com/ngneat/spectator/commit/303ae6d)), closes [#21](https://github.com/ngneat/spectator/issues/21)



<a name="1.9.1"></a>
## [1.9.1](https://github.com/ngneat/spectator/compare/v1.9.0...v1.9.1) (2018-06-01)


### Bug Fixes

* **query:** query now can accept a generic to define the return value ([acd3b4a](https://github.com/ngneat/spectator/commit/acd3b4a))



<a name="1.9.0"></a>
# [1.9.0](https://github.com/ngneat/spectator/compare/v1.8.0...v1.9.0) (2018-05-28)


### Features

* **directive:** add getDirectiveInstance to host ([9b2ffc6](https://github.com/ngneat/spectator/commit/9b2ffc6))



<a name="1.8.0"></a>
# [1.8.0](https://github.com/ngneat/spectator/compare/v1.7.3...v1.8.0) (2018-05-27)


### Features

* **providers:** add component providers option ([832c770](https://github.com/ngneat/spectator/commit/832c770))



<a name="1.7.3"></a>
## [1.7.3](https://github.com/ngneat/spectator/compare/v1.7.2...v1.7.3) (2018-05-24)


### Bug Fixes

* **types:** add spyobject type to get method ([87b5c5b](https://github.com/ngneat/spectator/commit/87b5c5b))



<a name="1.7.2"></a>
## [1.7.2](https://github.com/ngneat/spectator/compare/v1.7.1...v1.7.2) (2018-05-22)


### Bug Fixes

* **readme:** update ([0390bc0](https://github.com/ngneat/spectator/commit/0390bc0))



<a name="1.7.1"></a>
## [1.7.1](https://github.com/ngneat/spectator/compare/v1.7.0...v1.7.1) (2018-05-22)


### Bug Fixes

* **host:** add change detection component on init ([d22e53d](https://github.com/ngneat/spectator/commit/d22e53d))



<a name="1.7.0"></a>
# [1.7.0](https://github.com/ngneat/spectator/compare/1.6.1...v1.7.0) (2018-05-22)


### Features

* **mocks:** add mock component function ([ce20d26](https://github.com/ngneat/spectator/commit/ce20d26))



<a name="1.6.1"></a>
## [1.6.1](https://github.com/ngneat/spectator/compare/v1.5.5...1.6.1) (2018-05-21)


### Features

* **spectator:** entry component and query selector ([8397295](https://github.com/ngneat/spectator/commit/8397295))



<a name="1.5.5"></a>
## [1.5.5](https://github.com/ngneat/spectator/compare/v1.5.4...v1.5.5) (2018-05-21)


### Bug Fixes

* **internal:** revert to angular selector ([81f5308](https://github.com/ngneat/spectator/commit/81f5308))


### Features

* **upgrade:** upgrade to latest versions of angular and rxjs ([8fff888](https://github.com/ngneat/spectator/commit/8fff888))


### BREAKING CHANGES

* **upgrade:** the library depends on latest version of angular and rxjs



<a name="1.5.4"></a>
## [1.5.4](https://github.com/ngneat/spectator/compare/v1.5.3...v1.5.4) (2018-05-18)


### Bug Fixes

* **query:** prefer native js over angular api ([e0fe656](https://github.com/ngneat/spectator/commit/e0fe656))



<a name="1.5.3"></a>
## [1.5.3](https://github.com/ngneat/spectator/compare/v1.5.2...v1.5.3) (2018-05-15)


### Bug Fixes

* **host:** remove default object value ([cadb8c3](https://github.com/ngneat/spectator/commit/cadb8c3))



<a name="1.5.2"></a>
## [1.5.2](https://github.com/ngneat/spectator/compare/v1.6.0...v1.5.2) (2018-05-14)


### Bug Fixes

* **detectchanges:** run detect changes on the component instead host ([77c77a1](https://github.com/ngneat/spectator/commit/77c77a1))



<a name="1.6.0"></a>
# [1.6.0](https://github.com/ngneat/spectator/compare/v1.5.0...v1.6.0) (2018-05-14)


### Bug Fixes

* **setinput:** run component detect changes instead host ([0bb73d4](https://github.com/ngneat/spectator/commit/0bb73d4))



<a name="1.5.0"></a>
# [1.5.0](https://github.com/ngneat/spectator/compare/v1.4.4...v1.5.0) (2018-05-13)


### Features

* **host:** add setHostInput method ([749dfb8](https://github.com/ngneat/spectator/commit/749dfb8))



<a name="1.4.4"></a>
## [1.4.4](https://github.com/ngneat/spectator/compare/v1.4.3...v1.4.4) (2018-04-30)


### Bug Fixes

* **changelog:** update ([798824a](https://github.com/ngneat/spectator/commit/798824a))
* **host:** add support for structural directives ([341afe2](https://github.com/ngneat/spectator/commit/341afe2))



<a name="1.4.3"></a>
## [1.4.3](https://github.com/ngneat/spectator/compare/v1.4.2...v1.4.3) (2018-04-23)


### Bug Fixes

* **build:** downgrade to es5 ([0eee88c](https://github.com/ngneat/spectator/commit/0eee88c))



<a name="1.4.2"></a>
## [1.4.2](https://github.com/ngneat/spectator/compare/v1.4.1...v1.4.2) (2018-04-22)


### Bug Fixes

* **docs:** update changelog ([8f75440](https://github.com/ngneat/spectator/commit/8f75440))
* **mock:** change arrow function ([9d6e28d](https://github.com/ngneat/spectator/commit/9d6e28d))



<a name="1.4.1"></a>
## [1.4.1](https://github.com/ngneat/spectator/compare/v1.4.0...v1.4.1) (2018-04-17)


### Bug Fixes

* **http:** remove const enum ([cf90619](https://github.com/ngneat/spectator/commit/cf90619))



<a name="1.4.0"></a>
# [1.4.0](https://github.com/ngneat/spectator/compare/v1.3.4...v1.4.0) (2018-04-17)


### Features

* **http:** expose get method for getting the service ([400c082](https://github.com/ngneat/spectator/commit/400c082))



<a name="1.3.4"></a>
## [1.3.4](https://github.com/ngneat/spectator/compare/v1.3.3...v1.3.4) (2018-04-14)


### Bug Fixes

* **events:** add document and window types ([25130cd](https://github.com/ngneat/spectator/commit/25130cd))



<a name="1.3.3"></a>
## [1.3.3](https://github.com/ngneat/spectator/compare/v1.3.2...v1.3.3) (2018-04-13)


### Bug Fixes

* **build:** revert files ([f281ac2](https://github.com/ngneat/spectator/commit/f281ac2))



<a name="1.3.2"></a>
## [1.3.2](https://github.com/ngneat/spectator/compare/v1.3.1...v1.3.2) (2018-04-13)



<a name="1.3.1"></a>
## [1.3.1](https://github.com/ngneat/spectator/compare/v1.3.0...v1.3.1) (2018-04-13)


### Bug Fixes

* **build:** dont publish src ([4d14b48](https://github.com/ngneat/spectator/commit/4d14b48))



<a name="1.3.0"></a>
# [1.3.0](https://github.com/ngneat/spectator/compare/v1.2.3...v1.3.0) (2018-04-13)


### Features

* **query:** add free style jquery support ([25ddf9d](https://github.com/ngneat/spectator/commit/25ddf9d))
* **query:** add query last alias ([7887d6c](https://github.com/ngneat/spectator/commit/7887d6c))



<a name="1.2.3"></a>
## [1.2.3](https://github.com/ngneat/spectator/compare/v1.2.2...v1.2.3) (2018-04-13)


### Bug Fixes

* **query:** support elementref ([3ab3647](https://github.com/ngneat/spectator/commit/3ab3647))



<a name="1.2.2"></a>
## [1.2.2](https://github.com/ngneat/spectator/compare/v1.2.1...v1.2.2) (2018-04-13)


### Bug Fixes

* **query:** fix internal generic ([2b2406c](https://github.com/ngneat/spectator/commit/2b2406c))



<a name="1.2.1"></a>
## [1.2.1](https://github.com/ngneat/spectator/compare/v1.2.0...v1.2.1) (2018-04-13)


### Bug Fixes

* **query:** query now returns the right generic ([2e69a09](https://github.com/ngneat/spectator/commit/2e69a09))



<a name="1.2.0"></a>
# [1.2.0](https://github.com/ngneat/spectator/compare/v1.1.1...v1.2.0) (2018-04-11)


### Features

* **components:** add support to pass mocks providers ([0c58d06](https://github.com/ngneat/spectator/commit/0c58d06))



<a name="1.1.1"></a>
## [1.1.1](https://github.com/ngneat/spectator/compare/v1.1.0...v1.1.1) (2018-04-10)



<a name="1.1.0"></a>
# [1.1.0](https://github.com/ngneat/spectator/compare/v1.0.1...v1.1.0) (2018-04-10)


### Features

* **events:** add new helpers method ([7665d08](https://github.com/ngneat/spectator/commit/7665d08))



<a name="1.0.1"></a>
## [1.0.1](https://github.com/ngneat/spectator/compare/v1.0.0...v1.0.1) (2018-04-10)



<a name="1.0.0"></a>
# [1.0.0](https://github.com/ngneat/spectator/compare/v0.5.2...v1.0.0) (2018-04-07)


### Features

* **query:** query and queryall now supports more options ([a309f3c](https://github.com/ngneat/spectator/commit/a309f3c))


### BREAKING CHANGES

* **query:** 1. ByDirective no longer exists - use query/all



<a name="0.5.2"></a>
## [0.5.2](https://github.com/ngneat/spectator/compare/v0.5.1...v0.5.2) (2018-04-05)


### Bug Fixes

* **host:** remove unused import ([e0e7f28](https://github.com/ngneat/spectator/commit/e0e7f28))



<a name="0.5.1"></a>
## [0.5.1](https://github.com/ngneat/spectator/compare/v0.5.0...v0.5.1) (2018-04-05)


### Bug Fixes

* **entrycomponents:** fix undefined bug ([fe921c9](https://github.com/ngneat/spectator/commit/fe921c9))



<a name="0.5.0"></a>
# [0.5.0](https://github.com/ngneat/spectator/compare/v0.4.2...v0.5.0) (2018-04-05)


### Features

* **components:** add support for entry components ([8ba6870](https://github.com/ngneat/spectator/commit/8ba6870)), closes [#6](https://github.com/ngneat/spectator/issues/6)



<a name="0.4.2"></a>
## [0.4.2](https://github.com/ngneat/spectator/compare/v0.4.1...v0.4.2) (2018-04-05)


### Bug Fixes

* **host:** fix generic type ([ebf923b](https://github.com/ngneat/spectator/commit/ebf923b))



<a name="0.4.1"></a>
## [0.4.1](https://github.com/ngneat/spectator/compare/v0.4.0...v0.4.1) (2018-04-04)


### Bug Fixes

* **spectator:** fix queryall return type ([8456943](https://github.com/ngneat/spectator/commit/8456943))



<a name="0.4.0"></a>
# [0.4.0](https://github.com/ngneat/spectator/compare/v0.3.0...v0.4.0) (2018-04-04)


### Features

* **spectator:** support for getting the debug element ([5838954](https://github.com/ngneat/spectator/commit/5838954))



<a name="0.3.0"></a>
# [0.3.0](https://github.com/ngneat/spectator/compare/v0.2.2...v0.3.0) (2018-04-04)


### Features

* **host:** add the option to pass complex inputs ([45de5e1](https://github.com/ngneat/spectator/commit/45de5e1)), closes [#5](https://github.com/ngneat/spectator/issues/5)



<a name="0.2.2"></a>
## [0.2.2](https://github.com/ngneat/spectator/compare/v0.2.1...v0.2.2) (2018-04-04)



<a name="0.2.1"></a>
## [0.2.1](https://github.com/ngneat/spectator/compare/v0.2.0...v0.2.1) (2018-04-04)



<a name="0.2.0"></a>
# [0.2.0](https://github.com/ngneat/spectator/compare/v0.1.5...v0.2.0) (2018-04-03)


### Features

* **internals.js:** additional parameters for event emitting functions ([2f562fb](https://github.com/ngneat/spectator/commit/2f562fb))
* **query:** add the option to query by directive ([9d54c42](https://github.com/ngneat/spectator/commit/9d54c42))



<a name="0.1.5"></a>
## [0.1.5](https://github.com/ngneat/spectator/compare/v0.1.4...v0.1.5) (2018-04-02)


### Bug Fixes

* **click:** add an option to pass native element and debug element ([fafe43d](https://github.com/ngneat/spectator/commit/fafe43d))



<a name="0.1.4"></a>
## [0.1.4](https://github.com/ngneat/spectator/compare/v0.1.3...v0.1.4) (2018-04-02)


### Bug Fixes

* **host:** fix initial module undefined when using host ([5c09555](https://github.com/ngneat/spectator/commit/5c09555))



<a name="0.1.3"></a>
## [0.1.3](https://github.com/ngneat/spectator/compare/v0.1.0...v0.1.3) (2018-04-01)


### Bug Fixes

* **host:** mark host as optional ([834b12f](https://github.com/ngneat/spectator/commit/834b12f))



<a name="0.1.0"></a>
# [0.1.0](https://github.com/ngneat/spectator/compare/dccdbbe...v0.1.0) (2018-04-01)


### Bug Fixes

* dummy commit ([ec4b6bd](https://github.com/ngneat/spectator/commit/ec4b6bd))


### Features

* **lib:** initial commit ([5043600](https://github.com/ngneat/spectator/commit/5043600))
* **lib:** initial commit ([6f1ba2d](https://github.com/ngneat/spectator/commit/6f1ba2d))
* **services:** Testing services with and without a mock ([dccdbbe](https://github.com/ngneat/spectator/commit/dccdbbe))
