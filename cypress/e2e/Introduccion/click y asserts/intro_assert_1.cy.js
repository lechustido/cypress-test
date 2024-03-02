describe("Introducción a los asserts", ()=>{

    //Permite omitir los errores de cors que da la pagina de cypress
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });
    
    it("Demo de los asserts", () =>{
        cy.visit("https://demoqa.com/automation-practice-form");

        // Indica si un elemento es visible o no
        cy.get('#firstName').should("be.visible").type("Gonzalo")
        //Esto seria forzar a que no exista
        //cy.get('#userEmail').should("not.be.visible")
        cy.get('#lastName').should("be.visible").type("Carmenado")

        //Este es fundamental y nos permite saber si un campo está habilitado o no
        cy.get('#userEmail').should("be.enabled").type("Gonzalo.carmenado@iesa.es")
    })
})