describe('Cypress WebTable Tests', { baseUrl: 'https://demoqa.com'},() => {
    /**
     * If you need to navigate to a URL other than your baseUrl, you define it at describe block or in the it block
     */
     beforeEach('Navigate to upload page', () => {
       cy.clearCookies();
       cy.visit('/webtables');
     });
    
     it('Check finding and editing a record', () => {
      /**
       * locate table body - then naviagte through this element to find Alden, then update info with another person
        * 1. get me table body
        * 2. get me the row that contains Alden
        * 3. store it into a jquery element 
       */
        cy.get('.rt-tbody')    
        .contains('.rt-tr-group','Alden')
        .then((row) => {
            // click on edit button for Alden record
            cy.wrap(row).find('[title="Edit"]').click();
            // fill in the box with new person
            cy.get('#firstName').clear().type('Harvey');
            cy.get('#lastName').clear().type('Specter');
            cy.get('#submit').click();
            // from cypress test perspective we are still inside row element: need to do ASSERTION
            cy.wrap(row).find('.rt-td').eq(0).should('contain', 'Harvey');
            cy.wrap(row).find('.rt-td').eq(1).should('contain', 'Specter');
        })  

     });
    
   });