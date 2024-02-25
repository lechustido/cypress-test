describe("Funciones para Type", ()=>{

    //Permite omitir los errores de cors que da la pagina de cypress
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });
    
    it("Type -> Enter", () =>{
        cy.visit("https://www.google.com/?hl=es");
        cy.title().should('eq','Google');

        //Es necesario por que salta el mensaje de las cookies
        cy.get('#L2AGLb > .QS5gu').click();

        //{enter} dentro del comando permite indicar a cypress que quieres que simule el click
        // en la letra enter
        cy.get('#APjFqb').type('Cypress io {enter}');
        //Esto vale poara acceder a una etiqueta a través de su name, simplemente es otra manera de hacerlo.
        //cy.get('[name="q]"').type('Cypress io');


    })
})