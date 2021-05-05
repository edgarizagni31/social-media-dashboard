/// <reference types="cypress" /> 
describe('dark mode test', () => {
    it('dark mode active', () => {
        cy.visit('http://127.0.0.1:5500/dist/index.html');
        cy.get('[data-cy = activeDarkTheme]').click();
    })    
})
