describe('compare price', () => {

    it('should compare the price', () => {

        const url = 'https://www.saucedemo.com/v1/inventory.html';

        const cartUrl = 'https://www.saucedemo.com/v1/cart.html';

        cy.visit(url);

        cy.get('[class="inventory_item_price"]').first().invoke('text').as('itemPriceOnPage');

        cy.get('[class="btn_primary btn_inventory"]').first().click();

        cy.visit(cartUrl);

        cy.get('[class="inventory_item_price"]').invoke('text').then(itemPriceInCart => {
            cy.get('[class="inventory_item_price"]').then(itemPriceOnPage => {
                expect(parseFloat(itemPriceInCart)).to.equal(parseFloat('29.99'));
            });
        });
    });

});