require('cypress-plugin-tab')
describe("Examen de conocimientos", ()=>{

    //Permite omitir los errores de cors que da la pagina de cypress
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });
    
    //Debemos pinchar sobre el boton Add, rellenar todo el formulario, aceptar el envio
    //, despues editamos uno de los registros y finalmente borrar el último registro
    it("Probamos todo el ciclo de vida", () =>{
        cy.viewport(1900, 1200);
        cy.visit("https://demoqa.com/webtables");

        //Rellenamos todos los campos del formulario;
        //Ejemplo completo sin tab.
         cy.get('#addNewRecordButton').should("be.visible").click();
        cy.get('#firstName').should("be.visible").type('Gonzalo');
        cy.get('#lastName').should("be.visible").type("Carmenado");
        cy.get('#userEmail').should("be.visible").type("gonzalo.carmenado@iesa.es");
        cy.get('#age').should("be.visible").type(29);
        cy.get('#salary').should("be.visible").type(1000000);
        cy.get('#department').should("be.visible").type("Desarrollo");
        cy.get('#submit').should("be.visible").click();

        //Ejemplo completo con tab.
        // cy.get('#firstName').should("be.visible").type('Gonzalo').tab()
        // .type("Carmenado").tab().type("gonzalo.carmenado@iesa.es").tab()
        // .type(29).tab().type(1000000).tab().type("Desarrollo");
        // cy.get('#submit').should("be.visible").click();

        //Comenzamos a editar un registro
        cy.get("#edit-record-1").should('be.visible').click();
        //Muy importante este Clear!, permite borrar todo el campo.
        cy.get('#age').should("be.visible").clear().type(50);
        cy.get('#salary').should("be.visible").clear().type(4000);
        cy.get('#submit').should("be.visible").click();

        //Borramos el segundo registro
        cy.get('#delete-record-2').should('be.visible').click();
    })
})