const getRandomDelay = () => Math.floor(Math.random() * 3000) + 1000;

describe.only('Shopee Tests', () => {
  before(() => {
    cy.visit('/');

    // Languages setting modal
    // Check if the modal appears
    cy.get('body').then(($body) => {
      if ($body.find('#modal').length > 0) {
        cy.wait(getRandomDelay()).get('#modal').within(() => {
          cy.get('button.shopee-button-outline.shopee-button-outline--primary-reverse').contains('English').click();
        });
      }
    });
  });

  // Scenario A
  it('Scenario A: Enter Shopee website, landing on home page with EN language', () => {
    cy.wait(getRandomDelay());

    // Change 'USERNAME' and 'PASSWORD' to your real username and password
    cy.get('input[name="loginKey"]').type(Cypress.env('USERNAME'), { delay: 200 });
    cy.wait(getRandomDelay());
    cy.get('input[name="password"]').type(Cypress.env('PASSWORD'), { delay: 300 });
    cy.wait(getRandomDelay());
    cy.get('button:contains("Login")').should('not.be.disabled').click();

    cy.wait(getRandomDelay());
    cy.get('.ZVb1Bo').should('contain', 'English');
  });

  // Scenario B
  it('Scenario B: Search for keywords “baby toys”', () => {
    cy.wait(getRandomDelay());
    cy.get('input.shopee-searchbar-input__input').type('baby toys', { delay: 200 });
    cy.wait(getRandomDelay());
    cy.get('button.shopee-searchbar-input__submit').click();
  });

  // Scenario C
  it('Scenario C: Website displays search result as a list', () => {
    cy.wait(getRandomDelay());
    cy.get('.shopee-search-item-result__items').should('exist');
  });
});
