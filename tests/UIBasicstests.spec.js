const{test, chromium} = require('@playwright/test');

// Async and Await concept 
test('Browser Context Playwright test', async function({browser}) 
{
    
        // Browser initialization 
        const context = await browser.newContext();
        // Page Initializaiton
        const page = await context.newPage();
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
        
});


// With Out Declaration
test('Page Playwright test', async function({page}) 
{

    await page.goto("https://google.com")
     
});