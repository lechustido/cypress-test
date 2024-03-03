
require('cypress-plugin-tab')
describe("Varios asserts a probar", ()=>{

    //Permite omitir los errores de cors que da la pagina de cypress
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });
    
    it("Contains", () =>{
        cy.viewport(1900, 1200);
        cy.visit("http://www.automationpractice.pl/index.php");

        cy.get('#block_top_menu').contains("Women").click()
    })

    it("Assert find,eq", () =>{
        cy.viewport(1900, 1200);
        cy.visit("http://www.automationpractice.pl/index.php");
        cy.get('#block_top_menu').contains("Women").click()
        //Permite buscar dentro de un elemento, otro elemento
        cy.get(".product-container").find(".product-image-container").eq(0).click()
    }) 

    it.only("Assert text", () =>{
        cy.viewport(1900, 1200);
        cy.visit("http://www.automationpractice.pl/index.php");
        cy.get('#block_top_menu').contains("Women").click();
         
        cy.get(".product-container").find(".product-image-container").eq(0).click()
        

    }) 
})