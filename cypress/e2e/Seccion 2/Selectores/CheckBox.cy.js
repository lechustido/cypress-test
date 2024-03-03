
require('cypress-plugin-tab')
require('cypress-xpath');
describe("Sección de las opciones de Cechbox", ()=>{

    //Permite omitir los errores de cors que da la pagina de cypress
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });
    
    it("Check basico", () =>{
        cy.visit("https://demoqa.com/checkbox");

        // Importante recordar que type=checkbox marcara todos los checkbox de la página
        //Con be.checked comprobamos si ha funcionado
        cy.get('[type="checkbox"]').check({force: true}).should('be.checked');

        //Comprobamos que se ha desseleccionado
        cy.get('[type="checkbox"]').uncheck({force: true}).should('not.be.checked');
    })

})