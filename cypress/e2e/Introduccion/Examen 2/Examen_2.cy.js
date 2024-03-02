

require('cypress-plugin-tab')
require('cypress-xpath');
describe("", ()=>{

    //Permite omitir los errores de cors que da la pagina de cypress
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });
    
    it("", () =>{
        cy.visit("https://computer-database.gatling.io/computers");

        cy.xpath("//a[@id='add']").should('be.visible').click();
        cy.xpath("//input[@id='name']").should('be.visible').type('Mac os 23').tab()
        .type('1976-06-22').tab().type('1992-11-10');

        //Esto permise seleccionar la opción "Nokia" dentro de un select, el cual, deberá tener un ç
        // value 16
        cy.xpath("//select[@id='company']").should("be.visible").select("Nokia").should("have.value",16);
        cy.get('.primary').click();

        cy.get('#searchbox').should('be.visible').type('Mac os 23');

    })
})