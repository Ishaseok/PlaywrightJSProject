const{test,expect}=require('@playwright/test')

test('handling_dropdowns',async({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/');
// await page.locator('#country').selectOption({label: 'India'}); //label visible text
// await page.locator('#country').selectOption('India'); //visible text
// await page.locator('#country').selectOption({value: 'India'}); //value
// await page.locator('#country').selectOption({index: 3}); //index
// await page.locator('#country','India'); //by text


await page.waitForTimeout(2000);
//Approach 1:Check check of options in dropdown
// const dropdownOptions = await page.locator(' #country option').allTextContents();
// await expect(dropdownOptions).toHaveCount(10); // Adjust the count as needed
// console.log('Dropdown options are:', dropdownOptions);
// dropdownOptions.sort();
// console.log('Sorted dropdown options are:', dropdownOptions);


//Approach 1:Check number of options in dropdown
const options =await page.$$('#country option');
//console.log(await options.allTextContents());
console.log('Number of options in dropdown are:',  options.length);
await expect(options.length).toBe(10);
})