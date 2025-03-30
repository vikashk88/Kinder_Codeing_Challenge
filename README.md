
## Don't forget to give a :star: to make the project popular.

## :question: What is this Repository about?

This project is the outcome of my self-learning about the [WebDriverIO](https://webdriver.io/) Test Automation framework

## :briefcase: What does this repo contain?
- This repo contains example codes of Android Mobile Automation with TypeScript using [WebdriverIO Demo App](https://github.com/webdriverio/native-demo-app/releases) 
- Checkout [this page](https://webdriver.io/docs/typescript/) for more details related to WebDriverIO TypeScript Setup.

## Scenario covered
- On the Home page of the WebDriverIO demo app, verify the title `WEBDRIVER` is displayed correctly.
- WebView
- Login
- Forms (Test all items in the forms section, including input validation and submission)
-	Swipe
-	Drag (optional)

## Running the tests 
- [NodeJS](https://nodejs.org/en/download/) should be installed on the local machine where tests needs to be run.
- Clone this repository using the command `https://github.com/vikashk88/Kinder_Codeing_Challenge`
- Navigate to the root folder of the project and Run the command `npm install`
- To run the tests - `npm run wdio`
- To generate allure report: 
  - brew install allure
  - allure server ./allure-results
  - Checkout [allure Reporter](https://webdriver.io/docs/allure-reporter/) for more details