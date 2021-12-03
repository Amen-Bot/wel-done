context('Creating a demo class', () => {
    it('It should open the demo site', () =>{
        cy.visit('/');
    })
    it('It should close the banner', () =>{
        cy.fixture('element-mappers').then((em) =>{
            cy.get(em.banner).click();  
    })
    })

    it('It should scroll to bottom of the page', () =>{
        cy.fixture('element-mappers').then((em) =>{
            cy.scrollTo(em.pageBottom);
    })
    })
    it('It should click on the Input Forms tab', () =>{
        cy.fixture('element-mappers').then((em) =>{
            cy.get(em.inputFormTab).click();
    })
    })
    it('It should navigate and click on the JQuery select dropdown tab',() =>{
        cy.fixture('element-mappers').then((em) =>{
            cy.get(em.jquerrySelectDropdown).should('be.visible').click();
    })
    })
    it('It should scroll to the bottom of the page', () =>{
        cy.fixture('element-mappers').then((em) =>{
            cy.scrollTo(em.pageBottom);
    })
    })
    it('It should select on Python on the drop with category related options', () =>{
        cy.fixture('element-mappers').then((em) =>{
            cy.get(em.languageDropdown).select(em.python);
    })
    })

})
