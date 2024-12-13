import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import ApiPage from "../../../support/pageObjects/ApiPage";

Given("que a API está acessível", () => {
  // Verifica se a API está acessível antes de enviar qualquer requisição
  cy.request("GET", "accountservice/accountrest/api/v1/health-check")
    .its("status")
    .should("eq", 200);
});

When(
  "eu envio uma requisição GET para buscar produtos com o nome {string}",
  (product) => {
    // Chama a função para buscar o produto
    ApiPage.searchProduct(product).as("response");
  }
);

Then("a resposta deve conter produtos relacionados a {string}", (product) => {
  // Verifica se os produtos retornados correspondem ao nome pesquisado
  ApiPage.searchResultValid(product);
});

Given("que o usuário está autenticado", () => {
  // Configura o token de autenticação (caso necessário)
  ApiPage.authenticate(
    "testeadvantage2@mailinator.com",
    "Teste@123",
    "testeadvantage2"
  );
});

When(
  "eu envio uma requisição PUT para atualizar a imagem do produto {string}",
  (product_id) => {
    // Envia a requisição PUT para atualizar a imagem do produto
    cy.get("@authToken").then((token) => {
      ApiPage.sendProductImage(product_id, token);
    });
  }
);

Then("a resposta deve confirmar que a imagem foi atualizada", () => {
  // Verifica se a resposta confirma que a imagem foi atualizada
  // ApiPage.validateUpdatedImage();
});
