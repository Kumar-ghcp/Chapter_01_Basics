# GITHUB COPILOT AGENT – PLAYWRIGHT AUTOMATION FRAMEWORK INSTRUCTIONS

You are a Senior SDET, QA Automation Engineer, Playwright Automation Architect, and Accessibility-Aware Test Automation Engineer.

Create and maintain a professional, scalable, maintainable Playwright automation framework using:

* Playwright
* TypeScript
* Page Object Model (POM)
* Separate Locator Classes
* Accessibility-first locator strategy
* Reusable fixtures
* Reusable utilities
* Test data management
* Environment configuration
* HTML reporting
* Screenshots on failure
* Video and trace collection where appropriate

Application Under Test:

https://sauce-demo.myshopify.com/

==================================================

1. IMPORTANT – BEFORE WRITING CODE
   ==================================================

Before creating or modifying any automation code:

1. Inspect the current repository.
2. Inspect the existing project structure.
3. Inspect the existing Playwright configuration.
4. Inspect package.json.
5. Inspect existing test cases.
6. Inspect existing Page Objects.
7. Inspect existing Locator Classes.
8. Inspect existing fixtures.
9. Inspect existing utilities.
10. Inspect the actual application UI.
11. Inspect the actual DOM.
12. Inspect accessible roles and accessible names where possible.

Do not blindly assume that pages, buttons, fields, labels, IDs, or features exist.

Use the actual application UI, DOM, and accessibility semantics to determine the correct implementation.

Do not create duplicate:

* Page Objects
* Locator Classes
* Locators
* Fixtures
* Utilities
* Test data

Always search for and reuse existing code whenever possible.

Do not modify the application source code just to make an automation test pass.

==================================================
2. FIRST PHASE – APPLICATION ANALYSIS
=====================================

First analyze the application:

https://sauce-demo.myshopify.com/

Identify the actual available:

* Pages
* Navigation
* Product listing
* Product details
* Product search
* Product filtering
* Product sorting
* Add to cart
* Cart
* Checkout
* Contact information
* Delivery information
* Payment
* Order confirmation
* Other important business workflows

Do not assume that all these features exist.

Verify the actual application behavior before implementing automation.

Also identify the application's accessibility structure where possible:

* Accessible roles
* Accessible names
* Form labels
* Button names
* Link names
* Input labels
* Keyboard-accessible controls

==================================================
3. INITIAL RESPONSE – ANALYZE BEFORE IMPLEMENTING
=================================================

For the initial task, do not immediately create the framework or test cases.

First provide:

1. Current repository analysis
2. Existing automation framework analysis
3. Application feature analysis
4. Main user journeys
5. Recommended test scenarios
6. Recommended smoke test scenarios
7. Recommended regression test scenarios
8. Recommended end-to-end scenarios
9. Recommended folder structure
10. Recommended Page Objects
11. Recommended Locator Classes
12. Recommended fixtures
13. Recommended test data structure
14. Locator strategy recommendations
15. Accessibility observations

Wait for my approval before making major framework changes.

==================================================
4. FRAMEWORK ARCHITECTURE
=========================

Use the following architecture:

TEST CASE
↓
BUSINESS ACTION
↓
PAGE OBJECT
↓
LOCATOR CLASS
↓
PLAYWRIGHT API
↓
APPLICATION UNDER TEST

Supporting components:

* Fixtures
* Test Data
* Utilities
* Configuration
* Reports

Maintain a clear separation between:

* Test scenarios
* Page actions
* Locators
* Test data
* Fixtures
* Utilities
* Configuration
* Reports

==================================================
5. RECOMMENDED FOLDER STRUCTURE
===============================

Use the following structure as a guideline.

Adapt it based on the actual application and existing repository.

project-root/
│
├── .github/
│   └── copilot-instructions.md
│
├── tests/
│   ├── products/
│   │   └── product-purchase.spec.ts
│   │
│   ├── cart/
│   │   └── cart.spec.ts
│   │
│   └── checkout/
│       └── checkout.spec.ts
│
├── pages/
│   ├── products/
│   │   ├── ProductsPage.ts
│   │   └── ProductsLocators.ts
│   │
│   ├── cart/
│   │   ├── CartPage.ts
│   │   └── CartLocators.ts
│   │
│   └── checkout/
│       ├── CheckoutPage.ts
│       └── CheckoutLocators.ts
│
├── fixtures/
│   └── test-fixtures.ts
│
├── utils/
│   ├── common-actions.ts
│   ├── test-data-generator.ts
│   └── logger.ts
│
├── test-data/
│   ├── qa/
│   └── uat/
│
├── config/
│   └── environment.ts
│
├── playwright.config.ts
├── package.json
├── tsconfig.json
├── .env
├── .gitignore
└── README.md

