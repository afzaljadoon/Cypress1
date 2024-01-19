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

  it('should edit an existing book successfully', () => {
    cy.visit('/books');
    cy.get('.edit-button').first().click();
    cy.get('#title-input').clear().type('Updated Book Title');
    cy.get('#author-input').clear().type('Jane Doe');
    cy.get('#save-button').click();
    cy.contains('Book updated successfully').should('exist');
    cy.contains('Updated Book Title by Jane Doe').should('exist');
  });

  it('should display updated book details after edit', () => {
    cy.visit('/books');
    cy.get('.edit-button').first().click();
    cy.get('#title-input').clear().type('Updated Book Title');
    cy.get('#author-input').clear().type('Jane Doe');
    cy.get('#save-button').click();
    cy.get('.book-item').first().click();
    cy.contains('Updated Book Title by Jane Doe').should('exist');
  });

  describe('Backend Connection', () => {
    it('should connect to the backend successfully', () => {
      cy.request('/api') // Assuming your backend API is at the root path '/api'
        .its('status')
        .should('equal', 200);
    });
  });
  
  
  