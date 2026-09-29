# Upstream and review

- Source: https://github.com/DefinitelyTyped/DefinitelyTyped/tree/cc23761e2c40a25fc41c96ac5df96cf59992599f/types/jest
- Published baseline: `@types/jest@30.0.0` (2025-06-16T07:35:50.850Z).
- Upstream tarball integrity: `sha512-XTYugzhuwqWjws0CVz8QpM36+T+Dz5mTEBKhNs/esGLnCIlGdRy+Dq78NRjd7ls7r8BC8ZRMOrKlkO1hU0JOwA==`.
- `index.d.ts` was compared byte-for-byte with that commit and matched before maintenance changes.
- This standalone snapshot repository preserves original source content, contributors and license, but does **not** claim to preserve the DefinitelyTyped monorepo Git history.
- Only original-parent direct dependencies are in scope; dependencies of this declaration package are not recursively forked.

## Issue review

GitHub search on 2026-09-29 used `repo:DefinitelyTyped/DefinitelyTyped is:issue is:open "jest"` and the corresponding closed query. Counts: open: 17 results (collected 17), closed: 133 results (collected 100). Search results can contain unrelated packages; they are not evidence that every result is a defect here. Archived search responses and baseline comparisons are retained in the release research evidence. No issue was posted or modified.

Issue #34617 (each done callbacks) is already supported by the selected declarations; the original reproduction is a positive compile test. #41179 requests new assertion-function semantics and is not a safe compatibility fix. #60223 requests broader callbacks; existing strict void/promise callback contract is preserved. Historical reports against Jest 23-27 do not justify changing the selected Jest30 API.

## Validation

Real declaration usage and negative type assertions are compiled with TypeScript 5.4.6 and 5.9.3, with `strict: true` and `skipLibCheck: false`, from source and isolated direct/alias tarball installs. CI also checks the complete dependency audit, CodeQL, package contents and exact CI archive identity before GitHub-only publication. Registry verification compiles direct and aliased installs rather than importing these type-only packages as JavaScript.

Correct the inherited `typeScriptVersion: 5.1` metadata to 5.4, the already-established minimum of Jest30 (https://jestjs.io/docs/upgrading-to-jest30). The original 5.1 compilation fails in upstream jest-mock declarations on `esnext.disposable`; no declaration API or dependency major was changed. The published Jest30 line remains unchanged and is tested with TypeScript5.4.5 and5.9.3.
