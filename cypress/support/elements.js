const elements = {
  searchButton: "#menuSearch",
  searchBar: "#autoComplete",
  titleSearch: "h3.roboto-medium.ng-binding",
  productLink: (productName) =>
    `p.roboto-regular.ng-binding:contains("${productName}")`,
  productName: "p.roboto-regular.ng-binding",
  productNameDetails: "#Description > .roboto-regular",
  cartButton: ".fixedBtn > .roboto-medium",
  cartProductName: ".productName",
  cartMenu: "#shoppingCartLink",
  removeButton: ".remove",
  editButton: ".edit",
  emptyCart: ".bigEmptyCart > .roboto-bold",
  checkoutButton: "#checkOutButton",
  productUnitPlus: ".plus",
  quantityProductCart: ".quantityMobile .ng-binding",
  productDetailsCheckout: (productName) =>
    `#userCart > #toolTipCart table > tbody:contains("${productName}")`,
};

export default elements;
