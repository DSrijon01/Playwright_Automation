const{test, expect} = require('@playwright/test');

// Async and Await concept 
test('Browser Context Playwright test', async function({browser}) 
{
    
        // Browser initialization 
        const context = await browser.newContext();
        // Page Initializaiton
        const page = await context.newPage();
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
        console.log(await page.title())

        // CSS Xpath Locators
        page.locator()
        
});