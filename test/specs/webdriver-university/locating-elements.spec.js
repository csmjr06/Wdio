describe('locating elements', () => {
    beforeEach(async () => {
        await browser.maximizeWindow();
    });

    it('$ - locate element', async() => {
        await browser.url("https://selectors.webdriveruniversity.com/");

        await browser.$("//a[@href='#portfolio']").click();
        await browser.pause(3000);

        const webdriverioButton = await $('[data-target="#portfolioModal1"]');
        await webdriverioButton.click();
        await browser.pause(3000);
    });

    it('$$ - locate elements', () => {
        
    });
});