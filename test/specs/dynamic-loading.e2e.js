describe('Dynamic Loading Page', () => {
    it('wait for the hidden element to show', () => {
        const btnStart = $("#start button");
        const textFinish = $("#finish h4");

        browser.url('/dynamic_loading/1');

        browser.pause(5000);

        btnStart.click();

        browser.pause(5000);

        expect(textFinish.getText()).toEqual("Hello World!");

    });
});