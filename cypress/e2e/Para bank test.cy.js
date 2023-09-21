/// <reference types="cypress" />

it("Para bank test", () => {
    cy.visit("https://parabank.parasoft.com/parabank/index.htm")
    cy.get('.leftmenu > :nth-child(2) > a').click(),
    cy.get(':nth-child(2) > .input').type("admin"),
    cy.get(':nth-child(4) > .input').type("admin"),
    cy.get(':nth-child(5) > .button').click()
})