class ProductManager {
  constructor() {
    this.products = [];
  }

  addProduct(name, sku, description, price, category, stock, images, creationDate, updateDate) {
    const product = new Product(name, sku, description, price, category, stock, images, creationDate, updateDate);
    this.products.push(product);
  }

  editProduct(sku, newDetails) {
    const productIndex = this.products.findIndex(product => product.sku === sku);
    if (productIndex !== -1) {
      Object.assign(this.products[productIndex], newDetails);
      this.products[productIndex].updateDate = new Date();
    }
  }

  deleteProduct(sku) {
    this.products = this.products.filter(product => product.sku !== sku);
  }

  getProductBySku(sku) {
    return this.products.find(product => product.sku === sku);
  }
}

