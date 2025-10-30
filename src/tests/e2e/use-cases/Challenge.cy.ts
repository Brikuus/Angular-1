describe('Tests e2e challenge', () => {
  it ('scenario 1', ()=> {
    cy.visit('/products');

    cy.get('#test').click();

    cy.get('a[href="/cart"]').click();

    cy.contains('votre panier contient : 1 article-s');

    cy.get('.product-panier').contains('The Witcher 3: Wild Hunt')
  });

  it('scenario 2', () => {
    cy.visit('/products');

    cy.get('#test').click();

    cy.get('#test').click();

    cy.get('a[href="/cart"]').click();

    cy.get('#test-remove').click();

    cy.get('.product-panier').contains('The Witcher 3: Wild Hunt');

    cy.contains('votre panier contient : 1 article-s');
  });

  it('scenario 3', () => {
    cy.visit('/products');

    cy.get('#test').click();

    cy.get('a[href="/cart"]').click();

    cy.get('#test-clear').click();

    cy.contains('votre panier contient : 0 article-s');
  });
});
