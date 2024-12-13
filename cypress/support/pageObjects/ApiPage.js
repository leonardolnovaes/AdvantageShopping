class ApiPage {
  searchProduct(product) {
    return cy
      .request({
        method: "GET",
        url: `catalog/api/v1/products/search?name=${product}`,
      })
      .then((response) => {
        expect(response.status).to.eq(200);
        return response;
      });
  }

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
        expect(response.status).to.eq(200); 
        const token = response.body.statusMessage.token; 
        cy.wrap(token).as("authToken");
      });
  }

  chooseRandomImage() {
    return cy.fixture("imagesList.json").then((images) => {
      const imageRandom = images[Math.floor(Math.random() * images.length)];
      return `images/${imageRandom}`;
    });
  }

  sendProductImage(product_id, token) {
    this.chooseRandomImage().then((imagePath) => {
      cy.fixture(imagePath, "base64").then((image) => {
        const blob = Cypress.Blob.base64StringToBlob(image, "image/jpeg"); 

        const formData = new FormData();
        formData.append("file", blob, imagePath.split("/").pop());

        const url = `/catalog/api/v1/product/image/881338024/1?product_id=${product_id}`; 

        cy.request({
          method: "POST",
          url: url,
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData, 
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
        produto.imageUrl = imageId;

        cy.request({
          method: "PUT",
          url: `/catalog/api/v1/products/${product_id}`,
          headers: {
            Authorization: `Bearer ${token}`, 
          },
          body: produto,
          failOnStatusCode: false,
        }).then((response) => {
          expect(response.status).to.eq(200); 
          cy.log("Produto atualizado com a nova imagem!", response.body);
        });
      });
    });
  }

  searchResultValid(product) {
    cy.get("@response").then((response) => {
      expect(response.body).to.have.length.greaterThan(0);

      response.body[0].products.forEach((item) => {
        expect(item.productName.toLowerCase()).to.include(
          product.toLowerCase()
        );
      });
    });
  }
}

export default new ApiPage();
