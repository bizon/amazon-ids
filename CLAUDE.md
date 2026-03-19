# CLAUDE.md

> **Maintenance rule**: when editing this file, ensure every rule is unambiguous, non-redundant, and non-contradictory. Keep sections focused — each rule belongs in exactly one place. Remove or merge anything that overlaps. The goal is a single source of truth that leaves zero room for interpretation.

## Project overview

TypeScript package providing a curated list of Amazon marketplace identifiers and metadata, with helper functions for lookup by ID, country code, or domain. Published to npm as `@bizon/amazon-ids`.

## Checks (run after every change)

```bash
pnpm xo          # linter (ESLint-based via XO)
pnpm check:ts    # type checker (tsc --noEmit)
pnpm test        # tests (Jest with SWC)
```

- `pnpm xo --fix <path>` to auto-fix lint issues in a specific file
- Build: `pnpm build` (tsup, dual CJS + ESM output)

## Commit and PR conventions

- Use semantic commit messages (conventional commits)
- Subject line under 55 characters, body lines under 72 characters
- No `Co-Authored-By` trailer
- PR titles follow the same conventions as commit subjects
- No "Generated with Claude Code" footer in PR descriptions
- Branch names prefixed with GitHub username (use `gh api user --jq '.login'`)

## Project structure

```
src/
  index.ts              # Main entry point — exports Marketplace type and lookup functions
  marketplaces.json     # Marketplace data (34 entries)
__tests__/
  index.spec.ts         # Jest test suite
dist/                   # Build output (tsup): index.js (ESM), index.cjs (CJS), type declarations
.github/
  workflows/
    tests.yml           # CI: lint + type check + Jest on every PR and push to master
    release.yml         # Manual: semantic-release + npm publish
    pr.yml              # PR title validation (semantic commit format)
  dependabot.yml        # Weekly dependency updates
```

## Code patterns

- **Dual output**: tsup compiles to both CommonJS (`dist/index.cjs`) and ES Modules (`dist/index.js`), with type declarations
- **ESM-first**: package type is `module`, tests run with `NODE_OPTIONS=--experimental-vm-modules`
- **Package runner**: use `pnpx` instead of `npx`
- **Node version**: 24 (see `.node-version`)
- **Lookup functions**: `getMarketplaceById`, `getMarketplaceByCode`, `getMarketplaceByDomain` — all return `undefined` for unknown inputs
- **Case handling**: code and domain lookups are case-insensitive; domain lookup strips `www.` prefix
- **Marketplace data**: each entry has `code`, `id`, `name`, `region`, `currencyCode`, and optional fields (`domain`, `advertisingApiDomain`, `imagesDomain`, `vendorId`, `sellerCentralDomain`, `vendorCentralDomain`)

## CI/CD

- **Tests** (`tests.yml`): lint + type check + Jest on every PR and push to master; uploads results and coverage to Codecov
- **Release** (`release.yml`): manual workflow dispatch — runs `semantic-release` with `@bizon/semantic-release-config`, builds before publishing
- **PR validation** (`pr.yml`): enforces semantic PR titles
- **Dependabot**: weekly updates for npm and GitHub Actions, grouped by category (jest, lint)
