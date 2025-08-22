//bai26
import { Product } from './bai08';

export class Order {
  products: Product[] = [];

  addProduct(product: Product) {
    this.products.push(product);
  }

  calculateTotal(): number {
    return this.products.reduce((total, p) => total + p.getPrice(), 0);
  }
}