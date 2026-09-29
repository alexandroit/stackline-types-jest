# Changelog

## 1.0.0

- First Stackline maintenance release based on @types/jest 30.0.0.
- Preserve the declaration API, compatibility line, contributors and MIT license.
- Add isolated TypeScript compilation tests, complete dependency audit, CodeQL and exact-artifact GitHub publication with provenance and immutable release evidence.

Correct the inherited `typeScriptVersion: 5.1` metadata to 5.4, the already-established minimum of Jest30 (https://jestjs.io/docs/upgrading-to-jest30). The original 5.1 compilation fails in upstream jest-mock declarations on `esnext.disposable`; no declaration API or dependency major was changed. The published Jest30 line remains unchanged and is tested with TypeScript5.4.5 and5.9.3.
