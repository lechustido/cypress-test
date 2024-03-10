


require('cypress-plugin-tab')
require('cypress-xpath');
describe("Trabajamos con fechas", ()=>{

    //Permite omitir los errores de cors que da la pagina de cypress
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });
    
    it("Sin calendartio", () =>{
        cy.viewport(1900, 1200);
        cy.visit("https://demoqa.com/date-picker");

        //Clear te permite vaciar el campo. Esto solo vale cuando no hay calendario
        cy.get('#datePickerMonthYearInput').should("be.visible").clear().type("17/08/1994")


    })

    it("Con calendario", () =>{
        cy.viewport(1900, 1200);
        cy.visit("https://demoqa.com/date-picker");
        //Clear te permite vaciar el campo. Usar esto hay calendario desplegable
        cy.get('#datePickerMonthYearInput').should("be.visible").click()
        cy.get('.react-datepicker__day--016').click({force:true})
    })

})