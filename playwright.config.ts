import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: 'src/tests',
  fullyParallel: false,
  forbidOnly: !!process.env['CI'],
  retries: process.env['CI'] ? 1 : 0,
  reporter: 'html',

  timeout: 30 * 1000,

  use: {
    baseURL: 'http://localhost:4200',
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    actionTimeout: 30 * 1000,
    navigationTimeout: 30 * 1000,
  },

  expect: {
    timeout: 30 * 1000,
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

  webServer: {
    command: 'npm start',
    url: 'http://localhost:4200',
    reuseExistingServer: !process.env['CI'],
    timeout: 120 * 1000,
  },
});
