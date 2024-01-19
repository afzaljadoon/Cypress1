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
  
  it('should show validation messages for missing data', () => {
    cy.visit('/add-book');
    cy.get('#submit-button').click();
    cy.contains('Please enter a title').should('exist');
    cy.contains('Please enter an author').should('exist');
  });

  it('should display book details on click', () => {
    cy.visit('/books');
    cy.get('.book-item').first().click();
    cy.url().should('include', '/books/');
    cy.get('.book-details').should('exist');
  });

  it('should delete a book successfully', () => {
    cy.visit('/books');
    cy.get('.book-item').first().find('.delete-button').click();
    cy.contains('Book deleted successfully').should('exist');
    cy.get('.book-item').should('have.length', 1);
  });

  it('should have necessary UI elements for editing a book', () => {
    cy.visit('/books');
    cy.get('.edit-button').should('exist');
  });
  