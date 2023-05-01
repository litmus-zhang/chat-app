describe('template spec', () => {
    it('should navigate between signup and login page', () => {
        cy.visit('/auth/signup')
        cy.contains("h1", "Sign up for an account")
        cy.contains("strong", "Login").click()
        cy.url().should("include", "/auth/")
    })
    it('should navigate to login page after creating account', () => {
        cy.visit("/auth/signup")
        cy.get('[data-cy="username"]').type("lukman")
        cy.get(':nth-child(2) > [data-cy="password"]').type("lukman123")
        cy.get('[data-cy="confirm-password"]').type("lukman123")
        cy.get('.chakra-button').click("center")
        cy.url().should("eq", "/auth")
    });
})