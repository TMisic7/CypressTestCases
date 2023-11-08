/// <reference types="cypress" />

describe("Booking", () => {
    beforeEach(() => {
        cy.visit("https://booking.com")
    });
    it("Search by date and destination", () => {
        cy.get('[data-testid="destination-container"]')
            .type("Zagreb", { delay: 100 });
        cy.wait(2000);
        cy.get('[data-testid="searchbox-dates-container"]').click();
        cy.get('[data-testid="searchbox-datepicker-calendar"]', { timeout: 10000 });
        cy.get('[data-date="2023-10-13"]').click();
        cy.get('[data-date="2023-10-15"]').click();

        cy.contains("button", "Search").click();

        cy.get('h1[aria-live="assertive"]').should('contain', 'Zagreb');
    })
});