import 'cypress-file-upload';


require('cypress-plugin-tab')
require('cypress-xpath');
describe("Subimos imagenes", ()=>{

    //Permite omitir los errores de cors que da la pagina de cypress
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });
    
    it("Subimos un fichero a un formulario", () =>{
        cy.viewport(1900, 1200);
        cy.visit("https://demoqa.com/automation-practice-form");
        const  url= 'imagen1.jpg';

        cy.get('#uploadPicture').attachFile(url);
    })
})