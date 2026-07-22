# Angular RealWorld Example App

## Commands

```bash
npm install             # Install deps (run after clone)
npm start               # Dev server at localhost:4200
npm run test:e2e        # E2E tests (Playwright)
npm run format          # Format code with Prettier
npm run format:check    # Check formatting without writing
```

## Code Style

- Run `npm run format` before presenting code to the user.

## Debug Interface

`window.__conduit_debug__` (see `src/app/app.config.ts`) exposes app state — auth state, current user, JWT token — for e2e tests to read without touching localStorage or internals directly.
