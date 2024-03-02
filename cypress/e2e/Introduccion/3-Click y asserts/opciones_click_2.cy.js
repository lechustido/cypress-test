describe("Opciones de click", ()=>{

    //Permite omitir los errores de cors que da la pagina de cypress
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });
    
    it("Click sencillo", () =>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should("be.visible").type("Admin");
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should("be.visible").type("admin123");
        cy.get('.oxd-button').should("be.visible").click();
        cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').should("be.visible").click();
        cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item').should("be.visible").click();
    });
    it("Click force true", () =>{
        //Un click forzado es cuando debes hacer click sobre el botón, pero este tiene una capa invisible por encima (por ejemplo un z-index inderior al de otra capa)
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should("be.visible").type("Admin");
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should("be.visible").type("admin123");
        cy.get('.oxd-button').should("be.visible").click();
        cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').should("be.visible").click();
        //Asi se fuerza un click, si esto no funciona, es por que el selector falla
        cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item').should("be.visible").click({force:true});
    });

    it.only("Click por cordenadas", () =>{
        //Un click forzado es cuando debes hacer click sobre el botón, pero este tiene una capa invisible por encima (por ejemplo un z-index inderior al de otra capa)
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should("be.visible").type("Admin");
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should("be.visible").type("admin123");
        cy.get('.oxd-button').should("be.visible").click();

        //Asi se marcan las coordenadas dentro de un elemento
        cy.get('.orangehrm-attendance-card-bar > .oxd-icon-button > .oxd-icon').click(5,5)
    })
})