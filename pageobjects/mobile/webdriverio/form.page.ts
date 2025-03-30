import { $, driver } from '@wdio/globals';
// import { driver } from '@wdio/appium-service';

class FormsPage  {
    
    get input () {return $('~text-input');}
    get inputTextResult () {return $('~input-text-result');}
    get switch () {return $('~switch');}
    get switchText () {return $('~switch-text');}
    get dropDown () {return $('~Dropdown');}
    get activeButton () {return $('~button-Active');}
    get inActiveButton () {return $('~button-Inactive');}

    async tapOnInputTextResult(){
        await this.inputTextResult.click();
    }

    async tapOnSwitch(){
        await this.switch.click();
    }

    async tapOnDropDown(){
        await this.dropDown.click();
    }

    async tapOnActiveButton(){
        await this.activeButton.click();
    }

    async tapOnInActiveButton(){
        await this.inActiveButton.click();
    }

    async isSwitchActive ():Promise<boolean> {
        return driver.isAndroid ? (await this.switch.getAttribute('checked')) === 'true' : (await this.switch.getText()) === '1';
   }

   
    async getDropDownText ():Promise<string> {

          return $ ('//*[@content-desc="Dropdown"]/*/android.widget.EditText').getText();
    }


     async waitForIsShown (isShown = true) {

        await $('//android.widget.ListView').waitForExist({
            timeout: 11000,
            reverse: !isShown,
        });
    }


     async selectValue (value:string) {

        await this.waitForIsShown(true);

        await $(`${'//android.widget.ListView'}/*[@text='${value}']`).click();

        await this.waitForIsShown(false);
    }

    async messageTitle():Promise<string> {
        return  (await $('//*[@resource-id="android:id/alertTitle"]')).getText();
    }

    
    async topOnButtonWithText (buttonText:string) {
        await $(`//android.widget.Button[@text='${buttonText}']`).click();

    }

}

export default new FormsPage();