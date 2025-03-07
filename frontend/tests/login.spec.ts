import { test, expect } from '@playwright/test';
import { resetDatabase } from './helper';

test('Login Page', async ({ page }) => {
  await page.goto('http://localhost:4200');

  await expect(page.locator('#loginForm')).toBeVisible();
  await expect(page.getByLabel('Email')).toBeVisible();
  await expect(page.getByLabel('Password')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
});

test('Register Page', async ({ page }) => {
  await resetDatabase();
  await page.goto('http://localhost:4200/register');
  await expect(page.locator('#registerForm')).toBeVisible();
  await expect(page.getByLabel('Email')).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Password', exact: true })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Confrim Password' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Register' })).toBeVisible();
});

test('Login Logout flow', async ({ page }) => {
  await page.goto('http://localhost:4200/login');
  await page.getByLabel('Email').fill('lukas@hslu.ch');
  await page.getByLabel('Password').fill('santana01');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL(/\/viewer$/);
});

test('Register flow', async ({ page }) => {
  await resetDatabase();
  await page.goto('http://localhost:4200/register');
  await page.getByLabel('Email').fill('newUser@hslu.ch');
  await page.getByRole('textbox', { name: 'Password', exact: true }).fill('santana01');
  await page.getByRole('textbox', { name: 'Confrim Password' }).fill('santana01');
  await page.getByRole('button', { name: 'Register' }).click();
  await expect(page).toHaveURL(/\/login$/);
});

test('Logout flow', async ({ page }) => {
  await page.goto('http://localhost:4200/login');
  await page.getByLabel('Email').fill('lukas@hslu.ch');
  await page.getByLabel('Password').fill('santana01');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL(/\/viewer$/);

  await page.getByRole('button', { name: 'Logout' }).click();
  await expect(page).toHaveURL(/\/login$/);

  await expect(page.locator('#loginForm')).toBeVisible();
  await expect(page.getByLabel('Email')).toBeVisible();
  await expect(page.getByLabel('Password')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
});
