beforeEach(function () {
    cy.authenticate(Cypress.env('user'), Cypress.env('password'));
})

it('Main news article can be opened form search result', function () {
    cy.get('#main-hot').find('.eg-front-page-featured-grid-element-1:visible').then((elem) => {
        cy.assertSearchResultHasText(elem.text()).click();
        cy.assertArticleHasTitle(elem.text());
    })
});