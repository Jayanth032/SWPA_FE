// 22
function Car(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
}

let car1 = new Car("Toyota", "Innova", 2020);
let car2 = new Car("Honda", "City", 2023);

// 23
Car.prototype.getDetails = function() {
  return `${this.brand} ${this.model}, ${this.year}`;
};

// 24
car1.mileage = "15km/l";

// 25
Car.prototype.honk = function() {
  console.log("Beep beep!");
};

// 26
Car.prototype.isNew = function() {
  return this.year >= 2022;
};
