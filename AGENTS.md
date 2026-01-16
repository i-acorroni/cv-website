# Repository Guidelines

## Project Structure & Module Organization
This repository is currently empty (no tracked source files yet). When code is added, keep a clear separation between application code, tests, and static assets. A typical layout might look like:

- `src/` for application code
- `tests/` for unit/integration tests
- `public/` or `assets/` for static files

Update this section once the real structure is in place.

## Build, Test, and Development Commands
No build or test tooling is configured yet. When you add a framework or tooling, document the exact commands here. Example format:

- `npm run dev`: start the local dev server
- `npm test`: run the test suite
- `npm run build`: create a production build

## Coding Style & Naming Conventions
No style guide or formatter is configured yet. When you introduce one, specify it here (e.g., Prettier, ESLint, or a language formatter). Document naming conventions (e.g., `camelCase` for variables, `PascalCase` for components) and indentation rules.

## Testing Guidelines
No test framework is set up yet. When tests are added, note the framework, the test file naming pattern, and the minimal expectations for coverage. Example:

- Framework: `vitest`
- Naming: `*.test.ts` or `*.spec.ts`
- Run: `npm test`

## Commit & Pull Request Guidelines
There is no commit history to infer conventions from yet. Until a standard is established, keep commit messages short and imperative (e.g., "Add hero section"). For pull requests, include a clear description, list key changes, and add screenshots for UI updates.

## Configuration & Secrets
If you add environment variables or API keys, document them in a `.env.example` file and never commit real secrets. Note required config values here once they exist.
