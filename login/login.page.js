const URL = 'http://zero.webappsecurity.com/login.html'
const USERNAME = '#user_login'
const PASSWORD = '#user_password'
const SIGN_IN = 'Sign in'

class loginpage{
    static visit(){
        cy.visit(URL)
    }
    static fillusername(username){
        cy.get(USERNAME).type(username)
    }
    static fillpassword(password){
        cy.get(PASSWORD).type(password)
    }
    static signin(){
        cy.contains(SIGN_IN).click()
    }
}

export default loginpage