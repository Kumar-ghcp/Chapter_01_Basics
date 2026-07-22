class CheckoutLocators {
  constructor(page) {
    this.page = page;
    this.emailInput = page.getByRole('textbox', { name: 'Email' });
    this.countrySelect = page.locator('select[name="countryCode"]');
    this.firstNameInput = page.locator('input[name="firstName"]').first();
    this.lastNameInput = page.locator('input[name="lastName"]').first();
    this.addressInput = page.locator('#shipping-address1');
    this.apartmentInput = page.locator('input[name="address2"]').first();
    this.cityInput = page.locator('input[name="city"]').first();
    this.stateSelect = page.locator('select[name="zone"]');
    this.postcodeInput = page.locator('input[name="postalCode"]').first();
    this.phoneInput = page.locator('input[name="phone"]').first();
    this.payNowButton = page.locator('#checkout-pay-button');
    this.billingCheckbox = page.locator('#billingAddressCheckbox');

    // Payment iframe locators
    this.cardNumberFrame = page.frameLocator('iframe[id^="card-fields-number"]');
    this.expiryFrame = page.frameLocator('iframe[id^="card-fields-expiry"]');
    this.cvvFrame = page.frameLocator('iframe[id^="card-fields-verification_value"]');
    this.nameOnCardFrame = page.frameLocator('iframe[id^="card-fields-name"]');
  }
}

module.exports = { CheckoutLocators };
