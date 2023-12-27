const { test, expect } = require('@playwright/test');
const { hasUncaughtExceptionCaptureCallback } = require('process');

// Child Window Handling
test.only('ChildWindow Handling', async function ({ browser }) {

    // Browser initialization 
    const context = await browser.newContext();
    // Page Initialization
    const page = await context.newPage();
    // Land on the selected page
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    // Declare the objets on the page 
    const userName = page.locator("#username")
    const documentLink = page.locator("[href*='documents-request']");

    // using Promise all for async handling (3 stages of promise pending,rejected,fullfilled)
    const [newPage]= await Promise.all(
    [
        // Listen for new page before clicking to the hyperlink that redirects to a new window (async sync issue)
        context.waitForEvent('page'),
        // Click on the hyperlink to open a new page 
        documentLink.click(),              
    ]
    )
    
    // Further Operation on new page
    const text = await newPage.locator(".red").textContent()
    console.log(text)
    // Split String 
    const arrayText = text.split("@")
    const domain = arrayText[1].split(" ")[0]
    console.log(domain)

    // DO operation on the parent page
    await userName.fill(domain)
    await page.pause()

   
});