

const{test,expect} =require('@playwright/test');

test('multiple elements',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
     const listofElements=await page.locator("//select[@id='animals']//option")
     const count =await listofElements.count();
     console.log(count);
    for(let i=0;i<=count;i++){

        const text=await listofElements.nth(i).textContent();
        console.log(text);
    }
})

