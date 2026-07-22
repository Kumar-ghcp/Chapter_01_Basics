"use strict";

var _test = require("@playwright/test");

_test.test.describe('Login Test', function () {
  (0, _test.test)('@Login Test', function _callee(_ref) {
    var page;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            page = _ref.page;
            _context.next = 3;
            return regeneratorRuntime.awrap(page["goto"]('https://www.saucedemo.com/'));

          case 3:
            (0, _test.expect)(page.url()).toBe('https://www.saucedemo.com/');

          case 4:
          case "end":
            return _context.stop();
        }
      }
    });
  });
});