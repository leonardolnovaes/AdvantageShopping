class ApiPage {
  // Função para buscar produto
  searchProduct(product) {
    return cy
      .request({
        method: "GET",
        url: `catalog/api/v1/products/search?name=${product}`,
      })
      .then((response) => {
        // Logando a resposta no console
        // Asserções
        expect(response.status).to.eq(200);
        return response; // Retornando a resposta para encadear outras ações
      });
  }

  // Função para configurar o token de autenticação
  authenticate(email, password, user) {
    return cy
      .request({
        method: "POST",
        url: "accountservice/accountrest/api/v1/login",
        body: {
          email: email,
          loginPassword: password,
          loginUser: user,
        },
      })
      .then((response) => {
        expect(response.status).to.eq(200); // Se você quiser garantir que o login foi bem-sucedido
        const token = response.body.statusMessage.token; // Ajuste ao nome real do campo do token
        cy.wrap(token).as("authToken"); // Armazena o token como um alias
      });
  }

  chooseRandomImage() {
    return cy.fixture("imagesList.json").then((images) => {
      // Seleciona uma imagem aleatória da lista de images
      const imageRandom = images[Math.floor(Math.random() * images.length)];

      // Retorna o caminho completo da imagem no diretório 'cypress/fixtures/images'
      return `images/${imageRandom}`;
    });
  }

  sendProductImage(product_id, token) {
    this.chooseRandomImage().then((imagePath) => {
      cy.fixture(imagePath, "base64").then((image) => {
        const blob = Cypress.Blob.base64StringToBlob(image, "image/jpeg"); // Ajuste o MIME type se necessário

        // Cria o FormData
        const formData = new FormData();
        formData.append("file", blob, imagePath.split("/").pop()); // Nome do campo 'file' como no cURL

        // Construa a URL com query parameter 'product_id'
        const url = `/catalog/api/v1/product/image/881338024/1?product_id=${product_id}`; // O product_id como query string

        // Envia a requisição com multipart/form-data
        cy.request({
          method: "POST",
          url: url,
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData, // Envia o FormData com o arquivo
        }).then((response) => {
          if (response.status === 200) {
            cy.log("Imagem atualizada com sucesso:", response.body);
          } else {
            cy.log("Erro ao atualizar a imagem:", response.body);
          }
        });
      });
    });
  }

  updateProductImage(product_id, token) {
    this.sendProductImage(product_id, token).then((imageId) => {
      this.getProductInformation(product_id).then((produto) => {
        // Atualiza o campo `imageUrl` com o novo ID de imagem
        produto.imageUrl = imageId;

        // Realiza o PUT para atualizar o produto
        cy.request({
          method: "PUT",
          url: `/catalog/api/v1/products/${product_id}`,
          headers: {
            Authorization: `Bearer ${token}`, // Token obtido pela autenticação
          },
          body: produto,
          failOnStatusCode: false,
        }).then((response) => {
          expect(response.status).to.eq(200); // Verifica sucesso
          cy.log("Produto atualizado com a nova imagem!", response.body);
        });
      });
    });
  }

  // Função para validar a resposta de busca
  searchResultValid(product) {
    cy.get("@response").then((response) => {
      expect(response.body).to.have.length.greaterThan(0);

      // Validando os produtos na resposta
      response.body[0].products.forEach((item) => {
        expect(item.productName.toLowerCase()).to.include(
          product.toLowerCase()
        );
      });
    });
  }
}

export default new ApiPage();
