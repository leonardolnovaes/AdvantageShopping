import el from "../elements.js";

class HomePage {
  accessWebSite(url) {
    cy.visit(url);
    return this;
  }

  searchProduct() {
    cy.get(el.searchButton).click();
    return this;
  }

  enterProductName(product) {
    cy.get(el.searchBar).type(product);
    return this;
  }

  selectProduct(product) {
    cy.get(el.productLink(product)).click();
    return this;
  }

  searchResult(product) {
    cy.get(el.titleSearch).should("contain.text", product);
    cy.get(el.productName)
      .contains(new RegExp(product, "i"))
      .should("be.visible");
    return this;
  }

  nomeProdutoDetalhe(product) {
    cy.get(el.productNameDetails).should("contain.text", product);
    return this;
  }

  addToCart() {
    cy.get(el.cartButton).click();
    return this;
  }
}

export default new HomePage();
