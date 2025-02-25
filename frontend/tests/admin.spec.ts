import { test, expect } from '@playwright/test';
import { resetDatabase } from './helper';

test.beforeEach(async ({ page }, testInfo) => {
  await page.goto('http://localhost:4200/login');
  await page.getByLabel('Email').fill('lukas@hslu.ch');
  await page.getByLabel('Password').fill('santana01');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.waitForURL('**/viewer');
});

test('Viewer', async ({ page }) => {
  const table = page.locator('#technology-viewer');
  const headers = table.locator('thead tr th');

  await expect(headers).toHaveText(['Name', 'Category', 'Ring', 'Description', 'Justification']);
});

test('Admin Viewer', async ({ page }) => {
  await page.goto('http://localhost:4200/admin');

  const table = page.locator('#technology-viewer');
  const headers = table.locator('thead tr th');

  await expect(headers).toHaveText([
    'Name',
    'Category',
    'Ring',
    'Description',
    'Justification',
    'Edit'
  ]);
  await expect(page.getByRole('button', { name: 'Add Technology' })).toBeVisible();
});

test('Admin user approval view', async ({ page }) => {
  await page.goto('http://localhost:4200/admin');

  const table = page.locator('#approve-users-view');
  const headers = table.locator('thead tr th');

  await expect(headers).toHaveText(['Date', 'Email', 'Action']);
  await expect(page.getByRole('button', { name: 'Add Technology' })).toBeVisible();
});

test('Admin logging view', async ({ page }) => {
  await page.goto('http://localhost:4200/admin');

  const table = page.locator('#logging-view');
  const headers = table.locator('thead tr th');

  await expect(headers).toHaveText([
    'Date',
    'Type',
    'Successful?',
    'Email',
    'IP Address',
    'Reason for fail'
  ]);
  await expect(page.getByRole('button', { name: 'Add Technology' })).toBeVisible();
});

test('Admin Panel Switch', async ({ page }) => {
  const adminSwitch = page.getByRole('switch', { name: 'Admin Console' });

  await adminSwitch.click();
  await expect(page).toHaveURL(/\/admin$/);

  await expect(adminSwitch).toBeChecked;

  await adminSwitch.click();
  await expect(adminSwitch).toBeChecked({ checked: false });
  await expect(page).toHaveURL(/\/viewer$/);
});

test('Add Technology', async ({ page }) => {
  await page.goto('http://localhost:4200/admin');
  await page.waitForURL('**/admin');
  await page.getByRole('button', { name: 'Add Technology' }).click();

  await expect(page.locator('#createTechnologyForm')).toBeVisible();

  await page.getByRole('textbox', { name: 'Name' }).fill('New Technology');
  await page.getByRole('textbox', { name: 'Description' }).fill('New Description');
  await page.getByRole('textbox', { name: 'Justification' }).fill('New Justification');
  await page.getByRole('combobox', { name: 'Category' }).click();
  await page.waitForSelector('mat-option');
  await page.getByRole('option', { name: 'Techniques' }).click();
  await page.getByRole('combobox', { name: 'Ring' }).click();
  await page.waitForSelector('mat-option');
  await page.getByRole('option', { name: 'Adopt' }).click();

  await page.getByRole('button', { name: 'Save' }).click();

  await expect(page.getByRole('cell', { name: 'New Technology', exact: true })).toBeVisible();
  await resetDatabase();
});
