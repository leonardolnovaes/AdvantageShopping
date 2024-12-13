Feature: Fluxo de Compra via API no Advantage Online Shopping

  @api
  Scenario Outline: Buscar produto pela API
    Given que a API está acessível
    When eu envio uma requisição GET para buscar produtos com o nome "<produto>"
    Then a resposta deve conter produtos relacionados a "<produto>"

    Examples:
      | produto |
      | laptop  |

  @api
  Scenario Outline: Atualizar a imagem de um produto
    Given que o usuário está autenticado
    When eu envio uma requisição PUT para atualizar a imagem do produto "<product_id>"
    Then a resposta deve confirmar que a imagem foi atualizada

    Examples:
      | product_id |
      | 7          |