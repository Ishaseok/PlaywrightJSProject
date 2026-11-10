const { test: base, expect } = require('@playwright/test');

exports.customtest = base.extend({
    Authenticatepage: async ({ browser }, use) => {



        await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
        await page.locator('#username').fill('rahulshettyacadem');
        await page.locator('[type="password"]').fill('Learning@830$3mK2');
        await page.locator('input[type="submit"]').click();
        console.log(await page.locator('[style*= block]').textContent());
        await expect(page.locator('[style*= block]')).toContainText('Incorrect');
        await use();
    },
});
