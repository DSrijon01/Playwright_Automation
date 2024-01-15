import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://test-admin.abgpocket.com/auth/login');
  await page.getByPlaceholder('Enter your Username').click();
  await page.getByPlaceholder('Enter your Username').fill('srijon01');
  await page.getByRole('textbox', { name: 'Enter your Password' }).click();
  await page.getByRole('textbox', { name: 'Enter your Password' }).fill('123456@Aa');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByRole('link', { name: ' Event Management ' }).click();
  await page.getByRole('link', { name: ' Event Details' }).click();
  await page.getByRole('button', { name: ' Create' }).click();
  await page.getByText('Select Event Type').click();
  await page.getByLabel('Concert').click();
  await page.getByText('Select Event Partner').click();
  await page.getByLabel('BPL').click();
  await page.locator('#eventName').click();
  await page.locator('#eventName').fill('BPL Concert');
  await page.locator('#venue').click();
  await page.locator('#venue').fill('BrainStation23');
  await page.locator('div').filter({ hasText: /^Event Date \*$/ }).locator('#icon').click();
  await page.getByText('15').click();
  await page.locator('div').filter({ hasText: /^Event Time \*$/ }).getByRole('textbox').click();
  await page.getByText('15').click();
  await page.getByRole('button', { name: '' }).first().click({
    clickCount: 4
  });
  await page.getByRole('button', { name: '' }).first().click();
  await page.getByText('33').click();
  await page.getByRole('button', { name: '' }).nth(1).click();
  await page.getByRole('button', { name: '' }).nth(1).click();
  await page.getByRole('button', { name: '' }).nth(1).click();
  await page.getByRole('button', { name: '' }).nth(1).click({
    clickCount: 5
  });
  await page.locator('form').click();
  await page.getByPlaceholder('hh:mm').nth(3).click();
  await page.locator('form').click();
  await page.getByPlaceholder('hh:mm').nth(3).click();
  await page.getByText('15').click();
  await page.locator('div').filter({ hasText: /^33$/ }).click();
  await page.getByRole('button', { name: '' }).first().click();
  await page.locator('form').click();
  await page.locator('#maxPerTransaction').click();
  await page.locator('#maxPerTransaction').fill('20');
  await page.locator('#maxPerDay').click();
  await page.locator('#maxPerDay').fill('1');
  await page.locator('#maxPerAccount').click();
  await page.locator('#maxPerAccount').fill('1');
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.getByRole('link', { name: ' Partner Details' }).click();
  await page.getByRole('button', { name: ' Create' }).click();
  await page.locator('#eventPartnerName').fill('Event Partner');
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.getByRole('link', { name: ' Home ' }).click();
  await page.getByRole('link', { name: ' Pending Actions' }).first().click();
  await page.getByRole('row', { name: '1 EDIT_MENU superadmin2 super' }).getByRole('button').click();
  await page.getByRole('button', { name: '' }).click();
});