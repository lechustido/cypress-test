
require('cypress-plugin-tab')
require('cypress-xpath');
describe("", ()=>{

    //Permite omitir los errores de cors que da la pagina de cypress
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });
    
    it("Pruebas con las tablas", () =>{
        cy.viewport(1900, 1200);
        cy.visit("https://demoqa.com/webtables");
    })
})