/// <reference types="Cypress" />

describe('List item counter', () => {
    beforeEach(() => {
        cy.visit("https://mds-qa-tests.angry-unicorn.space/")

    })

    it('List should have 20 elements for each page', () => {

        //check if news are group by 20's for the first page and go to second page
        cy.get('.news-list li')
            .should('have.length', 20)
    })


})