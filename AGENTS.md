# Repository Guidelines

## Project Structure & Module Organization

This repository is currently an empty project scaffold. As implementation is added, keep the layout predictable: 

- `src/` for application source code.
- `tests/` for automated tests that mirror `src/` structure.
- `assets/` for static files such as images, fonts, and fixtures.
- `docs/` for longer design notes, setup guides, and architecture references.

Prefer small, focused modules. Group related code by feature or domain rather than by generic file type when the project grows.

## Build, Test, and Development Commands

No build system or package manager is configured yet. When tooling is introduced, document the canonical commands here and keep them stable. Recommended examples:

- `npm install` or equivalent: install project dependencies.
- `npm run dev`: start the local development server.
- `npm test`: run the full automated test suite.
- `npm run lint`: check formatting and code quality.
- `npm run build`: create a production-ready build.

Avoid adding multiple commands that perform the same task unless each has a clearly documented purpose.

## Coding Style & Naming Conventions

Use the formatter and linter configured by the project once they exist. Until then, prefer:

- 2-space indentation for JavaScript, TypeScript, JSON, YAML, HTML, and CSS.
- Descriptive file names such as `user-profile.ts`, `profile-card.tsx`, or `settings-form.test.ts`.
- `camelCase` for variables and functions, `PascalCase` for classes and UI components, and `UPPER_SNAKE_CASE` for constants.

Keep functions short, name behavior clearly, and avoid unrelated refactors in feature changes.

## Testing Guidelines

Add tests alongside new behavior. Place tests under `tests/` or next to source files using a clear suffix such as `.test.ts`, `.spec.ts`, or the equivalent for the chosen stack.

Cover important user flows, edge cases, and bug fixes. If a change cannot be tested automatically, note the manual verification steps in the pull request.

## Commit & Pull Request Guidelines

This directory has no Git history yet, so no existing commit convention is available. Use clear, imperative commit subjects, for example:

- `Add profile summary component`
- `Fix avatar upload validation`

Pull requests should include a short summary, testing performed, linked issues when applicable, and screenshots or recordings for UI changes. Keep PRs focused on one logical change.

## Agent-Specific Instructions

Before editing, inspect the current tree and preserve user changes. Do not introduce project tooling, dependencies, or broad structure unless the task requires it.
