describe('My First Test', () => {
  it('Visits the Angular app', () => {
    cy.visit('/'); // localhost:4200/
    cy.contains('Welcome to Brique\'s e-shop');
  });
});
