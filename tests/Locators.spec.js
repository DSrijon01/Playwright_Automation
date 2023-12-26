const { test, expect } = require('@playwright/test');
const { hasUncaughtExceptionCaptureCallback } = require('process');

// Locator Concept
test.only('Locators Specification Tests 1', async function ({ browser }) {
    // Browser initialization 
    const context = await browser.newContext();
    // Page Initialization
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    console.log(await page.title())

    // CSS Xpath Locators 

    // CSS Locator (type method deprecated)
    await page.locator("#username").fill("learning");
    // attribute = 'value'
    await page.locator("[type='password']").fill("learning")
    // id + action
    await page.locator("#signInBtn").click();
    // Error Alert (playwright can handle wait until) extract the text content print it on console
    console.log(await page.locator("[style*='block']").textContent());
    // Assertion 
    await expect(page.locator("[style*='block']")).toContainText('Incorrect')
});

// Locators Concepts
test.only('Locators Specification Tests 2 carry forward', async function ({ browser }) {
    // Browser initialization 
    const context = await browser.newContext();
    // Page Initialization
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    console.log(await page.title())

    // Declaring the locator in a variable
    const userName = page.locator("#username")
    const passWord = page.locator("[type='password']")
    const signIn = page.locator("#signInBtn")
    const cardTitles = page.locator(".card-body a")
    
    

    

    // To wipe out the previously written contents
    await userName.fill("");
    // Fill it again with the correct username
    await userName.fill("rahulshettyacademy");
    // Remove the previously written password
    await passWord.fill("")
    // Push the password again
    await passWord.fill("learning")
    // Radio Buttons
    await page.locator('label.customradio:has-text("User") input[type="radio"]').click()
    // Dropdown 
    await page.locator("select.form-control").selectOption("consult")
    // Handle Webbased Pop-up
    await page.locator("#okayBtn").click()
    // Perform the Sign-in action
    await signIn.click();
    // Use pause for playwright inspection
    await page.pause()

    // Fetch the First element from the page - Using nth Method
    const check = console.log(await page.locator(".card-body a").nth(0).textContent());
    // Another Method using first second 
    const check_2 = console.log(await page.locator(".card-body a").first().textContent());
    // assert if both of them fetched the same text or not 
    await expect(check).toEqual(check_2);
    
    
    // Fetch all card titles to grab using allTextContent with synchronization
    const allTitles = await cardTitles.allTextContents();

    // Print all titles
    console.log(allTitles)




});

