import 'cypress-file-upload';
import '@4tw/cypress-drag-drop'

require('cypress-plugin-tab')
require('cypress-xpath');
describe("", ()=>{

    //Permite omitir los errores de cors que da la pagina de cypress
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });
    
    it("Drag and drop", () =>{
        cy.viewport(1900, 1200);
        cy.visit("https://the-internet.herokuapp.com/drag_and_drop");

        cy.get('#column-a').drag("#column-b")
    })
    it("Mouse over", () =>{
        cy.viewport(1900, 1200);
        cy.visit("http://way2automation.com/");

        cy.contains("Video Tutorial").trigger("mouseover")

        // la funcion invoque nos permite usar esto accediento al target
        //invoke("removeAttr", "xxxxx").click()

        //La web ya no funciona
        cy.wait(1000)
    })

    it.only("Sliders", () =>{
        cy.viewport(1900, 1200);
        cy.visit("https://demoqa.com/slider");

        // Esto es asi pero la web esta rota
        cy.get('.range-slider').trigger('change', { value: 40 });
    })
})