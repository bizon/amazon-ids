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
- Build: `pnpm build` (tsdown, dual CJS + ESM output)

## Commit and PR conventions

- Use semantic commit messages (Conventional Commits)
- Subject line under 55 characters, body lines under 72 characters
- No `Co-Authored-By` trailer
- PR titles follow the same conventions as commit subjects
- No "Generated with Claude Code" footer in PR descriptions
- Branch names prefixed with GitHub username (use `gh api user --jq '.login'`)

## Project structure

```text
src/
  index.ts              # Main entry point — exports the lookup functions and re-exports the types
  marketplaces.ts       # Marketplace data (34 entries) + the types derived from it
tests/
  index.spec.ts         # Jest test suite
  index.test-d.ts       # Type-level assertions (checked by `pnpm check:ts`, ignored by Jest)
dist/                   # Build output (tsdown): index.mjs (ESM), index.cjs (CJS), type declarations
.github/
  workflows/
    tests.yml           # CI: lint + type check + Jest on every PR and push to master
    release.yml         # Manual: semantic-release + npm publish
    pr.yml              # PR title validation (semantic commit format)
  dependabot.yml        # Weekly dependency updates
```

## Code patterns

- **Dual output**: tsdown compiles to both CommonJS (`dist/index.cjs`) and ES Modules (`dist/index.mjs`), with type declarations
- **ESM-first**: package type is `module`, tests run with `NODE_OPTIONS=--experimental-vm-modules`
- **Package runner**: use `pnpx` instead of `npx`
- **Node version**: 24 (see `.node-version`)
- **Lookup functions**: `getMarketplaceById`, `getMarketplaceByCode`, `getMarketplaceByDomain` — all return `undefined` for unknown inputs
- **Derived types**: `marketplaces.ts` holds the data as `as const satisfies readonly Marketplace[]`, from which `MarketplaceCode`, `MarketplaceId`, `MarketplaceRegion` and `MarketplaceDomain` are derived. `MarketplaceCode`/`MarketplaceDomain` only cover entries having a `domain`
- **Overloads**: each lookup has a literal overload returning `Marketplace` and a `string` overload returning `Marketplace | undefined`; keep them in that order and cover changes in `tests/index.test-d.ts`
- **Case handling**: code and domain lookups are case-insensitive; domain lookup strips `www.` prefix
- **Marketplace data**: each entry has `code`, `id`, `name`, `region`, `currencyCode`, and optional fields (`domain`, `advertisingApiDomain`, `imagesDomain`, `vendorId`, `sellerCentralDomain`, `vendorCentralDomain`)

## CI/CD

- **Tests** (`tests.yml`): lint + type check + Jest on every PR and push to master; uploads results and coverage to Codecov
- **Release** (`release.yml`): manual workflow dispatch — runs `semantic-release` with `@bizon/semantic-release-config`, builds before publishing
- **PR validation** (`pr.yml`): enforces semantic PR titles
- **Dependabot**: weekly updates for npm and GitHub Actions, grouped by category (jest, lint)
