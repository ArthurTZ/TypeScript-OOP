// Encapsulation, Abstraction, Inheritance, Polymorphism, Composition

// Base class representing a Vehicle
class Vehicle {
    // Properties are encapsulated (private) and can be accessed via methods
    private brand: string;
    private model: string;
    private year: number;

    // Constructor to initialize the properties
    constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    // Getter methods for encapsulated properties
    getBrand(): string {
        return this.brand;
    }

    getModel(): string {
        return this.model;
    }

    getYear(): number {
        return this.year;
    }

    // Abstract method to be implemented by subclasses
    displayInfo(): void {
        console.log('Vehicle information:');
        console.log(`Brand: ${this.brand}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
    }
}
