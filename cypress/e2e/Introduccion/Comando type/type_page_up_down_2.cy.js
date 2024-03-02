describe("Ejemplo de type pageUp/pageDown", () => {

    //Permite omitir los errores de cors que da la pagina de cypress
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    it("Type page up", () => {
        cy.visit("https://demoqa.com/text-box");

        //De esta manera subimos la pagina como si hiciesemos scroll.
        cy.get('#userName').type('{pageup}')
    })

    it("Type page down", () => {
        cy.visit("https://demoqa.com/text-box");

        //De esta manera subimos la pagina como si hiciesemos scroll.
        cy.get('#userName').type('{pagedown}')
    })
})