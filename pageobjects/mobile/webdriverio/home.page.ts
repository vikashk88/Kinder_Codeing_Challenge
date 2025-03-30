import { $ } from '@wdio/globals';

class HomePage {

  selector!: string;
  get swipeMenu() {
    return $('~Swipe');
  }

  async getTitle(): Promise<string> {
    this.selector =
      'new UiSelector().text("WEBDRIVER").className("android.widget.TextView")';
    const title = await $(`android=${this.selector}`);
    return await title.getText();
  }

  get loginMenu() {
    return $("~Login");
  }

  get webViewMenu() {
    return $("~Webview");
  }

  get formsMenu() {
    return $("~Forms");
  }

  get dragMenu() {
    return $("~Drag");
  }


  async openLoginScreen(): Promise<void> {
    await this.loginMenu.click();
  }

  async openSwipeMenu(): Promise<void> {
    await this.swipeMenu.click();
  }

  async openWebViewMenu(): Promise<void> {
    await this.webViewMenu.click();
  }

  async openFormsMenu(): Promise<void> {
    await this.formsMenu.click();
  }

  async openDragMenu(): Promise<void> {
    await this.dragMenu.click();
  }
  async waitForTabBarShown(): Promise<boolean | void> {
    return $('~Home').waitForDisplayed({
      timeout: 20000,
    });
  }

  async waitForIsShown(isShown = true): Promise<boolean | void> {
    return $(this.selector).waitForDisplayed({
      reverse: !isShown,
    });
  }

}
export default new HomePage();
