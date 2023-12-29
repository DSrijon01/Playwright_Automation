import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/client/');
  await page.setViewportSize({ width: 1366, height: 768 });
  await page.getByPlaceholder('email@example.com').click();
  await page.getByPlaceholder('email@example.com').fill('sbs23@gmail.com');
  await page.getByPlaceholder('enter your passsword').click();
  await page.getByPlaceholder('enter your passsword').fill('SBS121212b');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: ' Add To Cart' }).first().click();
  await page.getByRole('button', { name: ' Add To Cart' }).nth(1).click();
  await page.getByRole('button', { name: ' Cart' }).click();
  await page.getByRole('button', { name: 'Checkout❯' }).click();
  await page.locator('input[type="text"]').nth(1).click();
  await page.locator('input[type="text"]').nth(1).fill('423');
  await page.locator('input[type="text"]').nth(2).click();
  await page.locator('input[type="text"]').nth(2).fill('Srijon');
  await page.locator('input[name="coupon"]').click();
  await page.locator('input[name="coupon"]').fill('BS');
  await page.getByRole('button', { name: 'Apply Coupon' }).click();
  // WorkAround
  await page.click('input[type="text"]');
  await page.locator("[placeholder*='Country']").pressSequentially("ind");
  await page.getByRole('button', { name: ' India' }).click();
  const dropdown = page.locator(".ta-results");
//   await dropdown.waitFor();
  const optionsCount = await dropdown.locator("button").count();
   for (let i = 0; i < optionsCount; ++i) {
      const text = await dropdown.locator("button").nth(i).textContent();
      if (text === " India") {
         await dropdown.locator("button").nth(i).click();
         break;
      }
   }
   // Workaround
  await page.getByText('Place Order').click();
  await page.getByRole('button', { name: 'Click To Download Order Details in CSV' }).click();
});