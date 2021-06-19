/// <reference types="cypress" /> 

describe('dark mode test', () => {
    it('dark mode active', () => {
        cy.visit('/dist/index.html');
        cy.get('[data-cy = activeDarkTheme]').click();
        cy.get('[data-cy = bg-dark]').should('have.class','bg-dark');
        cy.get('[data-cy = title-dark]').should('have.class', 'title-dark');
        cy.get('[data-cy = bg-card-dark]').should('have.class', 'bg-card-dark');
    })    
})
