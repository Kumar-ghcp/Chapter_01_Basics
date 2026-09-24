"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var test_1 = require("@playwright/test");
exports["default"] = test_1.defineConfig({
    testDir: './sauce demo project/tests',
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 1 : undefined,
    reporter: [['line'], ['allure-playwright']],
    use: {
        baseURL: 'https://sauce-demo.myshopify.com',
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        trace: 'on-first-retry'
    },
    projects: [
        {
            name: 'chromium',
            use: __assign({}, test_1.devices['Desktop Chrome'])
        },
        {
            name: 'firefox',
            use: __assign({}, test_1.devices['Desktop Firefox'])
        },
        {
            name: 'webkit',
            use: __assign({}, test_1.devices['Desktop Safari'])
        },
    ]
});
