/// <reference types="Cypress" />

describe('Categories have different appearance when they are selected', () => {
    beforeEach(() => {
        cy.visit("https://mds-qa-tests.angry-unicorn.space/")

    })

    it('Top category visual change when Top is selected', () => {

        // scan to see if top category change
        cy.get('[href="/top"]').should('have.class', '.router-link-exact-active.router-link-active')


    })

    it('Top category visual change when New is selected', () => {

        // scan to see if new category change
        cy.get('[href="/new"]').click()
        cy.get('[href="/new"]').should('have.class', '.router-link-exact-active')


    })

    it('Top category visual change when Show is selected', () => {

        // scan to see if show category change
        cy.get('[href="/show"]').click()
        cy.get('[href="/show"]').should('have.class', '.router-link-exact-active')


    })

    it('Top category visual change when Ask is selected', () => {

        // scan to see if ask category change
        cy.get('[href="/ask"]').click()
        cy.get('[href="/ask"]').should('have.class', '.router-link-exact-active')


    })

    it('Top category visual change when Job is selected', () => {

        // scan to see if top category change
        cy.get('[href="/job"]').click()
        cy.get('[href="/job"]').should('have.class', '.router-link-exact-active')


    })

})