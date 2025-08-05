import { test, expect } from '@playwright/test';

require('dotenv').config();

const email = process.env.NAUKRI_EMAIL;
const password = process.env.NAUKRI_PASSWORD;
const resumeHeadlineWords = process.env.RESUME_HEADLINE_001;
const resumeHeadlineWords1 = process.env.RESUME_HEADLINE_002;

async function loginToNaukri(page) {

  //functionality check
  //fill the email input field
  
console.log('email:', email);

  await page.locator("[type='text'][placeholder='Enter your active Email ID / Username']").fill(email)
  console.log('email id is filled')


  //fill the password input field
  await page.locator("[placeholder='Enter your password']").fill(password)
  console.log('password is filled')


  //click login button
  await page.locator('button[type = "submit"]').click()
  console.log('login button is clicked')

}

test.describe('Update Profile in Naukri', () => {

  test.beforeEach(async ({ page }) => {

   // await page.goto('https://www.naukri.com/')
    
await page.goto('https://www.naukri.com/', { waitUntil: 'load', timeout: 60000 });

    //click on the login button
    
    await page.locator('#login_Layer').click()
  })


  test('TC001 - Login Page - Verify if the login fields are visible ', async ({ page }) => {
    console.log("Testcase 1 is starting");

    //verify if the email label field is visible
    const emailLableisvisible = await page.locator('.label').getByText('Email ID / Username').isVisible()
    console.log("Email ID label is visible: " + emailLableisvisible);

    //verify if the email input field is visible
    const emailInputboxisVisible = await page.locator('[placeholder="Enter your active Email ID / Username"]').isVisible()
    console.log("Email ID input field is visible: " + emailInputboxisVisible);

    //verify if the password label field is visible
    const passwordLableisvisible = await page.locator('.label').getByText('Password').isVisible()
    console.log("Password label is visible: " + passwordLableisvisible);

    //verify if the password  input field is visible
    const passwordInputboxisVisible = await page.locator('div input[type = "password"]').isVisible()
    console.log("Password input field is visible: " + passwordInputboxisVisible);

    //verify if the submit button is visible
    const loginButton = page.locator('button[type = "submit"]')
    const loginButtonisvisible = await loginButton.isVisible()
    console.log("Login button is visible: " + loginButtonisvisible);

    //functionality check
    //fill the email input field
    await page.locator("[type='text'][placeholder='Enter your active Email ID / Username']").fill('binushree1991@gmail.com')
    console.log('email id is filled')


    //fill the password input field
    await page.locator("[placeholder='Enter your password']").fill('Aabhjs@1991')
    console.log('password is filled')


    //click login button
    await page.locator('button[type = "submit"]').click()
    console.log('login button is clicked')
    //await page.waitForTimeout(2000);

    //View Profile is visible successful
    const viewProfileEle = page.locator('.view-profile-wrapper')
    await viewProfileEle.waitFor({ state: 'visible', timeout: 10000 })
    const viewProfileisVisible = await viewProfileEle.isVisible();
    console.log("Profile is visible " + viewProfileisVisible);

    if (viewProfileisVisible) {
      console.log('Login successful and profile is visible');
    } else {
      console.log('Login failed or profile is not visible');
    }
  })


  test('TC002 - Login Page - Fill in fields and click on the Login button', async ({ page }) => {
    console.log("Testcase 2 is starting");

    //call the login function created 
    await loginToNaukri(page)
    console.log("Login is successful");

    //View Profile is visible successful
    const viewProfileEle = page.locator('.view-profile-wrapper')
    await viewProfileEle.waitFor({ state: 'visible', timeout: 10000 }) //wait till the page loads
    // await viewProfileEle.isVisible();
    console.log("View Profile is visible");

  })

  test('TC003 - Home Page - Click Drawer Icon and click View & Update profile', async ({ page }) => {
    console.log("Testcase 3 is starting");

    //call the login function created 
    await loginToNaukri(page)
    console.log("Login is successful");

    //View Profile is visible successful
    const viewProfileEle = page.locator('.view-profile-wrapper')
    await viewProfileEle.waitFor({ state: 'visible', timeout: 10000 }) //wait till the page loads
    // await viewProfileEle.isVisible();
    console.log("View Profile is visible - TC3");

    //click on the update profile.
    const drawericon = page.locator('.nI-gNb-drawer__icon')
    await drawericon.waitFor({ state: 'visible', timeout: 10000 })
    await drawericon.click()

    console.log("DrawerIcon is visible");

    const viewUpdateProfileLocator = page.getByText("View & Update Profile");
    await viewUpdateProfileLocator.waitFor({ state: 'visible', timeout: 15000 })
    await viewUpdateProfileLocator.click()
    console.log("View & Update Profile page is visible");

    const viewQuickLinks = page.getByText('Quick links')
    await viewQuickLinks.waitFor({ state: 'visible', timeout: 10000 })
    console.log("Quick Link is visible");
    const editResumeheadline = page.locator('div[class="widgetHead"] span[class="edit icon"]')
    await editResumeheadline.waitFor({ state: 'visible', timeout: 10000 })
    await editResumeheadline.click()
    console.log("Clicked on the edit button");
    const headline = page.locator('[name="resumeHeadlineForm"]')
    await headline.waitFor({ state: 'visible', timeout: 5000 })
    console.log("Resume Headline window is displayed");

    const textarea = page.locator('#resumeHeadlineTxt')
    await textarea.click()
    console.log("Resume Headline textarea is now in the editable form");
    //var resumeHeadlineWords = 'Senior QA Analyst with 14 years of experience in Functional Testing. Have worked in web application testing, automation using Cypress/Playwright with BDD framework,manual testing, regression testing, API testing and Teamcity for cicd process.'
    //var resumeHeadlineWords1 = 'Senior QA Analyst with 14 years of experience in Functional Testing. Have worked in automation using Cypress/Playwright with BDD framework,manual testing, regression testing, API testing and Teamcity for cicd process.'
    const value = await textarea.inputValue();
    if (value === resumeHeadlineWords) {
       console.log("Words before update: " + value)
      await textarea.fill(resumeHeadlineWords1);
      const updatedValue = await textarea.inputValue();
      console.log("Words updated with: " + updatedValue)
    } else {
      console.log("Words before update: " + value)
      await textarea.fill(resumeHeadlineWords);
      const updatedValue = await textarea.inputValue();
      console.log("Words updated with: " + updatedValue)

    }
 

   //await textarea.fill(resumeHeadlineWords)
    console.log('Editing done with words')
    const saveButton = page.locator('button[class="btn-dark-ot"][type="submit"]')
    await saveButton.click()
    console.log('Resume Headline saved successfully')

       await expect(page.locator('.head').getByText('Success')).toBeVisible()

    await viewQuickLinks.waitFor({ state: 'visible', timeout: 10000 })
    console.log("Quick Link is visible");
  })


})


