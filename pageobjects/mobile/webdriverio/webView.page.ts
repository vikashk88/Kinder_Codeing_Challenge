import { $, driver,expect } from '@wdio/globals';

export const DOCUMENT_READY_STATE = {
    COMPLETE: 'complete',
    INTERACTIVE: 'interactive',
    LOADING: 'loading',
};


class WebViewPage {

    async waitForWebsiteLoaded() {
        // Wait for the WebView to load
        await new Promise(resolve => setTimeout(resolve, 5000));
        // Switch to the WebView context 
        await driver.switchContext({
            title: /WebdriverIO.*/,
            url: 'https://webdriver.io/',
        });

        await driver.waitUntil(async () => {
            // Check if the WebView is loaded by checking the document ready state
            const readyState = await driver.execute(() => document.readyState);
            await new Promise(resolve => setTimeout(resolve, 1000));
            return (await driver.execute(() => document.readyState)) === DOCUMENT_READY_STATE.COMPLETE;
        }
            , {
                timeout: 10000,
                timeoutMsg: 'WebView did not load within 10 seconds'
            });

    }

    async searchForUrl(url: string) {
        // Open the search options
        await $(".DocSearch").click();
        // Search for url
        await $(".DocSearch-Input").setValue(url);
        await driver.waitUntil(async () =>
            (await $(".DocSearch-HitsFooter").getText()).includes("See all")
        );
        // Let's take the first result
        await $("#docsearch-hits0-item-0 a").click();

        // Now wait for the header to be displayed and verify that we are on the correct page
        await $("h1").waitForDisplayed({ timeout: 3000 });
        await expect(await driver.getTitle()).toEqual("url | WebdriverIO");
    }


}
export default new WebViewPage();