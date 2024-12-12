import el from '../elements.js';

class HomePage {
  acessarSite(url) {
    cy.visit(url);
  }

  buscarProduto() {
    cy.get(el.searchButton).click();
  }

  digitarNomeProduto(produto) {
    cy.get(el.searchBar).type(produto);
  }

  selecionarProduto(produto) {
    cy.get(el.productLink(produto)).click();
  }
  resultadoBusca(produto) {
    cy.get(el.titleSearch).should('contain.text', produto)
    cy.get(el.productName).contains(new RegExp(produto, 'i')).should('be.visible');
  }
  nomeProdutoDetalhe(produto) {
    cy.get(el.productNameDetails).should('contain.text', produto)
  }
  adicionarAoCarrinho() {
    cy.get(el.cartButton).click()
  }
}

export default new HomePage();
