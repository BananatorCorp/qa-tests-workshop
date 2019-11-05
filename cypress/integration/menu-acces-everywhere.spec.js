/// <reference types="Cypress" />

describe('Categories are accessible everywhere', () => {
    beforeEach(() => {
        cy.visit("https://mds-qa-tests.angry-unicorn.space/")

    })

    it('Categories can be accessed from Top', () => {

        // scan to see if category can be accessed from top
        cy.get('[href="/top"]').should('have.attr', 'href', '/top')
        cy.get('[href="/new"]').should('have.attr', 'href', '/new')
        cy.get('[href="/show"]').should('have.attr', 'href', '/show')
        cy.get('[href="/ask"]').should('have.attr', 'href', '/ask')
        cy.get('[href="/job"]').should('have.attr', 'href', '/job')


    })

    it('Categories can be accessed from New', () => {

        // scan to see if category can be accessed from new
        cy.get('[href="/new"]').click()
        cy.get('[href="/top"]').should('have.attr', 'href', '/top')
        cy.get('[href="/new"]').should('have.attr', 'href', '/new')
        cy.get('[href="/show"]').should('have.attr', 'href', '/show')
        cy.get('[href="/ask"]').should('have.attr', 'href', '/ask')
        cy.get('[href="/job"]').should('have.attr', 'href', '/job')


    })

    it('Categories can be accessed from Show', () => {

        // scan to see if category can be accessed from show
        cy.get('[href="/show"]').click()
        cy.get('[href="/top"]').should('have.attr', 'href', '/top')
        cy.get('[href="/new"]').should('have.attr', 'href', '/new')
        cy.get('[href="/show"]').should('have.attr', 'href', '/show')
        cy.get('[href="/ask"]').should('have.attr', 'href', '/ask')
        cy.get('[href="/job"]').should('have.attr', 'href', '/job')


    })

    it('Categories can be accessed from Ask', () => {

        // scan to see if category can be accessed from ask
        cy.get('[href="/ask"]').click()
        cy.get('[href="/top"]').should('have.attr', 'href', '/top')
        cy.get('[href="/new"]').should('have.attr', 'href', '/new')
        cy.get('[href="/show"]').should('have.attr', 'href', '/show')
        cy.get('[href="/ask"]').should('have.attr', 'href', '/ask')
        cy.get('[href="/job"]').should('have.attr', 'href', '/job')


    })

    it('Categories can be accessed from Job', () => {

        // scan to see if category can be accessed from job
        cy.get('[href="/job"]').click()
        cy.get('[href="/top"]').should('have.attr', 'href', '/top')
        cy.get('[href="/new"]').should('have.attr', 'href', '/new')
        cy.get('[href="/show"]').should('have.attr', 'href', '/show')
        cy.get('[href="/ask"]').should('have.attr', 'href', '/ask')
        cy.get('[href="/job"]').should('have.attr', 'href', '/job')


    })

})