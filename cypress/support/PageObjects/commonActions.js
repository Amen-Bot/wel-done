class PageObject{
    clickAction(element){
        cy.get(element).click();
    }
    typeAText(field, text){
        cy.get(field).type(text);
    }

    selectAValue(selector, value){
        cy.get(selector).select(value);
    }

    
}


export default PageObject 