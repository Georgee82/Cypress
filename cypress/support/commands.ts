declare namespace Cypress {
    interface Chainable {
        assertNumberOfProductsIsCorrectInCategory(categoryName): Chainable<Element>;

        authenticate(username: string, password: string): Chainable<Element>;

        assertArticleHasTitle(title: string): Chainable<Element>;

        assertSearchResultHasText(text: string): Chainable<Element>;
    }
}

Cypress.Commands.add('assertNumberOfProductsIsCorrectInCategory', (categoryName) => {
    cy.get('.woocommerce-loop-category__title').contains(categoryName)
        .find('.count')
        .then((element) => {
            const displayedNumberOfProducts: number = parseInt(element.text().split(' ')[0]);
            cy.wrap(element).click()
                .get('#main-container').get('.product-loop-inner')
                .should('have.length', displayedNumberOfProducts);
        })
})

Cypress.Commands.add('authenticate', (username, password) => {
    cy.get('#username').type(Cypress.env('user'));
    cy.get('#password').type(Cypress.env('password'), {log: false});
    cy.contains('Login').click();
    cy.get('.logout-button').should('be.visible');
})

Cypress.Commands.add('assertArticleHasTitle', (title) => {
    cy.get('.article-title').should('have.text', title);
})

Cypress.Commands.add('assertSearchResultHasText', (text) => {
    cy.get(".search-trigger").click();
    cy.get('#ajax_searchform').type(text);
    cy.get('.search_title').should('have.text', text)
})