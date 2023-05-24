import { auth } from "../../support/pages/auth";
import { navigateTo } from "../../support/pages/navigation";

describe('Auth: Login user with different ways', ()=>{

    beforeEach('Navigate to login page', ()=>{
        cy.clearAllCookies();
        navigateTo.loginPage();
    })

    it('Happy path scenario using POM function', ()=>{
        cy.fixture('user').then((user) =>{
            auth.login(user.user2.username, user.user2.password);
        })
        //
        cy.textExists('You logged into a secure area!');
        auth.logout();
    })
})