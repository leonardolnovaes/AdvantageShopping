import el from "../pageObjects/CartPageElements";

class CartPage {
  removeProduct() {
    cy.get(el.removeButton).click();
    return this;
  }

  checkProductInCart(product) {
    cy.get(el.cartProductName).should("contain.text", product);
    return this;
  }

  accessCart() {
    cy.get(el.cartMenu).click();
    return this;
  }
  goToCheckout() {
    cy.get(el.checkoutButton).click();
    return this;
  }
  emptyCart() {
    cy.get(el.emptyCart).should("exist").and("be.visible");
    return this;
  }
  changeQuantity() {
    cy.get(el.editButton).should("be.visible").click();
    cy.get(el.productUnitPlus).should("be.visible").click();
    return this;
  }
  validateQuantity(quantity) {
    cy.get(el.quantityProductCart).should("have.text", quantity);
    return this;
  }
}
export default new CartPage();
