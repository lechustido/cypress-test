
require('cypress-plugin-tab')
describe("", ()=>{

    //Permite omitir los errores de cors que da la pagina de cypress
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });
    
    it(" ", () =>{
        cy.visit(" ");
    })
})