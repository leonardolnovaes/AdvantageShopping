import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../../support/pageObjects/HomePage";
import CartPage from "../../../support/pageObjects/CartPage"; 
import CheckoutPage from "../../../support/pageObjects/CheckoutPage"; 

Given("que o usuário tem o produto {string} no carrinho", (product) => {
    HomePage.searchProduct()
      .enterProductName(product)
      .selectProduct(product)
      .addToCart();
  });
  
  When("ele acessa a página de pagamento", () => {
    CartPage.accessCart().goToCheckout();
  });
  
  Then("o item {string} deve estar listado corretamente", (product) => {
    CheckoutPage.validateProductInCart(product);
  });
  
  And("os preços e as quantidades devem ser exibidos corretamente", () => {
    CheckoutPage.validatePriceQuantity();
  });