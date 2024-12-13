Feature: Fluxo de Compra no Advantage Online Shopping

  Background:
    Given que o usuário está na página inicial do Advantage Online Shopping

  @web
  @busca
  Scenario Outline: Buscar produtos no site

    When o usuário acessa a barra de busca
    And pesquisa por "<produto>"
    Then os resultados relacionados a "<produto>" devem ser exibidos
    Examples:
      | produto |
      | laptop  |

