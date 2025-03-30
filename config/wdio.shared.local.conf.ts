import { config } from '../config/wdio.shared.conf';


config.services = (config.services ? config.services : []).concat([
    [
        'appium',
        {
            command: 'appium',
            args: {
                // Appium server arguments
                // --session-override: Allow to override existing sessions
                // --allow-insecure: Allow insecure server connections when using SSL
                relaxedSecurity: true,
            },
        },

    ],
]);
config.port = 4723;

export default config;