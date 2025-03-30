import LoginPage from "../../pageobjects/mobile/webdriverio/login.page";
import HomePage from "../../pageobjects/mobile/webdriverio/home.page";
import SwipePage from "../../pageobjects/mobile/webdriverio/swipe.page";
import FormsPage from "../../pageobjects/mobile/webdriverio/form.page";
import WebViewPage from "../../pageobjects/mobile/webdriverio/webview.page";
import DragScreen from "../../pageobjects/mobile/webdriverio/drag.page";
import { driver } from "@wdio/globals";

describe("Android Mobile automation tests", () => {

    it("should check the title on home page", async () => {
        expect(await HomePage.getTitle()).toHaveText("WEBDRIVER");
    });

    it("should login into the app successfully", async () => {
        await HomePage.openLoginScreen();
        await LoginPage.login("Test@email.com", "Pass12345");
        expect(await LoginPage.successMessageTitle()).toEqual("Success");
        expect(await LoginPage.successMessage()).toEqual("You are logged in!");
        await LoginPage.closePopup();
    });

    it("should be able to perform action in Form based on element displayed", async () => {
        await HomePage.openFormsMenu();
        await FormsPage.input.setValue("Hello World");
        await FormsPage.tapOnInputTextResult();
        expect(await FormsPage.inputTextResult).toHaveText("Hello World");
        await FormsPage.tapOnSwitch();
        expect(await FormsPage.isSwitchActive()).toEqual(true);
        await FormsPage.tapOnDropDown();
        await FormsPage.selectValue("Appium is awesome");
        expect(await FormsPage.getDropDownText()).toEqual("Appium is awesome");
        await FormsPage.tapOnActiveButton();
        // await expect(await FormsScreen.messageTitle).toHaveText("This button is");
        await FormsPage.topOnButtonWithText("OK");
        expect(await FormsPage.inActiveButton).toHaveText("Inactive");
    });


    it("should be able to prefor action in Webview based on element displayed", async () => {
        await HomePage.openWebViewMenu();
        await WebViewPage.waitForWebsiteLoaded();
        await driver.switchContext({
            // Switch to the WebView context
            title: /WebdriverIO.*/,
            url: 'https://webdriver.io/',
        });

        await WebViewPage.searchForUrl("url");

        // Switch back to the Native context
        await driver.switchContext('NATIVE_APP');

    });

    it("should be able to swipe based on element displayed", async () => {
        await HomePage.openSwipeMenu();
        await SwipePage.checkifCommunityTextIsDisplayed();
        expect(await SwipePage.greatCommunityText()).toEqual("GREAT COMMUNITY");
    });

    it('should be able to solve the puzzle by dragging the pieces into the puzzle', async () => {
        // Drag each element to the position, this uses the "new" `dragAndDrop` method that now also
        // supports native apps
        await HomePage.openDragMenu();
        await DragScreen.dragL1.dragAndDrop(await DragScreen.dropL1);
        await DragScreen.dragC1.dragAndDrop(await DragScreen.dropC1);
        await DragScreen.dragR1.dragAndDrop(await DragScreen.dropR1);
        await DragScreen.dragL2.dragAndDrop(await DragScreen.dropL2);
        await DragScreen.dragC2.dragAndDrop(await DragScreen.dropC2);
        await DragScreen.dragR2.dragAndDrop(await DragScreen.dropR2);
        await DragScreen.dragL3.dragAndDrop(await DragScreen.dropL3);
        await DragScreen.dragC3.dragAndDrop(await DragScreen.dropC3);
        await DragScreen.dragR3.dragAndDrop(await DragScreen.dropR3);

        // Wait for the retry button to be visible, meaning the success screen is there
        // There is no expectation here because the waitForDisplayed will fail if the element is not visible
        await DragScreen.waitForRetryButton();

        // Retry
        await DragScreen.tapOnRetryButton();
        // Wait for the renew button to be visible, meaning the puzzle is shown again
        // There is no expectation here because the waitForDisplayed will fail if the element is not visible
        await DragScreen.waitForRenewButton();
    });
});


