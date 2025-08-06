import { test, expect } from '@playwright/test';
import { chromium } from '@playwright/test';

//require('dotenv').config();

let browser, context, page;
const email = process.env.NAUKRI_EMAIL;
const password = process.env.NAUKRI_PASSWORD

async function loginToNaukri(page) {
     const usernameField = page.locator('#usernameField');
    const passwordField = page.locator('#passwordField');
    const loginButton = page.locator('.waves-effect.waves-light.btn-large.btn-block.btn-bold.blue-btn.textTransform');
    await page.locator('#usernameField').fill(email);
    await page.locator('#passwordField').fill(password);
    await page.locator('.waves-effect.waves-light.btn-large.btn-block.btn-bold.blue-btn.textTransform').click();
}

test.describe('Update Profile in Naukri', () => {
    test.beforeEach(async () => {
        browser = await chromium.launch();
        context = await browser.newContext()
        page = await context.newPage();
        await page.goto('https://login.naukri.com/nLogin/Login.php', { waitUntil: 'load', timeout: 60000 });
        console.log("luanched url naukri login page")
        await page.screenshot({ path: 'beforeeach-login-page.png' }); // <-- Screenshot added here


    });

    test.afterAll(async () => {
        await browser.close();
    });

    test('TC001 - Login Page - Verify if the login fields are visible', async () => {
        console.log("Testcase 1 is starting");
          const currentUrl = page.url();
        console.log("Current URL:", currentUrl);
        //await expect(page.locator('.lbl', { hasText: 'Email ID / Username' })).toBeVisible();
        await expect(page.locator('#usernameField')).toBeVisible();
        // await expect(page.locator('.lbl', { hasText: 'Password' })).toBeVisible();
        await expect(page.locator('#passwordField')).toBeVisible();
        await expect(page.locator('.waves-effect.waves-light.btn-large.btn-block.btn-bold.blue-btn.textTransform')).toBeVisible()
       });

    test('TC002 - Login Page - Fill in fields and click on the Login button', async () => {
        await loginToNaukri(page);
        const currentUrl = page.url();
        console.log("Current URL:", currentUrl);
        const viewProfileEle = page.locator('.view-profile-wrapper');
        await viewProfileEle.waitFor({ state: 'visible', timeout: 10000 });
        const viewProfileisVisible = await viewProfileEle.isVisible();
        console.log("Profile is visible " + viewProfileisVisible);
        if (viewProfileisVisible) {
            console.log('Login successful and profile is visible');
        } else {
            console.log('Login failed or profile is not visible');
        }
    });
});