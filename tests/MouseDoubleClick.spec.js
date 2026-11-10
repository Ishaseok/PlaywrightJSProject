const {test,expect} = require('@playwright/test')

test("mouse double click", async ({page}) => {
    
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('//button[text()="Copy Text"]').dblclick();

    const text=await page.locator('#field2')
    await expect(text).toHaveValue('Hello World!')

await page.waitForTimeout(2000);
});