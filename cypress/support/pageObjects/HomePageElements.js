const elements = {
  cartButton: ".fixedBtn > .roboto-medium",
  searchButton: "#menuSearch",
  searchBar: "#autoComplete",
  titleSearch: "h3.roboto-medium.ng-binding",
  productLink: (productName) =>
    `p.roboto-regular.ng-binding:contains("${productName}")`,
  productName: "p.roboto-regular.ng-binding",
  productNameDetails: "#Description > .roboto-regular",
};

export default elements;
