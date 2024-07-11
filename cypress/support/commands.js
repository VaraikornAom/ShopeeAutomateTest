// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('loginToShopeeWithGoogle', (username, password) => {
    // Visit the Shopee website
    cy.visit('https://shopee.co.th/');
  
    const getRandomDelay = () => Math.floor(Math.random() * 3000) + 1000;
  
    // Check if the modal with specific class appears and handle if needed (if any)
    cy.get('body').then(($body) => {
      if ($body.find('#modal').length > 0) {
        cy.wait(getRandomDelay()).get('#modal').within(() => {
          cy.get('button.shopee-button-outline.shopee-button-outline--primary-reverse').contains('English').click();
        });
      }
  
      // Click on the login button or perform login action
      cy.wait(getRandomDelay()).get('#login-button').click(); // Replace with actual login button selector
  
      // Wait for the Google login form to appear and submit it
      cy.get('form[data-provider="google"]').within(() => {
        cy.get('input[type="email"]').type(username, { log: false });
        cy.contains('Next').click().wait(2000); // Adjust wait times as necessary
        cy.get('input[type="password"]').type(password, { log: false });
        cy.contains('Next').click().wait(2000); // Adjust wait times as necessary
      });
  
      // Optionally, add assertions for successful login state
      // For example, you might check for elements that appear after successful login
      cy.wait(getRandomDelay()).get('.ZVb1Bo').should('contain', 'English');
    });
  });
  