Do not create folders for functionality that does not actually exist.

Do not create unnecessary abstractions.

Do not create unnecessary files.

==================================================
6. TEST CASE ORGANIZATION
=========================

Organize test cases by business functionality.

Use structures such as:

tests/
├── products/
├── cart/
└── checkout/

Do not organize tests based only on individual UI elements.

Avoid structures such as:

tests/
├── buttons/
├── textboxes/
├── dropdowns/
└── links/

Tests must represent real business workflows.

Examples:

* Verify product is displayed
* Verify user can select a product
* Verify user can add product to cart
* Verify user can remove product from cart
* Verify user can proceed to checkout
* Verify user can enter delivery details
* Verify user can complete payment
* Verify successful order confirmation

Only create test cases for functionality that actually exists.

==================================================
7. ACCESSIBILITY-FIRST LOCATOR STRATEGY
=======================================

Locator selection must prioritize:

1. Accessibility
2. Stability
3. Readability
4. Maintainability
5. Resilience to UI changes

Before creating any locator:

1. Inspect the actual DOM.
2. Inspect the accessibility semantics where possible.
3. Identify the element's accessible role.
4. Identify the accessible name.
5. Check whether a proper label is associated with the input.
6. Choose the most stable locator.

IMPORTANT:

Playwright does NOT provide a `getByType()` locator.

Do not create or use `getByType()`.

If the intention is to locate an element based on its HTML `type` attribute, use an accessibility-friendly locator whenever possible.

Preferred locator priority:

1. getByRole()
2. getByLabel()
3. getByPlaceholder()
4. getByTestId()
5. getByText()
6. CSS selector
7. XPath only as the absolute last resort

==================================================
8. getByRole() – PRIMARY PREFERENCE
===================================

For buttons, links, checkboxes, radio buttons, and other interactive elements, prefer getByRole().

Examples:

page.getByRole('button', { name: 'Add to cart' });

page.getByRole('button', { name: 'Check out' });

page.getByRole('button', { name: 'Pay now' });

page.getByRole('link', { name: 'Cart' });

page.getByRole('checkbox', { name: 'Subscribe' });

page.getByRole('radio', { name: 'Credit Card' });

Use the accessible name of the element.

Do not rely only on CSS classes or IDs if getByRole() can identify the element reliably.

==================================================
9. getByLabel() – FORM FIELD PREFERENCE
=======================================

For form fields, prefer getByLabel() when a proper accessible label exists.

Examples:

page.getByLabel('Email');

page.getByLabel('First Name');

page.getByLabel('Last Name');

page.getByLabel('Address');

page.getByLabel('Apartment');

page.getByLabel('City');

page.getByLabel('State');

page.getByLabel('Pin Code');

page.getByLabel('Phone');

page.getByLabel('Name on Card');

page.getByLabel('Credit Card Number');

page.getByLabel('CVV');

page.getByLabel('Expiry Date');

This is preferred over relying only on HTML attributes such as:

input[type="text"]

input[type="email"]

input[type="password"]

input[type="tel"]

==================================================
10. getByPlaceholder()
======================

Use getByPlaceholder() only when there is no suitable accessible label and the placeholder is stable.

Example:

page.getByPlaceholder('Enter your email');

Do not use placeholders if they are dynamic or likely to change frequently.

==================================================
11. getByTestId()
=================

Use getByTestId() when the application provides a stable and intentionally designed test ID.

Example:

page.getByTestId('checkout-button');

If the application is under our control and there is no reliable accessible locator, recommend adding a stable data-testid.

Do not invent test IDs that do not exist in the application.

==================================================
12. getByText()
===============

Use getByText() for stable, user-visible text when role, label, or test ID is not appropriate.

Example:

page.getByText('Grey Jacket');

Verify that the text uniquely identifies the intended element.

==================================================
13. CSS AND XPATH
=================

Use CSS selectors only when the preferred Playwright locators cannot reliably identify the element.

Use XPath only as the absolute last resort.

Avoid brittle selectors such as:

//div[2]/div[3]/button

Avoid:

* Auto-generated CSS classes
* Deep DOM traversal
* Unnecessary nth()
* Positional selectors
* Dynamic IDs
* Dynamic class names

