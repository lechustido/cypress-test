
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

    it("Assert text comprobando que es vestido es nuevo y el precio", () =>{
        cy.viewport(1900, 1200);
        cy.visit("http://www.automationpractice.pl/index.php");
        cy.get('#block_top_menu').contains("Women").click();
         
        cy.get(".product-container").find(".product_img_link").eq(0).click(20,20)
        
        cy.get('#product_condition .editable').then((valor)=>{
            let estado = valor.text();
            cy.log(valor)
            if(estado === 'New'){
            cy.log("Es vestido es nuevo")  
            }else{
                cy.log("Es vestido es viejo")  
            }
        })

        cy.get('#our_price_display').then((e)=>{
            cy.log(e.text())
            let precio = e.text().slice(1,3)
            cy.log(precio)
            if(precio < 40) {
                cy.log("Super barato")
            }else{
                cy.log("Super caro")
            }
        })
        
    }) 

    it("Assert Contains y have .text", () =>{
        cy.viewport(1900, 1200);
        cy.visit("https://demoqa.com/automation-practice-form");

        //La diferencia es que contains no necesita que copincida al 100% el texto
        //Con que este es suficiente
        cy.get('.text-center').should("have.text", "Practice Form")
        cy.get('.text-center').should("contains.text", "Practice")
    }) 

    it("Assert have + then", () =>{
        cy.viewport(1900, 1200);
        cy.visit("https://demoqa.com/automation-practice-form");

    
        cy.get('.text-center').should("contain.text", "Practice Form").then(
        (e)=>{
            cy.get('#submit').click()
        }
        )
    
    }) 

    it("Assert have.class", () =>{
        cy.viewport(1900, 1200);
        cy.visit("https://demoqa.com/automation-practice-form");

        //Lo mismo pero con clases css
        cy.get('.text-center').should("have.class", "text-center").then(
        (e)=>{
            cy.get('#submit').click()
        }
        )
    }) 

    //te permite concatenar
    it("Assert have.class y la funcion and", () =>{
        cy.viewport(1900, 1200);
        cy.visit("https://demoqa.com/automation-practice-form");

        //Esto permite hacer que las 2 se cumplan antes de seguir
        cy.get('.text-center').should("be.visible").and("have.class", "text-center").then(
        (e)=>{
            cy.get('#submit').click()
        }
        )
    }) 

    it.only("Assert length", () =>{
        cy.viewport(1900, 1200);
        cy.visit("https://demoqa.com/webtables");

        //Permite contar las lineas de una tabla 
        cy.get(".rt-tr  ").should("have.length",11)
    }) 


})