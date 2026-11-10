const { expect } = require('@playwright/test');

const { customtest } = require('../utils/fixtures');

customtest('fixtures demo', async ({ page }) => {
    await page.goto('https://example.com');
    await expect(page).toHaveTitle(/Example/);
});