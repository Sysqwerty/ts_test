class SimpleCoffee {
    cost() {
        return 10;
    }
    description() {
        return "Simple coffee";
    }
}
class CoffeeDecorator {
    constructor(coffee) {
        this.coffee = coffee;
    }
    cost() {
        return this.coffee.cost();
    }
    description() {
        return this.coffee.description();
    }
}
class MilkDecorator extends CoffeeDecorator {
    cost() {
        return this.coffee.cost() + 2;
    }
    description() {
        return this.coffee.description() + ", milk";
    }
}
class SugarDecorator extends CoffeeDecorator {
    cost() {
        return this.coffee.cost() + 1;
    }
    description() {
        return this.coffee.description() + ", sugar";
    }
}
// Client code
let coffee = new SimpleCoffee();
coffee = new MilkDecorator(coffee);
coffee = new SugarDecorator(coffee);
console.log(`${coffee.description()} - ${coffee.cost()} dollars`); // Simple coffee, milk, sugar - 13 dollars
export {};
//# sourceMappingURL=decorator.js.map