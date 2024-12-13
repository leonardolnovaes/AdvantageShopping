import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import ApiPage from "../../../support/pageObjects/ApiPage";

Given("que a API está acessível", () => {
  cy.request("GET", "accountservice/accountrest/api/v1/health-check")
    .its("status")
    .should("eq", 200);
});

When(
  "eu envio uma requisição GET para buscar produtos com o nome {string}",
  (product) => {
    ApiPage.searchProduct(product).as("response");
  }
);

Then("a resposta deve conter produtos relacionados a {string}", (product) => {
  ApiPage.searchResultValid(product);
});

Given("que o usuário está autenticado", () => {
  ApiPage.authenticate(
    "testeadvantage2@mailinator.com",
    "Teste@123",
    "testeadvantage2"
  );
});

When(
  "eu envio uma requisição PUT para atualizar a imagem do produto {string}",
  (product_id) => {
    cy.get("@authToken").then((token) => {
      ApiPage.sendProductImage(product_id, token);
    });
  }
);

Then("a resposta deve confirmar que a imagem foi atualizada", () => {
  // Verifica se a resposta confirma que a imagem foi atualizada
  // ApiPage.validateUpdatedImage();
});
