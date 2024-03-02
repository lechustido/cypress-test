describe("Sección 1 -> Validando el titulo", ()=>{

    //Permite omitir los errores de cors que da la pagina de cypress
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });
    
    it("Test validar el titulo de la página", () =>{
        cy.visit("https://demoqa.com/text-box");

        // Permite validar el titulo de la pagina. Esta estructura es muy tipica
        cy.title().should('eq','DEMOQA');
    })
})