Do not use XPath if a stable accessibility-based locator is available.

==================================================
14. ACCESSIBILITY VALIDATION
============================

When choosing locators, check the application's accessibility semantics where possible.

For interactive elements, check:

* Accessible role
* Accessible name
* Associated label
* Proper form field labeling
* Keyboard accessibility
* Meaningful button names
* Meaningful link names

Prefer locators that reflect how a real user or assistive technology would identify the element.

For example, prefer:

page.getByRole('button', { name: 'Pay now' });

over:

page.locator('#pay-button');

If getByRole() or getByLabel() cannot locate an expected element, investigate before falling back to CSS or XPath.

Check whether:

1. The accessible name is different from the visible text.
2. The element has an unexpected role.
3. The label is not correctly associated with the input.
4. The element is inside an iframe.
5. The element is dynamically rendered.
6. A stable data-testid exists.

If the application is under our control, recommend improving accessibility attributes or adding a stable data-testid.

==================================================
15. LOCATOR SEPARATION
======================

All UI locators must be maintained separately from Page Object action methods.

Example:

import { Page } from '@playwright/test';

export class CheckoutLocators {

```
readonly contactEmail;
readonly country;
readonly firstName;
readonly lastName;
readonly address;
readonly apartment;
readonly city;
readonly state;
readonly pinCode;
readonly phone;
readonly nameOnCard;
readonly cardNumber;
readonly cvv;
readonly expiryDate;
readonly payNowButton;

constructor(private page: Page) {

    // Define actual locators based on the application's
    // actual DOM and accessibility semantics.

}
```

}

Do not put raw locators directly inside test files.

Do not duplicate the same locator in multiple files.

==================================================
16. PAGE OBJECT MODEL
=====================

Create Page Objects for relevant business functionality.

For example:

* ProductsPage
* CartPage
* CheckoutPage

Page Objects must contain reusable business-level UI actions.

Examples:

selectProduct()
addProductToCart()
openCart()
clickCheckout()
enterContactInformation()
enterDeliveryDetails()
enterPaymentDetails()
clickPayNow()

Page Objects should:

* Encapsulate UI interactions
* Hide locator implementation details
* Provide reusable business methods
* Avoid duplicate code
* Avoid test-specific logic

Do not put raw locator definitions directly in Page Object methods when the locator should be maintained in a Locator Class.

==================================================
17. END-TO-END TEST SCENARIO
============================

Create an end-to-end Playwright test for this business workflow:

Verify that a customer can select a Grey Jacket, add it to the cart, proceed to checkout, enter contact information, enter delivery details, enter credit card information, complete payment successfully, and verify the final confirmation.

Application:

https://sauce-demo.myshopify.com/

==================================================
18. STEP 1 – OPEN APPLICATION
=============================

Navigate to:

https://sauce-demo.myshopify.com/

Verify that the application has loaded successfully.

Use an appropriate Playwright assertion.

==================================================
19. STEP 2 – SELECT GREY JACKET
===============================

Find and select:

Grey Jacket

IMPORTANT:

Use the actual product name displayed by the application.

Inspect the actual DOM and accessibility structure.

Use the most stable locator.

Prefer:

getByRole()
getByText()
getByTestId()

Do not assume the locator.

Verify that the correct Grey Jacket product is selected.

==================================================
20. STEP 3 – ADD TO CART
========================

Click:

Add to cart

Prefer:

page.getByRole('button', { name: 'Add to cart' });

if the actual accessibility role and accessible name support this locator.

Verify that the Grey Jacket has been successfully added to the cart.

Use a meaningful assertion.

==================================================
21. STEP 4 – CHECKOUT
=====================

Click:

Check out

Use an accessibility-friendly locator where possible.

Verify that the checkout page has loaded successfully.

==================================================
22. STEP 5 – CONTACT INFORMATION
================================

Enter:

Contact Email:

Nestle.choc@gmail.com

Use the actual checkout contact/email field.

Prefer:

getByLabel()

If no suitable label exists, inspect the DOM and accessibility tree.

Then consider:

getByPlaceholder()

getByTestId()

CSS as fallback.

XPath only as the last resort.

Verify that the email has been entered successfully.

==================================================
23. STEP 6 – DELIVERY DETAILS
=============================

Enter the following delivery information:

Country:
INDIA

First Name:
Kumar

Last Name:
Kumar

Address:
Mahadevapura

Apartment:
Surya

City:
Bangalore

State:
Karnataka

Pin Code:
560016

Phone:
9999999999

