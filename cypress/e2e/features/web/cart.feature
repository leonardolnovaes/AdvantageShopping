Feature: Fluxo de Compra no Advantage Online Shopping
  # Testes para verificar a busca, adição ao carrinho e gerenciamento de produtos no site Advantage Online Shopping.

  Background:
    Given que o usuário está na página inicial do Advantage Online Shopping

  @web
  @carrinho
  Scenario Outline: Adicionar um produto ao carrinho
    Given que o usuário pesquisou por "<produto>" e vê os resultados
    When ele escolhe o produto "<nome_do_produto>"
    And clica no botão "Adicionar ao carrinho"
    Then o produto "<nome_do_produto>" deve ser exibido no carrinho
    Examples:
      | produto | nome_do_produto              |
      | laptop  | HP PAVILION 15T TOUCH LAPTOP |

  @web
  @carrinho
  Scenario Outline: Remover um produto do carrinho
    Given que o usuário tem o produto "<nome_do_produto>" no carrinho
    When ele remove o produto "<nome_do_produto>"
    Then o produto "<nome_do_produto>" deve ser removido do carrinho
    Examples:
      | nome_do_produto            |
      | HP ENVY - 17T TOUCH LAPTOP |

  @web
  @carrinho
  Scenario Outline: Alterar a quantidade de produtos no carrinho
    Given que o usuário tem o produto "<nome_do_produto>" no carrinho
    When ele altera a quantidade do produto "<nome_do_produto>" para "<quantidade>"
    Then o carrinho deve mostrar a quantidade "<quantidade>" para o produto "<nome_do_produto>"
    Examples:
      | nome_do_produto            | quantidade |
      | HP ENVY - 17T TOUCH LAPTOP | 2          |

