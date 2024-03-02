
require('cypress-plugin-tab');
require('cypress-xpath');
describe("Probamos los distintos tipos de selectores, cada uno tiene su particularidad. Puedes combinarlos para solucionar los problemas", () => {

    //Permite omitir los errores de cors que da la pagina de cypress
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    it("Seleccionando por id", () => {
        cy.visit("https://demoqa.com/text-box");
        cy.get('#userName').should('be.visible').type('Gonzalo');
        cy.get('#userEmail').should('be.visible').type('Gonzalo');
    })

    it("Seleccionando por atributo", () => {
        cy.visit("https://demoqa.com/text-box");
        // Con esto le indicamos que hay que buscar el texto Full Name en cualquier
        // Elemento cuyo placeholder coincida
        cy.get("[placeholder='Full Name']").should('be.visible').type('Gonzalo')
       
    })

    // Requiere instalación de cypress-xpath y su require
    it("Seleccionando por x-path", () => {
        cy.visit("https://demoqa.com/text-box");

        cy.xpath('//*[@id="userName"]').should('be.visible').type('Gonzalo Carmenado')
    })

    //Recuerda utilizar lo menos posible es selector por clase.
    it("Seleccionando por contains", () => {
        cy.visit("https://demoqa.com/automation-practice-form");

        cy.get(".custom-control-label").contains("Female").click();
    })

    //La principal ventaja de este es su velocidad.
    it.only("Seleccionando por selector", () => {
        cy.visit("https://demoqa.com/automation-practice-form");

        cy.get("#userNumber").type("123456789");
    })

    
})