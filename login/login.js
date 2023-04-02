import loginpage from '../../e2e/login/login.page';
const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('I open login page',()=>{
    //TODO
    loginpage.visit();
})

When('I submit login',()=>{
    loginpage.fillusername('username');
    loginpage.fillpassword('password');
    loginpage.signin();
})

Then('I should see homepage' , () => {
    cy.contains('Account Summary').should('be.visible' )
})