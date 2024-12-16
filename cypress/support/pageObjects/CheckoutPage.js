import el from "../pageObjects/CheckoutPageElements";

class CheckoutPage {
  validateProductInCart(product) {
    cy.get(el.productDetailsCheckout(product)).should("be.visible");
    return this;
  }

  validatePriceQuantity() {
    cy.get(".price").should("be.visible");
    cy.get(".quantity").should("be.visible");
    return this;
  }
}

export default new CheckoutPage();
