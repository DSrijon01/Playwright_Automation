const{test, expect} = require('@playwright/test');

// Async and Await concept 
test.only('Browser Context Playwright test', async function({browser}) 
{
    
        // Browser initialization 
        const context = await browser.newContext();
        // Page Initializaiton
        const page = await context.newPage();
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
        
});


// With Out Declaration and using only to skip other declared test cases
test.only('Page Playwright test', async function({page}) 
{

    await page.goto("https://google.com")
    // Print title
    console.log(await page.title());
    // Assert Title through the use of expect (Await)
    await expect(page).toHaveTitle("Google")

});