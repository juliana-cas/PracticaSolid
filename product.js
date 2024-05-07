class Product {
    constructor(name, sku, description, price, category, stock, images, creationDate, updateDate) {
      this.name = name;
      this.sku = sku;
      this.description = description;
      this.price = price;
      this.category = category;
      this.stock = stock;
      this.images = images;
      this.creationDate = creationDate;
      this.updateDate = updateDate;
      this.variations = [];
    }
  
    addVariation(variation) {
      this.variations.push(variation);
    }
  
    removeVariation(variationSku) {
      this.variations = this.variations.filter(variation => variation.sku !== variationSku);
    }
  } 
  