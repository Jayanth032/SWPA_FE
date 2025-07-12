// 18
person.greet = function() {
  console.log(`Hello, my name is ${this.name}`);
};

// 19
let demo = {
  name: "ArrowVsFunction",
  regular: function() {
    console.log("Regular:", this.name);
  },
  arrow: () => {
    console.log("Arrow:", this.name); // undefined or global
  }
};
demo.regular(); // ✅ this works
demo.arrow();   // ❌ 'this' is incorrect

// 20
person.company = {
  name: "OpenAI",
  show: function() {
    console.log(`Company: ${this.name}`); // this.name refers to company.name
  }
};
person.company.show();

// 21
person.brokenMethod = {
  sayHi: () => {
    console.log(`Hi, ${this.name}`); // ❌ this is not bound to person
  },
  fixedMethod: function() {
    console.log(`Hi, ${this.name}`); // ✅ works
  }
};
person.brokenMethod.sayHi();  // ❌
person.brokenMethod.fixedMethod(); // ✅
