import {commonFunctions} from "../../../commonmethods/CommonMethods";

describe('login on swag labs', () => {
    it('Test login, logout features on swag labs', () => {
        commonFunctions.login(Cypress.env('STANDARD_USERNAME'), Cypress.env('STANDARD_USERNAME_PASSWORD'))
        commonFunctions.clickOnElement('[class="bm-burger-button"]');
        commonFunctions.assertText('[id="logout_sidebar_link"]');
        commonFunctions.clickOnElement('[id="logout_sidebar_link"]');
        commonFunctions.assertText('[id="login-button"]');
    });

    it('Test complete checkout feature', () => {
        commonFunctions.login(Cypress.env('STANDARD_USERNAME'), Cypress.env('STANDARD_USERNAME_PASSWORD'));
        commonFunctions.assertAddToCart('[class="btn_primary btn_inventory"]');
        commonFunctions.clickOnFirstElement('.btn_primary.btn_inventory');
        commonFunctions.clickOnElement('.shopping_cart_link.fa-layers.fa-fw');
        commonFunctions.clickOnElement('.btn_action.checkout_button');
        commonFunctions.typeText('Magureanu');
        commonFunctions.typeLastName('Bogdan-Laurentiu');
        commonFunctions.typeZipCode('245500');
        commonFunctions.clickOnElement('.btn_primary.cart_button')
        commonFunctions.clickOnElement('.btn_action.cart_button')
    });
});
