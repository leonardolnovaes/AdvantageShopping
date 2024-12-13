import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../../support/pageObjects/HomePage";

Given(
    "que o usuário está na página inicial do Advantage Online Shopping",
    () => {
      HomePage.accessWebSite(Cypress.config("baseUrl"));
    }
  );
  
  When("o usuário acessa a barra de busca", () => {
    HomePage.searchProduct();
  });
  
  And("pesquisa por {string}", (product) => {
    HomePage.enterProductName(product);
  });
  
  Then("os resultados relacionados a {string} devem ser exibidos", (product) => {
    HomePage.searchResult(product);
  });