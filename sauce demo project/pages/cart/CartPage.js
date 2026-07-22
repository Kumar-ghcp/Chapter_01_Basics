const { CartLocators } = require('./CartLocators');

class CartPage {
  constructor(page) {
    this.page = page;
    this.locators = new CartLocators(page);
  }

  async open() {
    await this.page.goto('https://sauce-demo.myshopify.com/cart', { waitUntil: 'networkidle' });
  }

  async clickCheckout() {
    await this.locators.checkoutButton.click();
    await this.page.waitForURL(/\/checkouts\//, { timeout: 30000 });
  }
}

module.exports = { CartPage };
