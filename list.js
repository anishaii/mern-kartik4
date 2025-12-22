const persons = [
  {
    id: 1, 
    name: "John",
    gender: "male",
    age: 30
  },
  {
    id: 2, 
    name: "Jane",
    gender: "female",
    age: 25
  },
  {
    id: 3, 
    name: "Bob",
    gender: "male",
    age: 35
  },
  {
    id: 4, 
    name: "Alice",
    gender: "female",
    age: 28
  }
];
//destructing

// const john = persons.find(person => person.name === "John");
// console.log(john);


// const females = persons.filter(person => person.gender === "female");
// console.log(females);

// const ages = persons.reduce((a, b) => a + b.age, 0);
// console.log(ages);

// const names = persons.map(person => person.name);
// console.log(names); 

//object destructing
// const person = {
//   name: 'Max',
//   age: 23,
//   habits: ['sleep', 'dance'],
//   address: {
//     city: 'New York',
//     country: 'USA',
//     obj: {
//       nam: 'Max'
//     }
//   }
// }

// const { address: { city, country, obj: { nam } }, age, habits: [a, b], name } = person;

// console.log(nam);

// undefined saftey
let a;
// a = {
//   id: 1,
//   name: 'ram'
// };
console.log(a?.name);

// default function 
const func = (name = 'ram', age = 23) => {
  console.log(name, age);
}


// func('shyam', 100);


func();

const funcs = (name, a, b, ...args) => {
  console.log(name,args);
}
funcs('ram', 11, 22, 33, 44, 55, 66, 77, 88, 99);


//class making 
// class Person {

//   name = 'hello';
//   age = 90;

//   greet() {
//     console.log('hello jee');
//   }

// }

// const person1 = new Person();
// person1.greet();
// console.log(person1.name);

//class making from constructor
// class Person {


//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     console.log('hello jee');
//   }

// }

// const person1 = new Person('ram', 90);
// const person2 = new Person('shyam', 900);
// console.log(person1, person2);


class Car {
  name='Corolla';
  brand='toyota'

  func(){
    console.log("great for beginner driver");
  }
}

const car1 = new Car();
console.log(car1);
car1.func();


class Bank {
  constructor(name , address){
    this.name=name;
    this.address=address;

  }
  display(){
    console.log("your financial security is our concern")
  }
}
const bank1 = new Bank('Global IME','Kamladi');
console.log(bank1);
bank1.display();

