import { test, expect } from '@playwright/test';

test.describe('Login Test', () => {
  test('@Login Test', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    expect(page.url()).toBe('https://www.saucedemo.com/');
  });
});
