/// <reference types="cypress" />

describe('Alerts in Cypress', {baseUrl: 'https://demoqa.com'}, () => {

    beforeEach(() => {
        // run before each test case, beforeMethod in TestNG
        cy.clearCookies();
        cy.visit('/alerts');
    })
   
    it('Check alert confirmation', () => {
        
        cy.get('#confirmationButton').click();

        const stub = cy.stub();

        cy.on('window:confirm', stub);


        cy.get('#confirmButton').click().then(() =>{
            expect(stub.getCall(0)).yieldTo.be.calledWith('Do you confirm action?');
        })
        cy.on('window:confirm', () => true);

        cy.contains('You selected Ok').should('be.visible');
    })

    it('Check alert cancelation', () => {
        
        cy.get('#confirmationButton').click();

        const stub = cy.stub();

        cy.on('window:confirm', stub);


        cy.get('#confirmButton').click().then(() =>{
            expect(stub.getCall(0)).yieldTo.be.calledWith('Do you confirm action?');
        })
        cy.on('window:confirm', () => false);

        cy.contains('You selected Cancel').should('be.visible');
    })
    
})