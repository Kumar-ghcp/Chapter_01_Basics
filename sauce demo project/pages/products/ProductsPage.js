const { ProductsLocators } = require('./ProductsLocators');

class ProductsPage {
  constructor(page) {
    this.page = page;
    this.locators = new ProductsLocators(page);
  }

  async open() {
    await this.page.goto('https://sauce-demo.myshopify.com/', { waitUntil: 'networkidle' });
  }

  async openProduct(productName) {
    await this.page.getByRole('link').filter({ hasText: productName }).first().click();
    await this.page.waitForLoadState('networkidle');
  }

  async addToCart() {
    const variantId = await this.locators.variantSelect.inputValue();
    const result = await this.page.evaluate(async (vid) => {
      const res = await fetch('/cart/add.js', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: parseInt(vid), quantity: 1 })
      });
      return res.status;
    }, variantId);
    return result;
  }
}

module.exports = { ProductsPage };
