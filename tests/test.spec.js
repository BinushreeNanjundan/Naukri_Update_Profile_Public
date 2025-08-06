// import { test, expect } from '@playwright/test';

// //require('dotenv').config();

// const email = process.env.NAUKRI_EMAIL;
// const password = process.env.NAUKRI_PASSWORD;
// const resumeHeadlineWords = process.env.RESUME_HEADLINE_001;
// const resumeHeadlineWords1 = process.env.RESUME_HEADLINE_002;

// async function loginToNaukri(page) {
//   console.log("Login to Naukri function");
//   await page.locator('#usernameField').fill(email)
//   console.log('email id is filled')
//   //fill the password input field
//   await page.locator('#passwordField').fill(password)
//   console.log('password is filled')
//   //click login button
//   const loginButton = page.locator('.waves-effect.waves-light.btn-large.btn-block.btn-bold.blue-btn.textTransform')
//       loginButton.click()
//   console.log('login button is clicked')
// }


// test.describe('Update Profile in Naukri', () => {
//   test.beforeEach(async ({ page }) => {
//     try {
//       console.log("Launch Browser");

//       await page.goto('https://login.naukri.com/nLogin/Login.php/', { timeout: 20000 });
// // const naukriTitle = page.getByText('Login');

// //      await naukriTitle.waitFor({ state: 'visible', timeout: 10000 })
// //       console.log("Naukri page is visible: " + naukriTitle);
//       console.log("Launched the naukri login page");

    
//     }
//     catch (error) {
//       console.error('Error during beforeEach setup:', error);
//       throw error
//     }
//   })


//   test('TC001 - Login Page - Verify if the login fields are visible ', async ({ page }) => {
//     console.log("Testcase 1 is starting");

//     //verify if the email label field is visible
//     const emailLableisvisible = await page.locator('.lbl').getByText('Email ID / Username').isVisible()
//     console.log("Email ID label is visible: " + emailLableisvisible);

//     //verify if the email input field is visible
//     const emailInputboxisVisible = await page.locator('#usernameField').isVisible()
//     console.log("Email ID input field is visible: " + emailInputboxisVisible);

//     //verify if the password label field is visible
//     const passwordLableisvisible = await page.locator('.lbl').getByText('Password').isVisible()
//     console.log("Password label is visible: " + passwordLableisvisible);

//     //verify if the password  input field is visible
//     const passwordInputboxisVisible = await page.locator('#passwordField').isVisible()
//     console.log("Password input field is visible: " + passwordInputboxisVisible);

//     //verify if the submit button is visible
//     const loginButtonisVisible = await page.locator('.waves-effect.waves-light.btn-large.btn-block.btn-bold.blue-btn.textTransform').isVisible()
//     console.log("Login button is visible: " + loginButtonisVisible);


//   })

//     test('TC002 - Login Page - Fill in fields and click on the Login button', async ({ page }) => {
//     console.log("Testcase 2 is starting");

//     //call the login function created 
//     await loginToNaukri(page)
//     console.log("Login is successful");


//     //View Profile is visible successful
//     const viewProfileEle = page.locator('.view-profile-wrapper')
//     await viewProfileEle.waitFor({ state: 'visible', timeout: 10000 }) //wait till the page loads
//     const viewProfileisVisible = await viewProfileEle.isVisible();
//     console.log("Profile is visible " + viewProfileisVisible);

//     if (viewProfileisVisible) {
//       console.log('Login successful and profile is visible');
//     } else {
//       console.log('Login failed or profile is not visible');
//     }


//   })


// })