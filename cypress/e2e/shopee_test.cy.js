const getRandomDelay = () => Math.floor(Math.random() * 3000) + 1000;

describe.only('Shopee Tests', () => {
  before(() => {
    cy.visit('/');

    // Check if the modal appears
    cy.get('body').then(($body) => {
      if ($body.find('#modal').length > 0) {
        cy.wait(getRandomDelay()).get('#modal').within(() => {
          cy.get('button.shopee-button-outline.shopee-button-outline--primary-reverse').contains('English').click();
        });
      }
    });
  });

  it('ScenarioA: Enter Shopee website, landing on home page with EN lang', () => {
    cy.wait(getRandomDelay());
    cy.get('input.Z7tNyT[name="loginKey"]').type('varaikornchankaipon@gmail.com', { delay: 200 }); // Slower typing delay
    cy.wait(getRandomDelay());
    cy.get('input.Z7tNyT[name="password"]').type('Aom@KMUTT555', { delay: 300 }); // Slower typing delay
    cy.wait(getRandomDelay());
    cy.get('button.vvOL40.iesrPs.AsFRg8.qCI4rz.ZKayWA.AnY7KS').should('not.be.disabled').click();

    cy.wait(getRandomDelay());
    cy.get('.ZVb1Bo').should('contain', 'English');
  });

  it('ScenarioB : Search for keywords “ baby toys “', () => {
    cy.wait(getRandomDelay());
    cy.get('input.shopee-searchbar-input__input').type('baby toys', { delay: 200 }); // Slower typing delay
    cy.wait(getRandomDelay());
    cy.get('button.shopee-searchbar-input__submit').click();
  });

  it('ScenarioB : Website display search result as a list', () => {
    cy.wait(getRandomDelay());
    cy.get('.shopee-search-item-result__items').should('exist');
  });
});
