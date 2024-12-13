# Automação de Testes - Processo Seletivo de QA

Este projeto automatiza testes funcionais e de API para o site **Advantage Online Shopping**, utilizando **Cypress** com **Cucumber**.

## Estrutura do Projeto

- **features/**: Cenários de teste divididos em **api** e **web**.
- **docs/screenshots/**: Evidências de testes organizadas por tipo (api/web).
- **cypress/**: Contém as configurações e suporte aos testes.

---

## Tecnologias Utilizadas

- **BDD**: Cucumber
- **Linguagem**: JavaScript
- **Framework**: Cypress

---

## Testes Funcionais

### Web

Testes de fluxo no site, como:

- Buscar um produto
- Adicionar ao carrinho
- Validar produtos no carrinho

**Evidências** em `/docs/screenshots/web`.

### API

Testes de API, como:

- Buscar um produto
- Adicionar ao carrinho
- Validar produtos no carrinho

**Evidências** em `/docs/screenshots/api`.

---

## Automação de Testes

Utilizamos **Cypress** com **Cucumber** para descrever cenários em **Gherkin**. A estrutura de testes é:

- **Web**: Page Object Pattern.
- **API**: Programação Orientada a Objetos (POO).

---

## Instalação e Execução

1. Clone o repositório:

   ```bash
   git clone https://github.com/leonardolnovaes/AdvantageShopping.git
   cd AdvantageShopping
   ```

2. Instale as dependências

    ```bash
    npm install
    ```

3. Execute os testes:

    ```bash
    npx cypress open
    ```

## Considerações Finais

Este projeto fornece uma base sólida para a automação de testes funcionais do **Advantage Online Shopping**, cobrindo tanto o front-end (web) quanto o back-end (API).


