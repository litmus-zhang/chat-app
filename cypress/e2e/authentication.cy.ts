/// reference cypress.io
describe('template m ', () => {
    it('should navigate between signup and login page', () => {
        cy.visit('/auth/signup')
        cy.contains("h1", "Sign up for an account")
        cy.contains("strong", "Login").click()
        cy.url().should("include", "/auth/")
    })
    
    it('should navigate to home page after login screen', () => {
        cy.visit("/auth/")
        cy.get('[data-cy="username"]').type("lukman")
        cy.get(':nth-child(2) > [data-cy="password"]').type("lukman123")
        cy.get('.chakra-button').click("center")
        cy.url().should("include","/auth")
    });
    it("should navigate to home page after  successful login", ()=>{
        cy.visit("/auth/")
        cy.get('[data-cy="username"]').type("lukman")
        cy.get('[data-cy="password"]').type("lukman123")
        cy.get('.chakra-button').click("center")
        cy.url().should("include", "http://localhost:3000/")
    })
})