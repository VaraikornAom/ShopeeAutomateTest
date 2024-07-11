it('should search for "baby toys" on Shopee', () => {
  cy.visit('/');

  // Function to get a random delay between actions
  const getRandomDelay = (min = 1000, max = 3000) => Math.floor(Math.random() * (max - min + 1)) + min;

  // Function to simulate human-like mouse movement
  const moveMouseRandomly = () => {
      for (let i = 0; i < 5; i++) {
          cy.wait(getRandomDelay(100, 500)).then(() => {
              cy.get('body').trigger('mousemove', { clientX: Math.random() * 1000, clientY: Math.random() * 1000 });
          });
      }
  };

  // Check if the modal appears
  cy.get('body').then(($body) => {
      if ($body.find('#modal').length > 0) {
          cy.wait(getRandomDelay()).then(() => {
              moveMouseRandomly();
              cy.get('#modal').within(() => {
                  cy.get('button.shopee-button-outline.shopee-button-outline--primary-reverse').contains('English').click();
              });
          });
      }
      
      // Simulate mouse movement and typing with random delays
      cy.wait(getRandomDelay()).then(() => {
          moveMouseRandomly();
          cy.get('input.Z7tNyT[name="loginKey"]').type('varaikornchankaipon@gmail.com', { delay: getRandomDelay(50, 150) });
      });

      cy.wait(getRandomDelay()).then(() => {
          moveMouseRandomly();
          cy.get('input.Z7tNyT[name="password"]').type('Aom@KMUTT555', { delay: getRandomDelay(100, 200) });
      });

      cy.wait(getRandomDelay()).then(() => {
          moveMouseRandomly();
          cy.get('button.vvOL40.iesrPs.AsFRg8.qCI4rz.ZKayWA.AnY7KS').should('not.be.disabled').click();
      });
  });

  // Ensure the page loads in English with delay
  cy.wait(getRandomDelay()).then(() => {
      moveMouseRandomly();
      cy.get('.ZVb1Bo').should('contain', 'English');
  });

});
