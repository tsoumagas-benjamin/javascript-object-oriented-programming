// Defining our parent class for all products
class ProductProperties {
    // Constructor for the product class, requiring name, price, and quantity
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    // Method to multiply product price by quantity to return total value as a number
    getTotalValue() {
        return (this.price * this.quantity);
    }

    // Method to return product details as a string
    toString() {
        return `Product: ${this.name}, Price: \$${this.price}, Quantity: ${this.quantity}`;
    }
}

// Defining the subclass for all perishable products
class PerishableProductProperties extends ProductProperties {
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

const product1 = new PerishableProductProperties("Tuna", 2.99, 5, "2025-2-15");
const product2 = new PerishableProductProperties("Banana", 1.50, 7, "2024-12-18");
const product3 = new PerishableProductProperties("Milk", 3.99, 2, "2024-12-25");