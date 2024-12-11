class ProductProperties {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    getTotalValue() {
        return (this.price * this.quantity);
    }

    toString() {
        return `Product: ${this.name}, Price: \$${this.price}, Quantity: ${this.quantity}`;
    }
}

class PerishableProductProperties extends ProductProperties {
    constructor(name, price, quantity, expirationDate) {
        super(name, price, quantity);
        this.expirationDate = expirationDate;
    }

    toString() {
        return `Product: ${this.name}, Price: \$${this.price}, Quantity: ${this.quantity}, Expiration Date: ${this.expirationDate}`;
    }
}

const product1 = new PerishableProductProperties("Tuna", 2.99, 5, "2025-2-15");
const product2 = new PerishableProductProperties("Banana", 1.50, 7, "2024-12-18");
const product3 = new PerishableProductProperties("Milk", 3.99, 2, "2024-12-25");