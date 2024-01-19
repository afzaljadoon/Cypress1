it('should have necessary UI elements for adding a book', () => {
    cy.visit('/add-book');
    cy.get('#title-input').should('exist');
    cy.get('#author-input').should('exist');
    cy.get('#submit-button').should('exist');
  });
  
  it('should add a new book successfully', () => {
    cy.visit('/add-book');
    cy.get('#title-input').type('Sample Book');
    cy.get('#author-input').type('John Doe');
    cy.get('#submit-button').click();
    cy.url().should('include', '/books');
    cy.contains('Sample Book by John Doe').should('exist');
  });
  