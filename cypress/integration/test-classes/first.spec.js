context('Creating a demo class', () => {
    it('It should open the demo site', () =>{
        cy.visit('/');
        cy.wait(3000);
    })
     it('It should close the banner', () =>{
        cy.get('#at-cv-lightbox-close').click();
     })

     it('It should scroll to bottom of the page', () =>{
        cy.scrollTo('bottom');
})
    it('It should click on the Input Forms tab', () =>{
        cy.get(':nth-child(3) > :nth-child(1) > [href="#"]').click();
    
    })
     it('It should navigate and click on the JQuery select dropdown tab',() =>{
        cy.get(':nth-child(3) > :nth-child(1) > ul > :nth-child(7)').click();

     })
      
     it('It should scroll to the bottom of the page', () =>{
        cy.scrollTo('bottom');
     })

     it('It should click on Python on the drop with category related options', () =>{
        cy.get('#files').click();
     })
})

