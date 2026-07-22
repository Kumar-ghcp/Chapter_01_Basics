class CheckoutPage {
  constructor(page) {
    this.page = page;
  }

  async fillContactEmail(email) {
    await this.page.getByRole('textbox', { name: 'Email' }).fill(email);
  }

  async selectCountry(country) {
    await this.page.locator('select[name="countryCode"]').selectOption({ label: country });
  }

  async selectState(state) {
    await this.page.locator('select[name="zone"]').waitFor({ state: 'visible', timeout: 5000 });
    await this.page.locator('select[name="zone"]').selectOption({ label: state });
  }

  async fillFirstName(firstName) {
    await this.page.locator('input[name="firstName"]').first().fill(firstName);
  }

  async fillLastName(lastName) {
    await this.page.locator('input[name="lastName"]').first().fill(lastName);
  }

  async fillAddress(address) {
    await this.page.locator('#shipping-address1').fill(address);
  }

  async fillApartment(apartment) {
    await this.page.locator('input[name="address2"]').first().fill(apartment);
  }

  async fillCity(city) {
    await this.page.locator('input[name="city"]').first().fill(city);
  }

  async fillPostcode(postcode) {
    await this.page.locator('input[name="postalCode"]').first().fill(postcode);
  }

  async fillPhone(phone) {
    await this.page.locator('input[name="phone"]').first().fill(phone);
  }

  async clickPayNow() {
    await this.page.locator('#checkout-pay-button').click();
    await this.page.waitForTimeout(5000);
  }

  async fillPaymentFields({ nameOnCard, cardNumber, cvv, expiryDate }) {
    // Card number iframe
    const numberFrame = this.page.frameLocator('iframe[id^="card-fields-number"]');
    await numberFrame.locator('#number').fill(cardNumber);

    // Expiry iframe
    const expiryFrame = this.page.frameLocator('iframe[id^="card-fields-expiry"]');
    await expiryFrame.locator('#expiry').fill(expiryDate);

    // CVV iframe
    const cvvFrame = this.page.frameLocator('iframe[id^="card-fields-verification_value"]');
    await cvvFrame.locator('#verification_value').fill(cvv);

    // Name on card iframe
    const nameFrame = this.page.frameLocator('iframe[id^="card-fields-name"]');
    await nameFrame.locator('#name').fill(nameOnCard);
  }

  async isOrderConfirmationVisible() {
    const pageText = await this.page.locator('body').textContent();
    return pageText.includes('confirmed') ||
           pageText.includes('Thank you') ||
           pageText.includes('Order') ||
           pageText.includes('success');
  }
}

module.exports = { CheckoutPage };
