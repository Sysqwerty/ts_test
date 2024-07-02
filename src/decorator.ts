interface Coffee {
  cost(): number;
  description(): string;
}

class SimpleCoffee implements Coffee {
  cost() {
    return 10;
  }

  description() {
    return "Simple coffee";
  }
}

class CoffeeDecorator implements Coffee {
  constructor(protected coffee: Coffee) {}

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
let coffee: Coffee = new SimpleCoffee();
coffee = new MilkDecorator(coffee);
coffee = new SugarDecorator(coffee);

console.log(`${coffee.description()} - ${coffee.cost()} dollars`); // Simple coffee, milk, sugar - 13 dollars

export {};
