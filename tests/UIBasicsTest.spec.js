const{test, expect}=require('@playwright/test')

//test('first test',function(){
    test.only('first test',  async({browser,page})=>
        {

    //   const context= await browser.newContext();

    //    const page= await context.newPage();

       await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
       await page.locator('#username').fill('rahulshettyacadem');
       await page.locator('[type="password"]').fill('Learning@830$3mK2');
       await page.locator('input[type="submit"]').click();
      console.log(await page.locator('[style*= block]').textContent());
      await expect(await page.locator('[style*= block]')).toContainText('Incorrect');

    })

    test('Playwright first test',  async({page})=>
        {

    //   const context= await browser.newContext();

    //    const page= await context.newPage();

       await page.goto('https://www.google.com/');

    })


    test('second test',  async({browser})=>
        //test.only('second test',  async({browser})=>
        {

       const context= await browser.newContext();

        const page= await context.newPage();

      await page.goto('https://www.youtube.com/');
      const title=await page.title()
      console.log(title);
      await expect(title).toBe('YouTube');

    })
