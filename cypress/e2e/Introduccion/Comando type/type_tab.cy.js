require('cypress-plugin-tab')
describe("Ejemplo de simulat un click en tabulador", () => {

    //Permite omitir los errores de cors que da la pagina de cypress
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    it("Type con tab", () => {
        cy.visit("https://demoqa.com/automation-practice-form");

        //El comando .tab() permite hacer que cypress salte al siguiente elemento clickable del DOM.
        //Esto epermite programar las pruebas de manera más rápida ya que no hay que buscar el 
        //selector nuevamente
        cy.get('#firstName').type('Gonzalo').tab()
            .type('Carmenado').tab()
            .type('gonzalo.carmenado@iesa.es');
    })
})