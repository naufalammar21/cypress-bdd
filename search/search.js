import searchpage from '../../e2e/search/search.page';
const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('I open the website',()=>{
    //TODO
    searchpage.visit()
})

When('I typing keyword in searchbox',()=>{
    searchpage.searchcontent('online banking{enter}')
})

Then('I found the keywords I was looking for' , () => {
    cy.contains('Zero - Free Access to Online Banking' ).should('be.visible' )
})