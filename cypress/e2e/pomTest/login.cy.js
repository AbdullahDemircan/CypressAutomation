import { auth } from '../../support/pages/auth';
import { navigateTo } from '../../support/pages/navigation';

const LoginLocators = require('../../support/pages/auth');

describe('Auth: Login user with different ways', () => {
  beforeEach('Navigate to login page', () => {
    cy.clearAllCookies();
    navigateTo.loginPage();
  });

  it('Happy path scenario using POM function', () => {
    cy.fixture('user').then((user) => {
      auth.login(user.user2.username, user.user2.password);
    });
    //
    cy.textExists('You logged into a secure area!');
    auth.logout();
  });

  it('Happy path scenario using POM locators', () => {
    cy.fixture('user').then((user) => {
      LoginLocators.locators.userName.type(user.user2.userName);
      LoginLocators.locators.password.type(user.user2.password);
      LoginLocators.locators.submit.click();
    });
    //
    cy.textExists('You logged into a secure area!');
    auth.logout();
  });
});
