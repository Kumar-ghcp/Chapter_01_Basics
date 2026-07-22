const { test: base } = require('@playwright/test');
const { ProductsPage } = require('../pages/products/ProductsPage');
const { CartPage } = require('../pages/cart/CartPage');
const { CheckoutPage } = require('../pages/checkout/CheckoutPage');

const test = base.extend({
  productsPage: async ({ page }, use) => {
    await use(new ProductsPage(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  }
});

module.exports = { test };
