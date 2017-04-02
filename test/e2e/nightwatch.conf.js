require('babel-register')
const config = require('../../config')
const phantomjs = require('phantomjs-prebuilt');
const seleniumServer = require('selenium-server');
const chromeDriver = require('chromedriver');
const geckoDriver = require('geckodriver');
const currentTime = (new Date()).toISOString().replace(/:/g, '\'').replace(/\./g, '_');

module.exports = {
    src_folders: ['test/e2e/specs'],
    output_folder: `test/e2e/reports/${currentTime}`,
    custom_assertions_path: ['test/e2e/custom-assertions'],
    page_objects_path: ['test/e2e/pages'],

    selenium: {
        start_process: true,
        // start_session: false,
        server_path: seleniumServer.path,
        host: '127.0.0.1',
        port: 4444,
        waitForConditionTimeout: 10000,
        cli_args: {
            'webdriver.chrome.driver': chromeDriver.path,
            'webdriver.gecko.driver': geckoDriver.path,
        }
    },

    test_settings: {
        default: {
            selenium_port: 4444,
            selenium_host: 'localhost',
            silent: true,
            screenshots: {
                enabled: true,
                on_failure: true,
                path: `test/e2e/reports/${currentTime}`,
            },
            globals: {
                devServerURL: `http://localhost:${(process.env.PORT || config.dev.port)}`,
            }
        },

        phantomjs: {
            desiredCapabilities: {
                'browserName': 'phantomjs',
                'phantomjs.binary.path': phantomjs.path,
                'javascriptEnabled': true,
                'acceptSslCerts': true,
                "phantomjs.cli.args": ["--ignore-ssl-errors=true"],
                "phantomjs.page.settings.userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36",
            },
        },

        chrome: {
            desiredCapabilities: {
                browserName: 'chrome',
                javascriptEnabled: true,
                acceptSslCerts: true,
                // 'chromeOptions': {
                //     'args': ['--no-sandbox'],
                // },
            },
        },

        firefox: {
            desiredCapabilities: {
                browserName: 'firefox',
                javascriptEnabled: true,
                acceptSslCerts: true,
            },
        },
    }
}
