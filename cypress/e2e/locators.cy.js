/// <reference types="cypress" />

describe('Find or get elements', () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.visit('/login');
  });

  it('Check Different Locators strategies', () => {
    // by css locator
    cy.get("input[name='username']").type('CydeoStudent'); // every statement create an object, and next comment
    cy.get("[type='text']").clear(); // clear what is typed
    cy.get("input[name='username").type('CydeoStudent');
    // by tag name
    cy.get('input').each((item, index, list) => {
      expect(list).to.have.length(2);
      expect(item).to.have.attr('type');
    });
    // By attribute
    cy.get('[type]');

    // By class attribute value name
    cy.get('.btn.btn-primary');

    // By id
    cy.get('#wooden_spoon');

    // If I want to use text: no xpath in cypress,
    cy.get('button').should('contain', 'Login').click();
  });

  it('Check finding elements by travelling through DOM', () => {
    // travel to find the login button: locate username box- go to parent form-then find
    // login  button//

    cy.get('input[name="username"]')
      .parents('form')
      .find('button')
      .should('contain', 'Login')
      .click();
  });

  it.only('Check different type of assertions', () => {
    // Cypress itself bundles assertions provided by Chai, Sinon and jQuery
    // Should Assertion
    cy.get('#wooden_spoon').should('contain', 'Login').and('have.class', 'btn btn-primary');
    // expect assertion:
    cy.get('#wooden_spoon').then((buttonelement) => {
      expect(buttonelement).to.have.text('Login');
      expect(buttonelement).to.have.class('btn btn-primary');
    });
  });
});
