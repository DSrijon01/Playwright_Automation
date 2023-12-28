import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://managepd.eu/');
  await page.getByRole('button', { name: 'ACCEPT ALL' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'parkinson' }).click();
  const page1 = await page1Promise;
  await page.getByText('Select your country', { exact: true }).click();
  await page.getByText('Australia').click();
  await page.getByRole('button', { name: 'Continue ' }).click();
  await page.getByRole('link', { name: 'About MANAGE-PD ' }).click();
  const page2Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Antonini A, Odin P, Schmidt P' }).click();
  const page2 = await page2Promise;
  const page3Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Antonini A, Pahwa R, Odin P,' }).click();
  const page3 = await page3Promise;
  await page.getByRole('link', { name: 'Home', exact: true }).click();
  await page.getByRole('button', { name: 'YES ' }).click();
  const page4Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: ' Download Paper-based Tool' }).click();
  const page4 = await page4Promise;
  await page.locator('label').filter({ hasText: '4 doses' }).click();
  await page.locator('#Div3881 label').filter({ hasText: 'Yes' }).click();
  await page.locator('#Div3883 label').filter({ hasText: 'Yes' }).click();
  await page.locator('#Div3882 label').filter({ hasText: 'Yes' }).click();
  await page.locator('#Div3884 label').filter({ hasText: 'Yes' }).click();
  await page.locator('#Div3885 label').filter({ hasText: 'Sometimes(several times per' }).click();
  await page.locator('#Div3886 label').filter({ hasText: 'Moderate' }).click();
  await page.locator('#Div3887 label').filter({ hasText: 'Moderate' }).click();
  await page.locator('#Div3888 label').filter({ hasText: 'Sometimes(several times per' }).click();
  await page.locator('#Div3893 label').filter({ hasText: 'Sometimes(several times per' }).click();
  await page.locator('#Div3894 label').filter({ hasText: 'Moderate' }).click();
  await page.locator('#Div3895 label').filter({ hasText: 'Sometimes(several times per' }).click();
  await page.locator('#Div3896 label').filter({ hasText: 'Moderate' }).click();
  await page.locator('label').filter({ hasText: 'Needs assistance/dependent in' }).click();
  await page.locator('label').filter({ hasText: 'or more falls' }).click();
  await page.locator('#Div3891 label').filter({ hasText: 'Sometimes(several times per' }).click();
  await page.locator('#Div3892 label').filter({ hasText: 'Moderate' }).click();
  await page.locator('#Div3897 label').filter({ hasText: 'Sometimes(several times per' }).click();
  await page.locator('#Div3898 label').filter({ hasText: 'Moderate' }).click();
  await page.locator('#Div3899 label').filter({ hasText: 'Sometimes(several times per' }).click();
  await page.locator('#Div3900 label').filter({ hasText: 'Moderate' }).click();
  await page.getByRole('link', { name: '' }).click();
  await page.getByRole('button', { name: '×' }).click();
  await page.getByRole('link', { name: ' Download results' }).click();
  const page6Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: ' Download Scoring Algorithm' }).click();
  const page6 = await page6Promise;
  await page.getByText('Unpredictable motor').click();
  await page.getByRole('button', { name: 'Back To Suggestion' }).click();
  await page.getByRole('button', { name: 'Close or Retake Survey' }).click();
  await page.getByRole('button', { name: 'NO ' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.locator('p').filter({ hasText: 'ABBV-AA-00120-MC Version 1.1' }).getByRole('link').click();
  await page.getByRole('link').nth(4).click();
});