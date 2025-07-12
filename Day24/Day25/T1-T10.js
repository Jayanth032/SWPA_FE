// 1
let person = {
  name: "Jayanth",
  age: 21,
  city: "Bangalore"
};

// 2
console.log(person.name);
console.log(person.age);
console.log(person.city);

// 3
console.log(person["name"]);
console.log(person["age"]);
console.log(person["city"]);

// 4
person.email = "jayanth@example.com";

// 5
person.city = "Hyderabad";

// 6
delete person.age;

// 7
for (let key in person) {
  console.log(key + ": " + person[key]);
}

// 8
let book = {
  title: "Wings of fire",
  author: "APJ AK",
  year: 1988
};

// 9
person.address = {
  street: "Main Road",
  zip: 560001
};

// 10
let students = [
  { name: "Arj", roll: 1 },
  { name: "Mra", roll: 2 },
  { name: "Ri", roll: 3 }
];
console.log(students[1].name);