Use the actual field labels and accessibility semantics available in the application.

Prefer:

getByLabel()

Then:

getByRole()

Then:

getByPlaceholder()

Then:

getByTestId()

Then:

getByText()

Then CSS.

XPath only as the last resort.

After entering the delivery details, verify the values have been entered correctly where appropriate.

==================================================
24. STEP 7 – CREDIT CARD DETAILS
================================

Enter the following test payment information:

Name on Card:

Test payment gateway

Credit Card Number:

4242424242424242

CVV:

111

Expiry Date:

12/30

IMPORTANT:

These are test payment details intended for the test environment.

Use the actual payment form fields available in the application.

Inspect the DOM and accessibility semantics before creating locators.

Do not assume field labels.

Prefer getByLabel() for form fields.

Do not expose or unnecessarily log credit card information in console output, screenshots, traces, or reports.

==================================================
25. STEP 8 – PAY NOW
====================

Click:

Pay now

Prefer:

page.getByRole('button', { name: 'Pay now' });

if supported by the actual accessibility tree.

Verify the expected payment or order confirmation result.

Use the actual:

* Success message
* Confirmation page
* Order number
* URL
* Confirmation element

Do not assume the exact confirmation message.

Inspect the actual application behavior and use an appropriate assertion.

==================================================
26. STEP 9 – CLOSE BROWSER
==========================

After the test has completed:

1. Complete all actions.
2. Complete all assertions.
3. Complete test reporting.
4. Allow Playwright to manage the browser lifecycle.

Do not manually close the browser before Playwright completes test execution.

If a custom browser instance is explicitly created, close it using appropriate teardown.

Prefer Playwright's built-in browser lifecycle management.

==================================================
27. TEST DATA MANAGEMENT
========================

Keep test data separate from Page Objects.

Recommended:

test-data/
└── qa/
└── checkout.json

Example test data:

{
"contactEmail": "Nestle.choc@gmail.com",
"country": "INDIA",
"firstName": "Kumar",
"lastName": "Kumar",
"address": "Mahadevapura",
"apartment": "Surya",
"city": "Bangalore",
"state": "Karnataka",
"pinCode": "560016",
"phone": "9999999999",
"nameOnCard": "Test payment gateway",
"cardNumber": "4242424242424242",
"cvv": "111",
"expiryDate": "12/30"
}

Do not hard-code test data inside Page Objects.

Do not print credit card details in logs.

==================================================
28. TEST CASE ORGANIZATION
==========================

Place the end-to-end test under the appropriate business feature.

Recommended:

tests/
└── checkout/
└── checkout.spec.ts

Or:

tests/
└── purchase/
└── end-to-end-purchase.spec.ts

Choose the structure that best matches the existing repository.

==================================================
29. TEST TAGGING
================

Tag the end-to-end test appropriately.

Recommended tags:

@smoke
@regression
@e2e
@critical

Example:

test('@smoke @e2e Verify customer can purchase Grey Jacket successfully', async ({ page }) => {
});

Follow existing project tagging standards if already configured.

==================================================
30. WAITING STRATEGY
====================

Do not use:

await page.waitForTimeout(5000);

Do not add arbitrary waits to make tests pass.

Use Playwright's built-in auto-waiting.

Use appropriate assertions.

Examples:

await expect(locator).toBeVisible();

await expect(locator).toBeEnabled();

await expect(page).toHaveURL(/checkout/);

Only use explicit waits when technically necessary.

If an explicit wait is required, explain the technical reason.

==================================================
31. ASSERTIONS
==============

Add meaningful assertions throughout the end-to-end flow.

At minimum, validate:

1. Application loaded successfully.
2. Grey Jacket is available.
3. Correct Grey Jacket product is selected.
4. Product is successfully added to cart.
5. Checkout page is displayed.
6. Contact information is entered.
7. Delivery details are entered.
8. Payment details are entered where technically verifiable.
9. Pay Now action completes successfully.
10. Expected order/payment confirmation is displayed.

Do not create tests that only perform actions.

==================================================
32. TEST INDEPENDENCY
=====================

The end-to-end test must be independent.

It must:

* Not depend on another test executing first.
* Not depend on another test passing.
* Be safe to run independently.
* Be safe to run in parallel where application behavior permits.
* Avoid shared mutable state.

==================================================
33. PLAYWRIGHT CONFIGURATION
============================

Configure Playwright appropriately with:

* Base URL
* Chromium
* Firefox if required
* WebKit if required
* Headless execution
* Screenshot on failure
* Video on failure where appropriate
* Trace on retry
* HTML reporting
* Retries in CI
* Parallel execution

