describe("Comienzo del curso de cypres, sección 1", ()=>{

    //Permite omitir los errores de cors que da la pagina de cypress
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });
    
    it("Mi primer test -> A probar", () =>{
        cy.log("Hola mundo");
        // Permite esperar un tiempo determinado para ejecutar el siguiente comando, está en milisegundos.
        cy.wait(1000)
    })

    it("Segundo test -> campo Name", () =>{
        cy.viewport(1900, 1200);
        //Permite navegar a una url concreta
        cy.visit("https://demoqa.com/text-box");
        
        //Con esto obtienes un elemento a través de su id. Idealmente, siempre se deberia acceder a el a través de un id.
        cy.get("#userName").type("Gonzalo");
        cy.wait(1000)
    })
})