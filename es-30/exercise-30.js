class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  static fromJson(item) {
    const {id, firstName, lastName, age} = JSON.parse(item);
    return new Person(id, firstName, lastName, age);
  }

  toJson() {
    return JSON.stringify(this);
  }

}

const json = '{"id":1,"firstName":"Mario","lastName":"Rossi","age":25}';
const developer = Person.fromJson(json);
console.log(developer);

