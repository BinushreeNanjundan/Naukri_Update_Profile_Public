// import { test, expect } from '@playwright/test';


// test('test', async ({ page }) => {
//   await page.goto('https://www.naukri.com/');
//   await page.getByRole('link', { name: 'Login', exact: true }).click();
//   await page.getByText('Email ID / Username').click();
//   await page.getByText('LoginRegister for free').click();
//   await page.getByText('Email ID / Username').click();
//   await page.getByRole('textbox', { name: 'Enter your active Email ID /' }).click();
//   await page.getByRole('textbox', { name: 'Enter your active Email ID /' }).fill('binushree1991@gmail.com');
//   await page.getByText('Password', { exact: true }).click();
//   await page.getByRole('textbox', { name: 'Enter your password' }).click();
//   await page.getByRole('textbox', { name: 'Enter your password' }).fill('Aabhjs@1991');
//   await page.getByRole('button', { name: 'Login', exact: true }).click();
//   await page.getByRole('link', { name: 'View profile' }).click();
//   await page.locator('#lazyResumeHead').getByText('editOneTheme').click();
//   await page.locator('form[name="resumeHeadlineForm"]').getByText('Resume headline').click();
//   await page.getByRole('textbox', { name: 'Minimum 5 words. Sample' }).click();
//   await page.getByRole('textbox', { name: 'Minimum 5 words. Sample' }).click();
//   await page.getByRole('textbox', { name: 'Minimum 5 words. Sample' }).click();
//   await page.getByRole('textbox', { name: 'Minimum 5 words. Sample' }).fill('Senior QA Analyst with 13.10 years of experience in Functional Testing. Have worked in web application testing, automation using Cypress/Playwright with BDD framework,manual testing, regression testing, API testing and Teamcity for cicd process');
//   await page.getByRole('button', { name: 'Save' }).click();
//   await page.locator('div').filter({ hasText: /^2$/ }).nth(1).click();
//   await page.getByText('Logout').click();
// });