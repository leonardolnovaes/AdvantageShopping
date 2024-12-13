import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../../support/pageObjects/HomePage";
import CartPage from "../../../support/pageObjects/CartPage"; // Importe a página do carrinho

Given("que o usuário pesquisou por {string} e vê os resultados", (product) => {
    HomePage.searchProduct() // Ação para abrir a barra de pesquisa
      .enterProductName(product) // Digita o nome do produto
      .searchResult(product); // Verifica se os resultados são exibidos
  });
  
  // Step: When ele escolhe o produto "<nome_do_produto>"
  When("ele escolhe o produto {string}", (product_name) => {
    HomePage.selectProduct(product_name); // Selecione o produto conforme o nome passado
  });
  
  // Step: And clica no botão "Adicionar ao carrinho"
  And('clica no botão "Adicionar ao carrinho"', () => {
    HomePage.addToCart(); // Ação para adicionar o produto ao carrinho
  });
  
  // Step: Then o produto "<nome_do_produto>" deve ser exibido no carrinho
  Then("o produto {string} deve ser exibido no carrinho", (product_name) => {
    CartPage.accessCart().checkProductInCart(product_name); // Verifica se o produto está no carrinho
  });
  
  // Step: And o resumo do carrinho deve mostrar as informações corretas
  And("o resumo do carrinho deve mostrar as informações corretas", () => {
    CartPage.checkCartSummary(); // Verifica se o resumo do carrinho está correto (preço, quantidade)
  });

  Given("que o usuário tem o produto {string} no carrinho", (product) => {
    // Acessa o site e adiciona o produto ao carrinho
    HomePage.accessWebSite(Cypress.config("baseUrl"))
      .searchProduct()
      .enterProductName(product)
      .selectProduct(product)
      .addToCart();
  });
  
  When("ele remove o produto {string}", (product) => {
    // Remove o produto do carrinho
    CartPage.accessCart().removeProduct(product);
  });
  
  Then("o produto {string} deve ser removido do carrinho", () => {
    // Verifica se o produto foi removido do carrinho
    CartPage.emptyCart();
  });
  
  Given("que o usuário tem o produto {string} no carrinho", (product) => {
    // Acessa o site e adiciona o produto ao carrinho
    HomePage.accessWebSite(Cypress.config("baseUrl"))
      .searchProduct()
      .enterProductName(product)
      .selectProduct(product)
      .addToCart();
  });
  
  When(
    "ele altera a quantidade do produto {string} para {string}",
    (product, quantity) => {
      // Altera a quantidade do produto no carrinho
      CartPage.accessCart().changeQuantity(product, quantity);
      HomePage.addToCart();
    }
  );
  
  Then(
    "o carrinho deve mostrar a quantidade {string} para o produto {string}",
    (quantity) => {
      // Verifica se a quantidade do produto foi alterada corretamente
      CartPage.accessCart().validateQuantity(quantity);
    }
  );
  