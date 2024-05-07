const productManager = new ProductManager();

// Add products
productManager.addProduct("HP Laptop", "SKU123", "HP laptop with i7 processor", 1200, "computers", 10, ["image1.jpg", "image2.jpg"], new Date(), new Date());
productManager.addProduct("Samsung Galaxy S20", "SKU456", "Samsung smartphone with 5G support", 800, "cell phones", 15, ["image3.jpg", "image4.jpg"], new Date(), new Date());

// Consult products
console.log("Products:");
console.log(productManager.products);

// Get a product by its SKU
const productBySku = productManager.getProductBySku("SKU123");
if (productBySku) {
  console.log("Product found by SKU:");
  console.log(productBySku);
} else {
  console.log("Product not found.");
}

// Edit a product
productManager.editProduct("SKU123", { price: 1300, stock: 15 });
console.log("Edited product:");
console.log(productManager.getProductBySku("SKU123"));

// Delete a product
productManager.deleteProduct("SKU456");
console.log("Products after removing:");
console.log(productManager.products);
