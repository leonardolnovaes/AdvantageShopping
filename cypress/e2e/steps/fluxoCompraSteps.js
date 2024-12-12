import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../support/pageObjects/HomePage";
import CartPage from "../../support/pageObjects/CartPage"; // Importe a página do carrinho
import CheckoutPage from "../../support/pageObjects/CheckoutPage"; // Supondo que você tenha uma página de checkout

Given(
  "que o usuário está na página inicial do Advantage Online Shopping",
  () => {
    HomePage.acessarSite("https://www.advantageonlineshopping.com/");
  }
);

When("o usuário acessa a barra de busca", () => {
  HomePage.buscarProduto();
});

And("pesquisa por {string}", (produto) => {
  HomePage.digitarNomeProduto(produto);
});

Then("os resultados relacionados a {string} devem ser exibidos", (produto) => {
  HomePage.resultadoBusca(produto);
});

// Step: Given que o usuário pesquisou por "<produto>" e vê os resultados
Given("que o usuário pesquisou por {string} e vê os resultados", (produto) => {
  HomePage.buscarProduto(); // Ação para abrir a barra de pesquisa
  HomePage.digitarNomeProduto(produto); // Digita o nome do produto
  HomePage.resultadoBusca(produto); // Verifica se os resultados são exibidos
});

// Step: When ele escolhe o produto "<nome_do_produto>"
When("ele escolhe o produto {string}", (nome_do_produto) => {
  HomePage.selecionarProduto(nome_do_produto); // Selecione o produto conforme o nome passado
});

// Step: And clica no botão "Adicionar ao carrinho"
And('clica no botão "Adicionar ao carrinho"', () => {
  HomePage.adicionarAoCarrinho(); // Ação para adicionar o produto ao carrinho
});

// Step: Then o produto "<nome_do_produto>" deve ser exibido no carrinho
Then("o produto {string} deve ser exibido no carrinho", (nome_do_produto) => {
  CartPage.acessarCarrinho();
  CartPage.verificarProdutoNoCarrinho(nome_do_produto); // Verifica se o produto está no carrinho
});

// Step: And o resumo do carrinho deve mostrar as informações corretas
And("o resumo do carrinho deve mostrar as informações corretas", () => {
  CartPage.verificarResumoCarrinho(); // Verifica se o resumo do carrinho está correto (preço, quantidade)
});

Given("que o usuário tem o produto {string} no carrinho", (produto) => {
  HomePage.buscarProduto();
  HomePage.digitarNomeProduto(produto);
  HomePage.selecionarProduto(produto);
  HomePage.adicionarAoCarrinho();
});

When("ele acessa a página de pagamento", () => {
  // Navega para a página de pagamento
  CartPage.acessarCarrinho();
  CartPage.irParaCheckout();
});

Then("o item {string} deve estar listado corretamente", (produto) => {
  // Verifica se o item está no carrinho na página de checkout
  CheckoutPage.validarProdutoNoCarrinho(produto);
});

And("os preços e as quantidades devem ser exibidos corretamente", () => {
  // Verifica se o preço e quantidade estão corretos na página de checkout
  CheckoutPage.validarPrecoQuantidade();
});

Given('que o usuário tem o produto {string} no carrinho', (produto) => {
  // Acessa o site e adiciona o produto ao carrinho
  HomePage.acessarSite("https://www.advantageonlineshopping.com/");
  HomePage.buscarProduto();
  HomePage.digitarNomeProduto(produto);
  HomePage.selecionarProduto(produto);
  HomePage.adicionarAoCarrinho();
});

When('ele remove o produto {string}', (produto) => {
  // Remove o produto do carrinho
  CartPage.acessarCarrinho();
  CartPage.removerProduto(produto);
});

Then('o produto {string} deve ser removido do carrinho', () => {
  // Verifica se o produto foi removido do carrinho
  CartPage.carrinhoVazio();
});

Given('que o usuário tem o produto {string} no carrinho', (produto) => {
    // Acessa o site e adiciona o produto ao carrinho
    HomePage.acessarSite("https://www.advantageonlineshopping.com/");
    HomePage.buscarProduto();
    HomePage.digitarNomeProduto(produto);
    HomePage.selecionarProduto(produto);
    HomePage.adicionarAoCarrinho();
  });
  
  When('ele altera a quantidade do produto {string} para {string}', (produto, quantidade) => {
    // Altera a quantidade do produto no carrinho
    CartPage.acessarCarrinho();
    CartPage.alterarQuantidade(produto, quantidade);
    HomePage.adicionarAoCarrinho();
  });
  
  Then('o carrinho deve mostrar a quantidade {string} para o produto {string}', (quantidade, produto) => {
    // Verifica se a quantidade do produto foi alterada corretamente
    CartPage.acessarCarrinho();
    CartPage.validarQuantidade(quantidade); 
  });
