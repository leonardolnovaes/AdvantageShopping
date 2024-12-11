Feature: Fluxo de Compra via API no Advantage Online Shopping

Scenario: Realizar a busca de um produto
  Given que a API está disponível
  When o usuário faz uma requisição GET para "/catalog/api/v1/products/search?name=laptop"
  Then a resposta deve conter uma lista de produtos relacionados a "laptop"
  And a lista deve incluir detalhes do produto como nome, preço e o id do produto
[Link para Evidência]("../../docs/screenshots/api/evidencia_busca_produto_api.png")
 
Scenario: Adicionar produto ao carrinho
  Given que o usuário está autenticado na API
  When o usuário faz uma requisição POST para "/order/api/v1/carts/{userId}/product/{productId}/color/{color}" com os detalhes do produto
  Then a resposta deve confirmar que o produto foi adicionado ao carrinho com sucesso
  And o carrinho deve conter o produto adicionado com os detalhes corretos
[Link para Evidência]("../../docs/screenshots/api/evidencia_produto_adicionado_api.png")


Scenario: Validar produtos no carrinho 
  Given que o usuário adicionou produtos ao carrinho
  When o usuário faz uma requisição GET para "/order/api/v1/carts/{userId}"
  Then a resposta deve conter os produtos adicionados ao carrinho
  And os produtos devem ter detalhes corretos como nome, preço e quantidade
[Link para Evidência]("../../docs/screenshots/api/evidencia_validacao_carrinho_api.png")

Scenario: Atualizar a quantidade de um produto no carrinho
  Given que o usuário adicionou produtos ao carrinho
  When o usuário faz uma requisição PUT para "/order/api/v1/carts/{userId}/product/{productId}/color/{color}" com a nova quantidade "5"
  Then a resposta deve confirmar que a quantidade do produto foi atualizada com sucesso
  And o carrinho deve refletir a nova quantidade e preço total
[Link para Evidência]("../../docs/screenshots/api/evidencia_quantidade_atualizada_api.png")

Scenario: Remover um produto do carrinho
  Given que o usuário adicionou produtos ao carrinho
  When o usuário faz uma requisição DELETE para "/cart/{productId}"
  Then a resposta deve confirmar que o produto foi removido com sucesso
  And o carrinho não deve mais conter o produto removido
[Link para Evidência]("../../docs/screenshots/api/evidencia_produto_removido_api.png")
