import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }, testInfo) => {
  await page.goto('http://localhost:4200/login');
  await page.getByLabel('Email').fill('lukas@gmail.com');
  await page.getByLabel('Password').fill('password');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.waitForURL('**/viewer');
});

test('Viewer', async ({ page }) => {
  const table = page.locator('table');
  const headers = table.locator('thead tr th');

  await expect(headers).toHaveText(['Name', 'Category', 'Ring', 'Description', 'Justification']);
});
