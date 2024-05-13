// Subclass Motorcycle inheriting from Vehicle
class Motorcycle extends Vehicle {
    // Additional property specific to Motorcycle
    private type: string;

    // Constructor to initialize properties of Motorcycle and Vehicle
    constructor(brand: string, model: string, year: number, type: string) {
        super(brand, model, year);
        this.type = type;
    }

    // Polymorphic method overriding displayInfo from Vehicle
    displayInfo(): void {
        console.log('Motorcycle information:');
        super.displayInfo(); // Call displayInfo method from superclass
        console.log(`Type: ${this.type}`);
    }
}
