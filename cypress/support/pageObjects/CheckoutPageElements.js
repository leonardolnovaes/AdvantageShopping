const elements = {
  productDetailsCheckout: (productName) =>
    `#userCart > #toolTipCart table > tbody:contains("${productName}")`,
};

export default elements;
