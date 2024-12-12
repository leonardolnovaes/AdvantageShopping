import el from "../elements.js";

class CheckoutPage {
    validarProdutoNoCarrinho(produto) {
      cy.get(el.productDetailsCheckout(produto)).should('be.visible')
    }
  
    validarPrecoQuantidade() {
      cy.get('.price').should('be.visible');
      cy.get('.quantity').should('be.visible');
    }
  }
  
  export default new CheckoutPage();
  