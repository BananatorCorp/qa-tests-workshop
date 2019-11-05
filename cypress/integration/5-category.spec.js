/// <reference types="Cypress" />

describe('5 news category', () => {
    it('Top category', () => {
        cy.visit("https://mds-qa-tests.angry-unicorn.space/") //place ourselves at the right site in order to pass tests


        // scan the top link on the navbar to see if it have an attribute top
        cy.get('[href="/top"]').should('have.attr', 'href', '/top')
    })

    it('New category', () => {
        cy.visit("https://mds-qa-tests.angry-unicorn.space/") //place ourselves at the right site in order to pass tests


        // scan the new link on the navbar to see if it have an attribute new
        cy.get('[href="/new"]').should('have.attr', 'href', '/new')


    })

    it('Show category', () => {
        cy.visit("https://mds-qa-tests.angry-unicorn.space/") //place ourselves at the right site in order to pass tests


        // scan the show link on the navbar to see if it have an attribute show
        cy.get('[href="/show"]').should('have.attr', 'href', '/show')
    })

    it('Ask category', () => {
        cy.visit("https://mds-qa-tests.angry-unicorn.space/") //place ourselves at the right site in order to pass tests


        // scan the ask link on the navbar to see if it have an attribute ask
        cy.get('[href="/ask"]').should('have.attr', 'href', '/ask')
    })

    it('Job category', () => {
        cy.visit("https://mds-qa-tests.angry-unicorn.space/") //place ourselves at the right site in order to pass tests


        // scan the job link on the navbar to see if it have an attribute job
        cy.get('[href="/job"]').should('have.attr', 'href', '/job')
    })

})