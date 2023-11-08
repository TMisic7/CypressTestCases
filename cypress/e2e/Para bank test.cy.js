/// <reference types="cypress" />

describe("All login and registration tests", ()=> {
beforeEach(()=>{
    cy.visit("https://parabank.parasoft.com/parabank/index.htm")
})
    it("Login with valid data", () => {
        
        cy.get('.leftmenu > :nth-child(2) > a').click(),
        cy.get(':nth-child(2) > .input').type("admin"),
        cy.get(':nth-child(4) > .input').type("admin"),
        cy.get(':nth-child(5) > .button').click()
    })

    it("Login with invalid username", ()=>{
        
        cy.get('.leftmenu > :nth-child(2) > a').click(),
        cy.get(':nth-child(2) > .input').type("Rawr"),
        cy.get(':nth-child(4) > .input').type("admin"),
        cy.get(':nth-child(5) > .button').click()
    })
    it("Login with invalid password", ()=>{
        
        cy.get('.leftmenu > :nth-child(2) > a').click(),
        cy.get(':nth-child(2) > .input').type("admin"),
        cy.get(':nth-child(4) > .input').type("abc123"),
        cy.get(':nth-child(5) > .button').click()
    })
    it("Forgot Login Info", ()=>{
        
        cy.get('#loginPanel > :nth-child(2) > a').click()
    })
    it("Forgot Login Info Fields", ()=>{
        
        cy.get('#loginPanel > :nth-child(2) > a').click()
        cy.get('#firstName').type("Marko")
        cy.get('#lastName').type("Markić")
        cy.get('[name="address.street"]').type("Markićeva 16")
        cy.get('[name="address.city"]').type("Markograd")
        cy.get('[name="address.state"]').type("Markotanija")
        cy.get('[name="address.zipCode"]').type("666")
        cy.get('#ssn').type("147852369")
        cy.get('[colspan="2"] > .button').click()
    })
    it("Registration Form", ()=>{
        cy.get('#loginPanel > :nth-child(3) > a').click()
        cy.get('[name="customer.firstName"]').click().type("Marko")
        cy.get('[name="customer.lastName"]').type("Markić")
        cy.get('[name="customer.address.street"]').type("Markićeva 16")
        cy.get('[name="customer.address.city"]').type("Markograd")
        cy.get('[name="customer.address.state"]').type("Markotanija")
        cy.get('[name="customer.address.zipCode"]').type("666")
        cy.get('[name="customer.phoneNumber"]').type("666 555 765")
        cy.get('[name="customer.ssn"]').type("147852369")
        cy.get('[name="customer.username"]').type("Marko")
        cy.get('[name="customer.password"]').type("Markić")
        cy.get('[name="repeatedPassword"]').type("789654123")
        cy.get('[colspan="2"] > .button').click()
    })
})

describe("Home screen footer", () => {
beforeEach(()=>{
        cy.visit("https://parabank.parasoft.com/parabank/index.htm")
    })
    it("Home button", ()=>{
        cy.get('#footerPanel > :nth-child(1) > :nth-child(1) > a').click()
    })
    it("About Us button", ()=>{
        cy.get('#footerPanel > :nth-child(1) > :nth-child(2) > a').click()
    })
    it("Services button", ()=>{
        cy.get('#footerPanel > :nth-child(1) > :nth-child(3) > a').click()
    })
    it("Products button", ()=>{
        cy.get('#footerPanel > :nth-child(1) > :nth-child(4) > a').click()
    })
    it("Locations button", ()=>{
        cy.get('#footerPanel > :nth-child(1) > :nth-child(5) > a').click()
    })
    it("Forum button", ()=>{
        cy.get('#footerPanel > :nth-child(1) > :nth-child(6) > a').click()
    })
    it("Site Map button", ()=>{
        cy.get(':nth-child(1) > :nth-child(7) > a').click()
    })
    it("Contact Us button", ()=>{
        cy.get(':nth-child(8) > a').click()
    })
    it("Link at the bottom", ()=>{
        cy.get('.visit > :nth-child(2) > a').click()
    })
    it("Read more button", ()=>{
        cy.get('.visit > :nth-child(2) > a').click()
    })
})
describe("Buttons on the left side", () => {

    it("Solutions button", ()=>{
        cy.get('[href="about.htm"]',).click()
    })
    it("About Us button", ()=>{
        cy.get('[href="about.htm"]').click()
    })
    it("Services button", ()=>{
        cy.get('[href="services.htm"]').click()
    })
    it("Products button", ()=>{
        cy.get('[href="http://www.parasoft.com/jsp/products.jsp"]').click()
    })
    it("Locations button", ()=>{
        cy.get('[href="http://www.parasoft.com/jsp/pr/contacts.jsp"]').click()
    })
    it("Admin Page button", ()=>{
        cy.get('[href="admin.htm"]').click()
    })
})
describe("Header buttons", ()=>{
beforeEach(()=>{
    cy.visit("https://parabank.parasoft.com/parabank/index.htm")
})
    it("Home button header", ()=>{
        cy.get('.home > a').click()
    })
    it("About Us button", ()=>{
        cy.get('.aboutus > a').click()
    })
    it("Contact Us button",()=>{
        cy.get('.contact > a').click()
        cy.get('#name').type("Marko")
        cy.get('#email').type("marko@markoland.com")
        cy.get('#phone').type("666 555")
        cy.get('#message').type("Yes, this Marko")
        cy.get('[colspan="2"] > .button').click()
    })
    it("Logo button at the top of the header", ()=>{
        cy.get('.logo').click()
    })
})
describe("ATM and Online services menus", ()=>{
beforeEach(()=>{
    cy.visit("https://parabank.parasoft.com/parabank/index.htm")
})
    it("Withdraw Funds button", ()=>{
        cy.get('ul.services > :nth-child(2) > a').click()
    })
    it("Transfer Funds button", ()=>{
        cy.get('ul.services > :nth-child(3) > a', {timeout: 4000}).click()
    })
    it("Check Balances button", ()=>{
        cy.get('ul.services > :nth-child(4) > a', {timeout: 4000}).click()
    })
    it("Make Deposits button", ()=>{
        cy.get('ul.services > :nth-child(5) > a', {timeout: 4000}).click()
    })
    it("Bill Pay button", ()=>{
        cy.get('.servicestwo > :nth-child(2) > a').click()
    })
    it("Account History button", ()=>{
        cy.get('.servicestwo > :nth-child(3) > a').click()
    })
    it("Transfer Funds button", ()=>{
        cy.get('.servicestwo > :nth-child(4) > a').click()
    })
    it("Read more button", ()=>{
        cy.get('#rightPanel > :nth-child(4) > a').click()
    })
})
describe("Latest News buttons", ()=>{
beforeEach(()=>{
    cy.visit("https://parabank.parasoft.com/parabank/index.htm")
})
    it("ParaBank is Now Re-Opened button", ()=>{
        cy.get('.events > :nth-child(2) > a').click()
    })
    it("New Online Bill Paying button", ()=>{
        cy.get('.events > :nth-child(3) > a').click()
    })
    it("New Online Account Transfer button", ()=>{
        cy.get('.events > :nth-child(4) > a').click()
    })
})