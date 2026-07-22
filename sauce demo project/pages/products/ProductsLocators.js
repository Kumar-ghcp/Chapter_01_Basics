class ProductsLocators {
  constructor(page) {
    this.page = page;
    this.addToCartButton = page.locator('#add');
    this.variantSelect = page.locator('#product-select');
    this.productTitle = page.locator('h1[itemprop="name"]');
    this.productPrice = page.locator('.product-price');
  }
}

module.exports = { ProductsLocators };
