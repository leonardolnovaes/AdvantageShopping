import el from "../elements.js";

class CartPage {
  abrirCarrinho() {
    cy.get(el.cartButton).click();
  }

  removerProduto() {
    cy.get(el.removeButton).click();
  }

  verificarProdutoNoCarrinho(produto) {
    cy.get(el.cartProductName).should("contain.text", produto);
  }

  acessarCarrinho() {
    cy.get(el.cartMenu).click();
  }
  irParaCheckout() {
    cy.get(el.checkoutButton).click();
  }
  carrinhoVazio() {
    cy.get(el.emptyCart).should('exist').and('be.visible')
  }
  alterarQuantidade() {
    cy.get(el.editButton).should('be.visible').click()
    cy.get(el.productUnitPlus).should('be.visible').click()
  }
  validarQuantidade(quantidade) {
    cy.get(el.quantityProductCart).should("have.text", quantidade)
  }
}

export default new CartPage();
