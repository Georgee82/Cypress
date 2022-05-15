beforeEach(function () {
    cy.authenticate(Cypress.env('user'), Cypress.env('password'));
})

it('Dropdown should have expected number of links', function () {
    cy.get('#menu-main-menu').contains('Tools').trigger('mouseover').then((elem) => {
        cy.wrap(elem).parent('li').find('li').should('have.length', 14)
    })
});