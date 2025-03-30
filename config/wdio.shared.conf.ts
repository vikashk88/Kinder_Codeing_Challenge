
export const config: WebdriverIO.Config = {
    
    runner: 'local',
    
    specs:[],
    
    capabilities: [],
    
    logLevel: 'debug',
    
    bail: 0,
    
    baseUrl: 'http://the-internet.herokuapp.com',
   
    waitforTimeout: 45000,
    
    connectionRetryTimeout: 120000,
    // Default request retries count
    connectionRetryCount: 3,
   
    services: [],
    // Framework you want to run your specs with. The following
    framework: 'mocha',
    // The number of times to retry the entire spec file when it fails.
    reporters: ['spec',['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: false,
        disableWebdriverScreenshotsReporting: false,
    }]],
 
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }    //
    
};