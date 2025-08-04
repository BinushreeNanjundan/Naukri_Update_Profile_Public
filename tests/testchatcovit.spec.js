// import { test, expect } from '@playwright/test';

// test.describe('Update Profile in Naukri', () => {
//   test.only('Login to Naukri', async ({ browser }) => {
//     const context = await browser.newContext();
//     const page = await context.newPage();
//     await page.goto('https://www.naukri.com/');
//     await page.locator('#login_Layer').click();

//     // Verify if the email label field is visible
//     await expect(page.locator('.label', { hasText: 'Email ID / Username' })).toBeVisible();
//     // Verify if the email input field is visible
//     await expect(page.locator('[type="text"][placeholder="Enter your active Email ID / Username"]')).toBeVisible();

//     // Verify if the password label field is visible
//     await expect(page.locator('.label', { hasText: 'Password' })).toBeVisible();
//     // Verify if the password input field is visible
//     await expect(page.locator('input[type="password"][placeholder="Enter your password"]')).toBeVisible();

//     // Fill the email input field
//     await page.locator('[type="text"][placeholder="Enter your active Email ID / Username"]').fill('binushree1991@gmail.com');
//     await page.screenshot({ path: 'email.png' });

//     // Fill the password input field
//     await page.locator('input[type="password"][placeholder="Enter your password"]').fill('Aabhjs@1991');
//     console.log('Password is filled');

//     // Click the login button
//     const loginButton = page.locator('button[type="submit"]');
//     await expect(loginButton).toBeVisible();
//     await loginButton.click();
//     console.log('Login button clicked');

//     // Wait for profile to be visible after login
//     const profile = page.locator('.view-profile-wrapper');
//     await expect(profile).toBeVisible({ timeout: 15000 });
//     console.log('Login successful and profile is visible');
//   });
// });