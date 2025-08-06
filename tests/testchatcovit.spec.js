import { test, expect } from '@playwright/test';

test.describe('Update Profile in Naukri', () => {
  test('goto google.com', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.google.com/');
    //await page.locator('.gLFyf').click()
     await page.locator('.gLFyf').fill("abc")
console.log("Google searchd abc");

  })
})
    