
require('cypress-plugin-tab')
require('cypress-xpath');
describe("Probamos las distintas interacciones de los select", ()=>{

    //Permite omitir los errores de cors que da la pagina de cypress
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });
    
    it("Validando el select", () =>{
        cy.viewport(1900, 1200);
        cy.visit("https://demoqa.com/select-menu");

        //Es muy importante asegurarse siempre de que se obtiene el valor correctamente.
        //Recuerda que el valor es el campo value del select, no lo que se ve por pantalla
        cy.get("#oldSelectMenu").should("be.visible").select("Blue").should("have.value","1")
    })

    it("Otros detalles", () =>{
        cy.viewport(1900, 1200);
        cy.visit("https://google.com");

        cy.get('#L2AGLb').should('be.visible').click()
        cy.get('#APjFqb').should('be.visible').type('Ferrari {enter}');

        cy.xpath("(//span[contains(.,'Imágenes')])[1]").click()
      
    })

    it.only("Multiples select", () =>{
        cy.viewport(1900, 1200);
        cy.visit("https://demoqa.com/select-menu");
        //Esto funciona, pero la web esta bugeada 
       // cy.xpath("(//div[@class=' css-1hwfws3'])[3]").should('be.visible').select(["Green,Blue"])
      
    })
})