// import { test, expect } from '@playwright/test';

// test.describe('Update Profile in Naukri', () => {
//   test('goto naukri.com', async ({ browser }) => {
//     const context = await browser.newContext()
//     const page = await context.newPage();

//     page.on('response', response => {
//     const secChUaHeader = response.headers()['sec-ch-ua'];
//     if (secChUaHeader) {
//       console.log('Sec-CH-UA header in response:', secChUaHeader);
//     }
//   });

//     await page.goto('https://www.naukri.com/');
//     console.log("Naukri url launched");
//     await page.screenshot({ path: 'headless-launch-url.png' });

//       //click on the login button   
//       const loginButton = page.locator('#login_Layer');
//       await loginButton.waitFor({ state: 'visible', timeout: 20000 });
//       // Click the login button
//       await loginButton.click();
//        console.log("Naukri Login button clicked");
//   });
// });