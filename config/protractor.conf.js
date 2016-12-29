const env = require('./environment');

exports.config = {

    directConnect: true,

    capabilities: {
        browserName: 'chrome'
    },

    framework: 'jasmine2',

    suites: {

        ui_tests: '../specs/ui/*_spec.js',
        // api_tests: '../specs/api/*_spec.js'
    },

    baseUrl: env.baseUrl,

    onPrepare: function () {
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
        browser.get(env.baseUrl);
    }

}