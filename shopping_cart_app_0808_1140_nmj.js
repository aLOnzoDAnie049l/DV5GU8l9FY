// 代码生成时间: 2025-08-08 11:40:33
 * It also handles errors and ensures the code is maintainable and scalable.
 */

// Define a class to represent an item
class Item {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

// Define a class to represent the shopping cart
class ShoppingCart {
  constructor() {
    this.items = [];
  }

  // Add an item to the cart
  addItem(item) {
    if (!(item instanceof Item)) {
      throw new Error('addItem: item must be an instance of Item');
    }
    this.items.push(item);
  }

  // Remove an item from the cart by id
  removeItem(itemId) {
    this.items = this.items.filter(item => item.id !== itemId);
  }

  // Get the total price of all items in the cart
  getTotalPrice() {
    return this.items.reduce((total, item) => total + item.price, 0);
  }

  // Get a list of all items in the cart
  getItems() {
    return this.items;
  }
}

// Example usage
try {
  const cart = new ShoppingCart();
  const item1 = new Item('1', 'Apple', 0.99);
  const item2 = new Item('2', 'Banana', 0.59);
  cart.addItem(item1);
c  console.log('Total Price:', cart.getTotalPrice()); // Output: 0.99
  cart.addItem(item2);
  console.log('Total Price:', cart.getTotalPrice()); // Output: 1.58
  cart.removeItem('1');
  console.log('Total Price:', cart.getTotalPrice()); // Output: 0.59
  console.log('Items in Cart:', cart.getItems().map(item => item.name)); // Output: ['Banana']
} catch (error) {
  console.error(error.message);
}