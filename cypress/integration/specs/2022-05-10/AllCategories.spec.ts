beforeEach(function () {
    cy.authenticate(Cypress.env('user'), Cypress.env('password'));
})

it('Food category should have equal number of products in the category details and inside', function () {
    cy.get('#menu-main-menu').contains('Billboard').click();
    const allCategories :Array<string> = new Array<string>();
    allCategories.push('test2')
    cy.get('.woocommerce-loop-category__title').each((element) => {
        element
    })
    allCategories.forEach((category) => {
        cy.assertNumberOfProductsIsCorrectInCategory(category);
    })
});