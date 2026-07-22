const { test } = require('../../fixtures/test-fixtures');
const { expect } = require('@playwright/test');
const { checkoutData } = require('../../test-data/checkout-data');
const { ProductsPage } = require('../../pages/products/ProductsPage');
const { CartPage } = require('../../pages/cart/CartPage');
const { CheckoutPage } = require('../../pages/checkout/CheckoutPage');
const path = require('path');
const fs = require('fs');

test.describe('End-to-end purchase', () => {
  test('@smoke @e2e Verify customer can purchase Grey Jacket successfully', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    const screenshotDir = path.resolve(__dirname, '../../allure-results/screenshots');
    if (!fs.existsSync(screenshotDir)) fs.mkdirSync(screenshotDir, { recursive: true });

    async function takeScreenshot(name) {
      const filePath = path.join(screenshotDir, `${name}.png`);
      await page.screenshot({ path: filePath, fullPage: true });
      await test.info().attach(name, { path: filePath, contentType: 'image/png' });
    }

    // Step 1: Open application
    await productsPage.open();
    await expect(page).toHaveTitle(/Sauce Demo/);
    await takeScreenshot('01-homepage');

    // Step 2: Select Grey Jacket
    await productsPage.openProduct('Grey jacket');
    await expect(productsPage.locators.productTitle).toHaveText('Grey jacket');
    await takeScreenshot('02-product-page');

    // Step 3: Add to cart
    const status = await productsPage.addToCart();
    expect(status).toBe(200);

    // Step 4: Go to cart and proceed to checkout
    await cartPage.open();
    await expect(page.locator('body')).not.toContainText('Your cart is empty');
    await takeScreenshot('03-cart-page');
    await cartPage.clickCheckout();
    await expect(page).toHaveURL(/\/checkouts\//);
    await takeScreenshot('04-checkout-page');

    // Step 5: Fill contact email
    await checkoutPage.fillContactEmail(checkoutData.contactEmail);

    // Step 6: Fill delivery details
    await checkoutPage.selectCountry(checkoutData.country);
    await checkoutPage.selectState(checkoutData.state);
    await checkoutPage.fillFirstName(checkoutData.firstName);
    await checkoutPage.fillLastName(checkoutData.lastName);
    await checkoutPage.fillAddress(checkoutData.address);
    await checkoutPage.fillApartment(checkoutData.apartment);
    await checkoutPage.fillCity(checkoutData.city);
    await checkoutPage.fillPostcode(checkoutData.postcode);
    await checkoutPage.fillPhone(checkoutData.phone);
    await takeScreenshot('05-shipping-details-filled');

    // Step 7: Click Pay Now to proceed to payment step
    await checkoutPage.clickPayNow();
    await takeScreenshot('06-payment-section');

    // Step 8: Fill payment details inside iframes
    await checkoutPage.fillPaymentFields({
      nameOnCard: checkoutData.nameOnCard,
      cardNumber: checkoutData.cardNumber,
      cvv: checkoutData.cvv,
      expiryDate: checkoutData.expiryDate
    });
    await takeScreenshot('07-payment-filled');

    // Step 9: Click Pay Now again to submit payment
    await checkoutPage.clickPayNow();
    await takeScreenshot('08-after-payment');

    // Step 10: Verify confirmation
    const confirmed = await checkoutPage.isOrderConfirmationVisible();
    expect(confirmed).toBe(true);
    await takeScreenshot('09-order-confirmation');
  });
});
