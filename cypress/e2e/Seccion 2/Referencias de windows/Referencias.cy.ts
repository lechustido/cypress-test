
require('cypress-plugin-tab')
require('cypress-xpath');
describe("Validamos el formato de la página, por ejemplo utf-8. Para tema de acentos, ñ ...", ()=>{

    //Permite omitir los errores de cors que da la pagina de cypress
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });
    
    it("Validando utf.8", () =>{
        cy.visit("https://testsheepnz.github.io");

        //Comprobamos si el documento (la web) tiene el charset utf-8
        cy.document().should("have.property", "charset").and('eq', 'UTF-8')
    })

    it("Validando url", () =>{
        cy.visit("https://testsheepnz.github.io");

        cy.url().should("include", "https://testsheepnz.github.io")
        cy.url().should("eq", "https://testsheepnz.github.io")
    })


})