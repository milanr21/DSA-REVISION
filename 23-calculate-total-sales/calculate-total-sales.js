// Use the given array of product object below, each with their name, price, and quantity sold. Additionally, you are give na tax rate as a percentage,. Write a function that takes in an array of product objects, along with the tax rate, and returns the total sales amount including tax.

function calculateTotalSalesWithTax(products, taxRate) {
  const totalSales = products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  const taxAmount = (totalSales * taxRate) / 100;

  const totalSalesWithTax = totalSales + taxAmount;

  return parseFloat(totalSalesWithTax.toFixed(2));
}

module.exports = calculateTotalSalesWithTax;
