// Define person first
let person = {
  name: "Jayanth",
  age: 21,
  city: "Bangalore"
};

// 11
person.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

// 12
let calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  }
};

// 13
person.isAdult = function () {
  return this.age >= 18;
};

// 14
let circle = {
  radius: 5,
  area: function () {
    return Math.PI * this.radius ** 2;
  }
};

// 15
let book = {
  title: "The Alchemist",
  author: "Paulo Coelho",
  year: 1988,
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}.`;
  }
};

// 16
person.setName = function (newName) {
  this.name = newName;
};

// 17
person.printDetails = function () {
  for (let key in this) {
    if (typeof this[key] !== "function") {
      console.log(`${key}: ${this[key]}`);
    }
  }
};


person.greet();
console.log("Is adult?", person.isAdult());
console.log("Circle area:", circle.area());
console.log(book.getSummary());
person.setName("Avati");
person.printDetails();
console.log("Add:", calculator.add(5, 3));
console.log("Subtract:", calculator.subtract(5, 3));
