const URL = 'http://zero.webappsecurity.com'
const search = '#searchTerm'

class searchpage{
    static visit(){
        cy.visit(URL)
    }
    static searchcontent(searching){
        cy.get(search).type(searching)
    }

}

export default searchpage