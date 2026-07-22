class CartLocators {
  constructor(page) {
    this.page = page;
    this.checkoutButton = page.locator('#checkout');
    this.cartEmptyMessage = page.locator('text=Your cart is empty');
    this.cartTitle = page.locator('h1:has-text("Cart")');
  }
}

module.exports = { CartLocators };
