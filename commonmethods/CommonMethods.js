export class CommonMethods {
    visitURl(url) {
        cy.visit(url)
    };

    clickOnElement(webElement) {
        cy.get(webElement).should('be.visible').click();
    };

    typeUserName(userName) {
        cy.get('[data-test="username"]').type(userName);
    };

    typePassword(passWord) {
        cy.get('[data-test="password"]').type(passWord);
    };

    assertText(webElement) {
        cy.get(webElement).should('be.visible');
    };

    login(userName, passWord) {
        commonFunctions.visitURl('https://www.saucedemo.com/v1/');
        commonFunctions.typeUserName(userName);
        commonFunctions.typePassword(passWord);
        commonFunctions.clickOnElement('[id="login-button"]');
    };

    clickOnFirstElement(webElement)  {
        cy.get(webElement).first().click();
    };

    typeText(firstName) {
        cy.get('[id="first-name"]').type(firstName);
    };

    typeLastName(lastName) {
        cy.get('[id="last-name"]').type(lastName);
    };

    typeZipCode(zipCode) {
        cy.get('[id="postal-code"]').type(zipCode);
    };

    assertAddToCart(addToCart){
        cy.get(addToCart).first().should('contain', 'ADD TO CART')
    };

    
}
export const commonFunctions = new CommonMethods();