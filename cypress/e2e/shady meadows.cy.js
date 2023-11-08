/// <reference types="cypress" />

describe("Main page", () => {
beforeEach(()=> {
    cy.visit("https://automationintesting.online/")
})
    it("Loads home page", () => {
        cy.get('.col-2 > .btn').click()
    })
    it("Book this room button", () => {
        cy.get('.col-2 > .btn').click()
        cy.get(':nth-child(4) > :nth-child(1) > .row > .col-sm-7 > .btn').click()
    })
    it("Confirm room reservation", () => {
        cy.get('.col-2 > .btn').click()
        cy.get(':nth-child(4) > :nth-child(1) > .row > .col-sm-7 > .btn').click()
        cy.get('.room-booking-form > .form-control').type("Tomislav")
        cy.get('.col-sm-4 > :nth-child(2) > .form-control').type("Mišić")
        cy.get('.col-sm-4 > :nth-child(3) > .form-control').type("Tomislav.tomislav@tomislav.com")
        cy.get('.col-sm-4 > :nth-child(4) > .form-control').type("099 999 9999")
        cy.get('.col-sm-4 > .btn-outline-primary').click()
    })
    it("Cancel booking", ()=> {
        cy.get('.col-2 > .btn').click()
        cy.get(':nth-child(4) > :nth-child(1) > .row > .col-sm-7 > .btn').click()
        cy.get('.room-booking-form > .form-control').type("Tomislav")
        cy.get('.col-sm-4 > :nth-child(2) > .form-control').type("Mišić")
        cy.get('.col-sm-4 > :nth-child(3) > .form-control').type("Tomislav.tomislav@tomislav.com")
        cy.get('.col-sm-4 > :nth-child(4) > .form-control').type("099 999 9999")
        cy.get('.btn-outline-danger').click()
    })
    it("Contact field", () =>{
        cy.get('[data-testid="ContactName"]').type("Tomislav")
        cy.get('[data-testid="ContactEmail"]').type("Tomislav.tomislav@tomislav.com")
        cy.get('[data-testid="ContactPhone"]').type("099 999 9999")
        cy.get('[data-testid="ContactSubject"]').type("Room inquiry")
        cy.get('[data-testid="ContactDescription"]').type("Hello everyone, hello")
        cy.get('#submitContact').click()
    })
})