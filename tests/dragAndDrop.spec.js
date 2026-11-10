const{test,expect}=require('@playwright/test')

test('drag drop action' , async({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/')
const drag=await page.locator("//div[@id='draggable']")
const drop=await page.locator("//div[@id='droppable']")

//Approach 1
await drag.hover();
await page.mouse.down();
await drop.hover();
await page.mouse.up();

await page.waitForTimeout(5000);

//Approach 2
await drag.dragTo(drop);
})