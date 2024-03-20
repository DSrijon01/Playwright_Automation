// Run Command - npx playwright test tests/nop_test.spec.js --project=chromium --headed
// Report Command - npx playwright show-report 


import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://shwapno.nop-station.com/');
  await page.getByRole('button', { name: 'No' }).click();
  await page.getByRole('link', { name: 'nav icon Snacks ' }).click();
  await page.getByRole('link', { name: 'Dairy ' }).click();
  await page.getByRole('link', { name: 'Break Fast', exact: true }).click();
  await page.locator('.add-to-cart-button').first().click();
  await page.getByText('Delivery Location←Move left→').click();
  await page.getByPlaceholder('Search location').click();
  await page.getByPlaceholder('Search location').fill('BrainStation23');
  await page.getByText('Bir Uttam AK Khandakar Road,').click();
  await page.getByRole('button', { name: 'Confirm Location' }).click();
  await page.locator('.add-to-cart-button').first().click();
  await page.getByLabel('increase quantity').click();
  await page.getByLabel('increase quantity').click();
  await page.getByLabel('increase quantity').click();

  // Button Identifier Dynamic
  await page.getByRole('button', { name: 'items ৳131.72' }).click()
  await page.getByRole('button', { name: 'Place order' }).click();
  await page.getByPlaceholder('1XXXXXXXXX').click();
  await page.getByPlaceholder('1XXXXXXXXX').fill('1712345099');
  await page.getByRole('button', { name: 'Login', exact: true }).click();
  await page.locator('#otp').click();
  await page.locator('#otp').fill('12345');
  await page.getByRole('button', { name: 'Verify' }).click();
  await page.getByRole('button', { name: 'Confirm' }).click();

  // Fillout Address First Name --
  await page.getByLabel('First Name').click();
  await page.getByLabel('First Name').fill('Srijon');
  // Fillout Address Last Name
  await page.getByLabel('Last Name').click();
  await page.getByLabel('Last Name').fill('Biswas');
  // Save Address
  await page.getByRole('button', { name: 'Save Address' }).click()

  // Pay with Card
  await page.locator('div').filter({ hasText: /^Card Payment$/ }).click();
  await page.locator('input[name="pan"]').click();
  await page.locator('input[name="pan"]').fill('41111111111111111');
  await page.getByRole('button', { name: 'Success' }).click();
  await page.getByRole('link', { name: 'Visa VISA Card' }).click();
  await page.getByRole('button', { name: 'Success!' }).click();
  await page.getByRole('link', { name: 'See order details' }).click();

});