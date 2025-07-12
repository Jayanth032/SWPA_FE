// 27
class Student {
  constructor(name, roll, grade) {
    this.name = name;
    this.roll = roll;
    this.grade = grade;
  }

  // 28
  getDetails() {
    return `${this.name} (Roll: ${this.roll}) - Grade: ${this.grade}`;
  }
}

// 29
let s1 = new Student("Riya", 101, "A");
let s2 = new Student("Aman", 102, "B");
console.log(s1.getDetails());
console.log(s2.getDetails());

// 30
class GraduateStudent extends Student {
  constructor(name, roll, grade, degree) {
    super(name, roll, grade);
    this.degree = degree;
  }

  getDegree() {
    return `${this.name} holds a degree in ${this.degree}`;
  }
}

let gs = new GraduateStudent("Abc", 201, "A+", "MCA");
console.log(gs.getDetails());
console.log(gs.getDegree());
