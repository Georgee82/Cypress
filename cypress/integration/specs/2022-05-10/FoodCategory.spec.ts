beforeEach(function () {
    cy.authenticate(Cypress.env('user'), Cypress.env('password'));
})

it('Food category should have equal number of products in the category details and inside', function () {
    cy.get('#menu-main-menu').contains('Billboard').click();
    cy.assertNumberOfProductsIsCorrectInCategory('Food');
});