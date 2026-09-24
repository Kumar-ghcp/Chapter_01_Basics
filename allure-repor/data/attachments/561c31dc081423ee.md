# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: checkout\checkout.spec.js >> End-to-end purchase >> @smoke @e2e Verify customer can purchase Grey Jacket successfully
- Location: sauce demo project\tests\checkout\checkout.spec.js:11:3

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://sauce-demo.myshopify.com/cart", waiting until "networkidle"

```

# Test source

```ts
  1  | const { CartLocators } = require('./CartLocators');
  2  | 
  3  | class CartPage {
  4  |   constructor(page) {
  5  |     this.page = page;
  6  |     this.locators = new CartLocators(page);
  7  |   }
  8  | 
  9  |   async open() {
> 10 |     await this.page.goto('https://sauce-demo.myshopify.com/cart', { waitUntil: 'networkidle' });
     |                     ^ Error: page.goto: Target page, context or browser has been closed
  11 |   }
  12 | 
  13 |   async clickCheckout() {
  14 |     await this.locators.checkoutButton.click();
  15 |     await this.page.waitForURL(/\/checkouts\//, { timeout: 30000 });
  16 |   }
  17 | }
  18 | 
  19 | module.exports = { CartPage };
  20 | 
```