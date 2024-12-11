Feature: Fluxo de Compra no Advantage Online Shopping

Scenario: Realizar a busca de um produto
  Given que o usuário está na página inicial do site Advantage Online Shopping
  When ele clica na barra de busca
  And digita "laptop"
  Then uma lista de produtos relacionados a "laptop" deve ser exibida
[Link para Evidência]("../../docs/screenshots/web/evidencia_busca_produto.png")

Scenario: Adicionar produto ao carrinho
  Given que o usuário realizou uma busca por "laptop" e visualiza os resultados
  When ele seleciona um "Laptop X"
  And clica no botão "Add to Cart"
  Then o produto deve ser adicionado ao carrinho e o mini carrinho deve ser mostrado com o produto
[Link para Evidência]("../../docs/screenshots/web/evidencia_produto_adicionado.png")


Scenario: Validar produtos no carrinho na tela de pagamento
  Given que o usuário adicionou produtos ao carrinho
  When ele navega para a tela de pagamento
  Then os produtos devem estar listados corretamente com preços e quantidades
[Link para Evidência]("../../docs/screenshots/web/evidencia_validacao_carrinho.png")

Scenario: Remover produto do carrinho
  Given que o usuário adicionou produtos ao carrinho
  When ele navega para a tela do carrinho
  And clica no botão "Remove" ao lado do produto
  Then o produto deve ser removido e a lista de produtos deve ser atualizada
[Link para Evidência]("../../docs/screenshots/web/evidencia_quantidade_atualizada.png")

Scenario: Alterar quantidade de produtos no carrinho
  Given que o usuário adicionou produtos ao carrinho
  When ele navega para a tela do carrinho
  And clica em "Edit"
  And altera a quantidade do produto para "2"
  And clica em "Add to Cart"
  Then a quantidade do produto deve ser atualizada no carrinho
  And o preço total deve refletir a nova quantidade
[Link para Evidência]("../../docs/screenshots/web/evidencia_produto_removido.png")