/// <reference types="Cypress" />

describe('Source open in a new tab', () => {
    it('can cy.visit', () => {
        cy.visit("https://mds-qa-tests.angry-unicorn.space/")
    })

})