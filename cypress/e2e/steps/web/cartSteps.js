import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../../support/pageObjects/HomePage";
import CartPage from "../../../support/pageObjects/CartPage"; // Importe a página do carrinho

Given("que o usuário pesquisou por {string} e vê os resultados", (product) => {
    HomePage.searchProduct()
      .enterProductName(product)
      .searchResult(product);
  });
  
  When("ele escolhe o produto {string}", (product_name) => {
    HomePage.selectProduct(product_name);
  });
  
  And('clica no botão "Adicionar ao carrinho"', () => {
    HomePage.addToCart(); 
  });
  
  Then("o produto {string} deve ser exibido no carrinho", (product_name) => {
    CartPage.accessCart().checkProductInCart(product_name);
  });
  
  And("o resumo do carrinho deve mostrar as informações corretas", () => {
    CartPage.checkCartSummary(); 
  });

  Given("que o usuário tem o produto {string} no carrinho", (product) => {
    HomePage.accessWebSite(Cypress.config("baseUrl"))
      .searchProduct()
      .enterProductName(product)
      .selectProduct(product)
      .addToCart();
  });
  
  When("ele remove o produto {string}", (product) => {
    CartPage.accessCart().removeProduct(product);
  });
  
  Then("o produto {string} deve ser removido do carrinho", () => {
    CartPage.emptyCart();
  });
  
  Given("que o usuário tem o produto {string} no carrinho", (product) => {
    HomePage.accessWebSite(Cypress.config("baseUrl"))
      .searchProduct()
      .enterProductName(product)
      .selectProduct(product)
      .addToCart();
  });
  
  When(
    "ele altera a quantidade do produto {string} para {string}",
    (product, quantity) => {
      CartPage.accessCart().changeQuantity(product, quantity);
      HomePage.addToCart();
    }
  );
  
  Then(
    "o carrinho deve mostrar a quantidade {string} para o produto {string}",
    (quantity) => {
      CartPage.accessCart().validateQuantity(quantity);
    }
  );
  