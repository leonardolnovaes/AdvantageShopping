import el from "../pageObjects/HomePageElements";

class HomePage {
  accessWebSite(url) {
    cy.intercept('**/app/views/home-page.html').as('waitHome')
    cy.visit(url);
    cy.wait("@waitHome")

    return this;
  }

  searchProduct() {
    cy.get(el.searchButton).click();
    return this;
  }

  enterProductName(product) {
    cy.intercept('**/catalog/api/v1/categories/all_data').as('waitAllData')
    cy.intercept('**/catalog/api/v1/products/search?**').as('waitSearch')
    cy.get(el.searchBar).type(product);
    cy.wait(['@waitAllData', '@waitSearch'])
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
