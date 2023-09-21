/// <reference types="cypress" />
import {LoginPage} from "./pages/login_page"
const loginPage = new LoginPage()
    beforeEach(function(){
    cy.visit("https://opensource-demo.orangehrmlive.com")
    })

describe("All login tests", ()=> {

    
    
    it("Login with valid credentials", () => {
            
        loginPage.enterUsername("Admin")
        loginPage.enterPassword("admin123")
        loginPage.clickLogin()
        cy.get('.oxd-userdropdown-name').click()
    })
    
    it("Login with invalid username", () => {
            
        loginPage.enterUsername("Admin123")
        loginPage.enterPassword("admin123")
        loginPage.clickLogin()
        cy.get('.oxd-userdropdown-name').click()
    })
    
})

it("Login with invalid password", () => {
            
    loginPage.enterUsername("Admin")
    loginPage.enterPassword("admin")
    loginPage.clickLogin()
    cy.get('.oxd-userdropdown-name').click()
})