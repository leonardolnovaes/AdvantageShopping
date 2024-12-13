  Feature: Fluxo de Compra no Advantage Online Shopping

  Background:
    Given que o usuário está na página inicial do Advantage Online Shopping

  @web
  @checkout
  Scenario Outline: Validar os produtos no carrinho na página de pagamento
    Given que o usuário tem o produto "<nome_do_produto>" no carrinho
    When ele acessa a página de pagamento
    Then o item "<nome_do_produto>" deve estar listado corretamente
    Examples:
      | nome_do_produto            |
      | HP ENVY - 17T TOUCH LAPTOP |