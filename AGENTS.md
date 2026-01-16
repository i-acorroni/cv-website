# Repository Guidelines

## Project Structure & Module Organization
The project follows a Next.js App Router structure with clear separation of concerns:

- `src/app/` - Next.js pages and routes
- `src/components/` - Reusable React components
- `src/lib/` - Utility functions and helpers
- `src/types/` - TypeScript type definitions
- `content/` - Content files (blog posts, publications, projects)
  - `content/blog/` - Markdown blog posts
  - `content/publications/` - Publications JSON data
  - `content/projects/` - Projects JSON data
- `public/` - Static assets (images, favicon, etc.)

## Build, Test, and Development Commands

- `npm run dev`: Start the local development server at http://localhost:3000
- `npm run build`: Create a production build
- `npm start`: Start the production server (after build)
- `npm run lint`: Run ESLint to check for code issues

## Coding Style & Naming Conventions

- **Language**: TypeScript
- **Styling**: Tailwind CSS utility classes
- **Formatting**: ESLint with Next.js config
- **Naming Conventions**:
  - Components: `PascalCase.tsx` (e.g., `BlogCard.tsx`)
  - Utilities: `camelCase.ts` (e.g., `markdown.ts`)
  - Types: `camelCase.ts` (e.g., `content.ts`)
  - Pages: `page.tsx` (Next.js App Router convention)
- **Indentation**: 2 spaces
- **Quotes**: Single or double quotes (be consistent)

## Testing Guidelines

No test framework is set up yet. When tests are added, note the framework, the test file naming pattern, and the minimal expectations for coverage. Example:

- Framework: `vitest` or `jest`
- Naming: `*.test.ts` or `*.spec.ts`
- Run: `npm test`

## Commit & Pull Request Guidelines

Follow conventional commit format:

- `Add: feature description` - New features
- `Fix: bug description` - Bug fixes
- `Update: change description` - Updates to existing features
- `Refactor: refactoring description` - Code refactoring
- `Docs: documentation update` - Documentation changes
- `Style: styling changes` - CSS/styling only

For pull requests, include a clear description, list key changes, and add screenshots for UI updates.

## Configuration & Secrets

Environment variables are documented in `.env.example`. Never commit real secrets to the repository. Current environment variables:

- `NEXT_PUBLIC_SITE_URL` - Site URL (optional, defaults to localhost:3000)
- `NEXT_PUBLIC_SITE_NAME` - Site name (optional)
