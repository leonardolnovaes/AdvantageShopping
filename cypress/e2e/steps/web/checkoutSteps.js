import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../../support/pageObjects/HomePage";
import CartPage from "../../../support/pageObjects/CartPage"; // Importe a página do carrinho
import CheckoutPage from "../../../support/pageObjects/CheckoutPage"; // Supondo que você tenha uma página de checkout

Given("que o usuário tem o produto {string} no carrinho", (product) => {
    HomePage.searchProduct()
      .enterProductName(product)
      .selectProduct(product)
      .addToCart();
  });
  
  When("ele acessa a página de pagamento", () => {
    // Navega para a página de pagamento
    CartPage.accessCart().goToCheckout();
  });
  
  Then("o item {string} deve estar listado corretamente", (product) => {
    // Verifica se o item está no carrinho na página de checkout
    CheckoutPage.validateProductInCart(product);
  });
  
  And("os preços e as quantidades devem ser exibidos corretamente", () => {
    // Verifica se o preço e quantidade estão corretos na página de checkout
    CheckoutPage.validatePriceQuantity();
  });