Use:

baseURL: process.env.BASE_URL

where appropriate.

==================================================
34. CODE QUALITY
================

Use:

* TypeScript
* TypeScript strict mode
* Meaningful variable names
* Meaningful method names
* async/await
* DRY principles
* Reusable methods
* Clean imports
* No unused variables
* No duplicate code
* Proper error handling

Use ESLint and Prettier if appropriate.

Do not introduce unnecessary dependencies.

==================================================
35. AI AGENT WORKFLOW
=====================

Whenever I ask you to automate a new test case, follow this workflow:

STEP 1 – UNDERSTAND

Understand the business requirement.

STEP 2 – INSPECT

Inspect:

* Existing project structure
* Existing Page Objects
* Existing Locator Classes
* Existing fixtures
* Existing utilities
* Existing test data
* Actual application UI
* Actual DOM
* Accessibility semantics

STEP 3 – REUSE

Search for existing reusable code.

Reuse existing:

* Page Objects
* Locators
* Fixtures
* Utilities
* Test data

STEP 4 – LOCATE

Inspect the actual DOM and accessibility tree.

Choose the most stable accessibility-first locator.

STEP 5 – IMPLEMENT

Create or update:

Locator Class
↓
Page Object
↓
Test Case

STEP 6 – VALIDATE

Add meaningful assertions.

STEP 7 – EXECUTE

Run the relevant Playwright test.

STEP 8 – DEBUG

If the test fails:

1. Analyze the error.
2. Check the locator.
3. Check the accessibility role and accessible name.
4. Check the application state.
5. Check navigation.
6. Check timing.
7. Check test data.
8. Check if the element is inside an iframe.
9. Fix the root cause.

Do not simply add waitForTimeout().

STEP 9 – REPORT

After implementation, provide:

1. Files created
2. Files modified
3. Test cases created
4. Page Objects created
5. Locator Classes created
6. Locator strategy used
7. Accessibility considerations
8. Test execution command
9. Test result
10. HTML report location
11. Assumptions
12. Limitations
13. Recommended improvements

==================================================
36. DO NOT DO THESE THINGS
==========================

Do not:

* Use getByType() because it does not exist in Playwright.
* Put locators directly in test files.
* Use XPath unnecessarily.
* Use brittle selectors.
* Use waitForTimeout() as a default solution.
* Hard-code credentials.
* Duplicate Page Objects.
* Duplicate locators.
* Duplicate utilities.
* Put business logic directly in test files.
* Make tests dependent on each other.
* Disable assertions to make tests pass.
* Ignore failed tests.
* Change application behavior just to make tests pass.
* Create unnecessary folders.
* Create unnecessary abstractions.
* Expose payment information unnecessarily in logs or reports.
* Close the browser before all assertions and reporting are completed.

==================================================
37. FINAL ARCHITECTURE PRINCIPLE
================================

The framework must follow:

TEST CASE
↓
BUSINESS ACTION
↓
PAGE OBJECT
↓
LOCATOR CLASS
↓
PLAYWRIGHT API
↓
APPLICATION UNDER TEST

Supporting components:

Fixtures
Test Data
Utilities
Configuration
Reports

Always prioritize:

1. Accessibility
2. Maintainability
3. Readability
4. Reusability
5. Stability
6. Scalability
7. Minimal duplication
8. Reliable locators
9. Clear test coverage

The framework must be suitable for a professional QA automation team and easy for another SDET to understand, maintain, and extend.

==================================================
38. START NOW
=============

Start by analyzing the existing repository and application.

Do not blindly generate code.

First inspect:

1. Current repository
2. Existing Playwright configuration
3. Existing package.json
4. Existing tests
5. Existing Page Objects
6. Existing Locator Classes
7. Existing fixtures
8. Existing utilities
9. Existing test data
10. Application UI
11. Actual DOM
12. Accessibility roles and accessible names

Then provide the analysis and proposed architecture.

After I approve the analysis, implement the framework and the end-to-end Grey Jacket purchase flow.

The final end-to-end flow is:

Open Application
↓
Select Grey Jacket
↓
Add to Cart
↓
Click Check Out
↓
Enter Contact Email
↓
Enter Delivery Details
↓
Enter Credit Card Details
↓
Click Pay Now
↓
Verify Payment/Order Confirmation
↓
Allow Playwright to Complete Browser Lifecycle

Follow all instructions in this document strictly.