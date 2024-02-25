describe("Primer test con un formulario completo", () => {

    //Permite omitir los errores de cors que da la pagina de cypress
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    it("Probando la ventana de datos personales", () => {
        //Establece el tamaño de pantalla
        cy.viewport(1900, 1200);
        cy.visit("https://demoqa.com/automation-practice-form");

        cy.get("#firstName").type("Gonzalo");
        cy.get("#lastName").type("Carmenado");
        cy.get('#userEmail').type("Gonzalo@iesa.es");
        cy.get('#genterWrapper > .col-md-9 > :nth-child(1) > .custom-control-label').click();
        cy.get('#userNumber').type("123456789")
        cy.get('#submit').click()
        cy.wait(4000)
    })
})