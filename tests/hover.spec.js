const{test,expect}=require('@playwright/test')

test('hover actions', async ({ page }) => {
    
    await page.goto('https://demo.opencart.com/');
   const desktops = await page.locator('//a[text()="Desktops"]')
   const macbook = await page.locator('//a[text()="Mac (1)"]')

  await desktops.hover();
   await macbook.hover();

    await page.waitForTimeout(2000);
})