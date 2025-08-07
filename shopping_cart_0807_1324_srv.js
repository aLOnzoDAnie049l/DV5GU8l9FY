// 代码生成时间: 2025-08-07 13:24:17
class ShoppingCart {
    constructor() {
        // Initialize an empty array to store cart items
        this.items = [];
    }

    /**
     * Adds an item to the cart
     *
     * @param {Object} item - The item to add to the cart with 'id', 'name', 'price' properties
     */
    addItem(item) {
        if (!item.id || !item.name || !item.price) {
            throw new Error('Item must have id, name, and price properties.');
        }
        this.items.push(item);
        console.log(`Added item: ${item.name} to the cart`);
    }

    /**
     * Removes an item from the cart by id
     *
     * @param {number} id - The id of the item to remove
     */
    removeItem(id) {
        const index = this.items.findIndex(item => item.id === id);
        if (index === -1) {
            throw new Error('Item not found in the cart.');
        }
        this.items.splice(index, 1);
        console.log(`Removed item with id: ${id} from the cart`);
    }

    /**
     * Calculates the total cost of all items in the cart
     *
     * @returns {number} - The total cost
     */
    calculateTotal() {
        const total = this.items.reduce((sum, item) => sum + item.price, 0);
        console.log(`Total cost of items in the cart: $${total}`);
        return total;
    }

    /**
     * Empties the cart
     */
    clearCart() {
        this.items = [];
        console.log('Cart has been cleared.');
    }
}

// Example usage:
try {
    const cart = new ShoppingCart();
    cart.addItem({ id: 1, name: 'Item 1', price: 99.99 });
    cart.addItem({ id: 2, name: 'Item 2', price: 199.99 });
    console.log(`Total cost: $${cart.calculateTotal()}`);
    cart.removeItem(1);
    console.log(`Total cost after removal: $${cart.calculateTotal()}`);
    cart.clearCart();
} catch (error) {
    console.error(error.message);
}