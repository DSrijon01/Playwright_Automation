import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://test-admin.abgpocket.com/auth/login');
  await page.getByPlaceholder('Enter your Username').click();
  await page.getByPlaceholder('Enter your Username').click({
    button: 'right'
  });
  await page.getByPlaceholder('Enter your Username').click();
  await page.getByPlaceholder('Enter your Username').fill('admintaskin2');
  await page.getByRole('textbox', { name: 'Enter your Password' }).click();
  await page.getByRole('textbox', { name: 'Enter your Password' }).fill('123456@Ff');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByRole('button', { name: '' }).click();
});