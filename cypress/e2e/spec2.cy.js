it('should search for "baby toys" on Shopee', () => {
    cy.visit('/');

    // Random delay function
    const getRandomDelay = () => Math.floor(Math.random() * 3000) + 1000;

    // Check if the modal appears
    cy.get('body').then(($body) => {
        if ($body.find('#modal').length > 0) {
            cy.wait(getRandomDelay()).get('#modal').within(() => {
                cy.get('button.shopee-button-outline.shopee-button-outline--primary-reverse').contains('English').click();
            });
        }
        cy.wait(getRandomDelay()).get('input.Z7tNyT[name="loginKey"]').type('varaikornchankaipon@gmail.com', { delay: 100 });
        cy.wait(getRandomDelay()).get('input.Z7tNyT[name="password"]').type('Aom@KMUTT555', { delay: 200 });
        cy.wait(getRandomDelay()).get('button.vvOL40.iesrPs.AsFRg8.qCI4rz.ZKayWA.AnY7KS').should('not.be.disabled').click();
    });

    // Ensure the page loads in English with delay
    cy.wait(getRandomDelay()).get('.ZVb1Bo').should('contain', 'English');
});

  