const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('I open the website',()=>{
    //TODO
    cy.visit('http://zero.webappsecurity.com')
})

When('I typing keyword in searchbox',()=>{
    cy.get('#searchTerm').type('online banking{enter}')
})

Then('I found the keywords I was looking for' , () => {
    cy.contains('Zero - Free Access to Online Banking' ).should('be.visible' )
})