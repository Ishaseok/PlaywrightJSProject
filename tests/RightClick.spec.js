const{test,expect}=require('@playwright/test')

test('right click', async({page})=>{


    await page.goto('https://vinothqaacademy.com/mouse-event/');
    await page.locator('#rightBtn').click({ button: 'right' });

    await page.waitForTimeout(2000);
})