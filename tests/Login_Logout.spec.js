const{test,expect}=require('@playwright/test')

test('Login',async({page})=>{

page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
await page.getByPlaceholder("Username").type("Admin");
await page.getByPlaceholder("Password").type("admin123");
await page.getByRole('Button',{name:"Login"}) .click();
await expect(page).toHaveURL(/dashboard/);

await page.getByAltText('profile picture').first().click();
await page.getByText('Logout').click();
await expect(page).toHaveURL(/login/);

});

test('Login unsuccessfull',async({page})=>{

page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
await page.getByPlaceholder("Username").fill("Admin");
await page.getByPlaceholder("Password").fill("admin1231");
await page.getByRole('Button',{name:"Login"}) .click();
const error=await page.getByText('Invalid credentials').textContent;
console.log("Error message is:" +error)
expect(error).toBeTruthy();
}
);