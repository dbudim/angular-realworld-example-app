# Angular RealWorld Example App

## Commands

```bash
bun install            # Install deps (run after clone)
bun run start          # Dev server at localhost:4200
bun run test:e2e       # E2E tests (Playwright)
bun run format         # Format code with Prettier
bun run format:check   # Check formatting without writing
```

## Code Style

- Run `bun run format` before presenting code to the user.

## Debug Interface

`window.__conduit_debug__` (see `src/app/app.config.ts`) exposes app state — auth state, current user, JWT token — for e2e tests to read without touching localStorage or internals directly.
