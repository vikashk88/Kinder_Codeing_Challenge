import { join } from 'path';
import config from '../config/wdio.shared.local.conf';


config.specs = [
    '../tests/specs/*.ts',
];


config.capabilities = [
    {
        // The defaults you need to have in your config
        platformName: 'Android',
        // maxInstances: 1,
        'appium:deviceName': 'Pixel_8_Pro',
        'appium:platformVersion': '16.0',
        'appium:orientation': 'PORTRAIT',
        'appium:automationName': 'UiAutomator2',
        // The path to the app
        'appium:app': join(process.cwd(), './apps/android.wdio.native.app.v1.0.8.apk'),
        // @ts-ignore
        'appium:appWaitActivity': 'com.wdiodemoapp.MainActivity',
        'appium:noReset': false,
        'appium:newCommandTimeout': 240,
    },
];

exports.config= config;