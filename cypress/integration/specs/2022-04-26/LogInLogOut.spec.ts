describe('Homework for 2022-04-26', () => {

    it('Successful Log In Log Out test', () => {
        cy.visit(Cypress.env('baseUrl'));
        cy.get('#username').type(Cypress.env('user'));
        cy.get('#password').type(Cypress.env('password'), { log: false });
        cy.contains('Login').click();
        cy.get('.logout-button').should('be.visible');
        cy.get('.logout-button').click();
        cy.get('#msg > h2').should('have.text','Logout successful');
    })

    it('Failed Log In test', () => {
        cy.visit(Cypress.env('baseUrl'));
        cy.get('#username').type('WrongUserName');
        cy.get('#password').type('WrongUserPassword');
        cy.contains('Login').click();
        cy.get('#msg.errors').should('have.text','Invalid credentials');
    })

});