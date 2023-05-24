describe('How to do API Test with cypress', () => {
  it('Simple GET request, check status headres and body', () => {
    cy.request({
      method: 'GET',
      url: '',
      failOnStatusCode: false,
    });
  });
});
