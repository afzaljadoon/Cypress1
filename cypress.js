it('should have necessary UI elements for adding a book', () => {
    cy.visit('/add-book');
    cy.get('#title-input').should('exist');
    cy.get('#author-input').should('exist');
    cy.get('#submit-button').should('exist');
  });
  