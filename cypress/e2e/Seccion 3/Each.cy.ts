
require('cypress-plugin-tab')
require('cypress-xpath');
describe("", () => {

    //Permite omitir los errores de cors que da la pagina de cypress
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    it("Nociones basicas", () => {
        cy.viewport(1900, 1200);
        cy.visit("http://www.automationpractice.pl/index.php?id_category=3&controller=category");

        //Recorremos la lista para utilziar un vestido
        cy.get(".product-name").each(($el, index, $list) => {
            let vestido = $el.text();
            cy.log(vestido)

            if (vestido.includes("Blouse")) {
                //nO PODEMOS PONER EL GET Y EL NOMBRE DEL ELEMENTO, hay que usar una función wrap
                cy.wrap($el).click();
            }
        })
    })

    it("Reto de compra de vestidos", () => {
        cy.viewport(1900, 1200);
        cy.visit("http://www.automationpractice.pl/index.php?id_category=3&controller=category");

        
        for(let i = 1; i <= 4; i++){
            cy.get(".product-name").eq(i).click({force:true});
            //Es necesario poner el await para que detecte el cambio. Puede pasar
            cy.wait(1000)
            cy.get('#group_1').select("L").should("have.value","3")
            cy.get('.button-plus > span').should("be.visible").click()
            cy.wait(1500)
            cy.get('.exclusive > span').should("be.visible").click({force:true});
            cy.get('.button-medium > span').should("be.visible").click();
            cy.get('.sf-menu > :nth-child(1) > [href="http://www.automationpractice.pl/index.php?id_category=3&controller=category"]').click();
        }
    })

    it.only("Reto de compra de vestidos", () => {
        cy.viewport(1900, 1200);
        cy.visit("http://www.automationpractice.pl/index.php?id_category=3&controller=category");

        let datos:any= []
        cy.get("#center_column .product-name").each(($el, index, $list) => {
            if (index > 0) {
                datos[index] = $el.text();
            }
        }).then(()=>{
            for(let i = 1; i <=datos.length; i++){
                cy.get(".product-name").eq(i).click({force:true});
                //Es necesario poner el await para que detecte el cambio. Puede pasar
                cy.wait(1000)
                cy.get('#group_1').select("L").should("have.value","3")
                cy.get('.button-plus > span').should("be.visible").click()
                cy.wait(1500)
                cy.get('.exclusive > span').should("be.visible").click({force:true});
                cy.get('.button-medium > span').should("be.visible").click();
                cy.get('.sf-menu > :nth-child(1) > [href="http://www.automationpractice.pl/index.php?id_category=3&controller=category"]').click();
            }
        })

        cy.log(datos)
    })
})