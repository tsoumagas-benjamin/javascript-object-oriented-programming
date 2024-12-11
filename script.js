// Defining our parent class for all products
class Product {
    // Constructor for the product class, requiring name, price, and quantity
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    // Method to multiply product price by quantity to return total value as a number
    getTotalValue() {
        return Math.round((this.price * this.quantity) * 100) / 100;
    }

    // Method to return product details as a string
    toString() {
        return `Product: ${this.name}, Price: \$${this.price}, Quantity: ${this.quantity}`;
    }

    // Static method to apply discount to an array of products
    static applyDiscount(products, discount) {
        products.forEach(product => {
            product.price = Math.round((product.price * (1 - discount)) * 100) / 100;
        });
        console.log(products);
    }
}

// Defining the subclass for all perishable products
class PerishableProduct extends Product {
    // Constructor for the perishable product subclass, inherits from the parent class with expiration date
    constructor(name, price, quantity, expirationDate) {
        super(name, price, quantity);
        this.expirationDate = expirationDate;
    }

    // Method to return perishable product details as a string
    toString() {
        return `Product: ${this.name}, Price: \$${this.price}, Quantity: ${this.quantity}, Expiration Date: ${this.expirationDate}`;
    }
}

// Defining the Store class to manage product inventory
class Store {
    // Constructor for the store class to store an array
    constructor(inventory) {
        this.inventory = inventory;
    }

    // Method to add a product to the inventory array
    addProduct(product) {
        let currentInventory = this.inventory;
        this.inventory = currentInventory.push(product);
    }

    // Method to remove a product from the inventory array
    removeProduct(product) {
        let currentInventory = this.inventory;
        this.inventory.forEach(item => {
            if (item === product) {
                this.inventory.splice(this.inventory.indexOf(item), 1);
            }
        });
    }

    // Method to get the total cost of all products in the inventory
    getInventoryValue() {
        let totalPrice = 0;
        this.inventory.forEach(product => {
            totalPrice += product.getTotalValue(); 
        });
        return totalPrice;
    }

    // Method to return a product from the inventory array if it exists, otherwise return null
    findProductByName(name) {
        let target = null;
        this.inventory.forEach(product => {
            if (product.name === name) {
                target = product;
            }
        });
        return target;
    }

    //Method to list store products
    listProducts() {
        let productArray = [];
        this.inventory.forEach(product => {
            productArray.push(product.name);
        });
        return productArray;
    }
}

// Instantiate 6 Product objects, 3 are perishable
const product1 = new PerishableProduct("Tuna", 2.99, 5, "2025-2-15");
const product2 = new PerishableProduct("Banana", 1.50, 7, "2024-12-18");
const product3 = new PerishableProduct("Milk", 3.99, 2, "2024-12-25");
const product4 = new Product("Table", 49.99, 1);
const product5 = new Product("Lamp", 15.99, 3);
const product6 = new Product("Rug", 7.99, 4);

const products = [product1, product2, product3, product4, product5, product6];

// Add all our products to a Store object
const store = new Store(products);

// Print total inventory value before applying a discount
console.log(store.getInventoryValue());

// Apply a 15% discount to some products
Product.applyDiscount(products, 0.15);

// Print total inventory value after applying a 15% discount
console.log(store.getInventoryValue());

// Find and print the details of a specific product by name
console.log(store.findProductByName("Lamp").toString());

// Remove a product from the store inventory
store.removeProduct(product2);

// List products from store inventory
store.listProducts();