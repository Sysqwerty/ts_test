class Car {
  driver: Driver | null = null;
  setDriver(driver: Driver) {
    this.driver = driver;
  }
  startJourney() {
    if (this.driver) {
      this.driver.drive();
    }
  }
}

class Driver {
  drive() {
    console.log("Driving...");
  }
}

const driver = new Driver();
const car = new Car();
car.setDriver(driver);
car.startJourney();
