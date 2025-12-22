const student = {
  name: "Anisha",
  age: 20,
  course: "Computer Science",
  isEnrolled: true,

  sleep: ()=> {
    console.log('student');
  }
};
student.sleep();
student.job='Dev';//add
student.age=21; //update
delete student.sleep;
console.log(student.course)
console.log(student);


const person = {
  name: 'John',
  age: 90,
  habits: ['eat', 'sleep', 'code'],
  address: {
    city: 'New York',
    street: 'Main Street',
    number: 123
  },
  sleep: () => {
    console.log('person is sleeping');
  }
};


// const obj = new Object();
// obj.age = 90;
// console.log(obj);
// for (let per of Object.keys(person)) {
//   console.log(per);
// }
// console.log(Object.keys(person));

// person.job = 'Dev';
// person.age = 100;
// delete person.sleep;
// console.log(person);
const copyObject = { ...person, m: 9, age: 100 };

console.log(copyObject);


const fields = ['page', 'search', 'sort'];

const obj = {
  page: 1,
  search: 'hello',
  sort: 'ascending',
  rating: 5,
  title: 'great'
};
fields.forEach((f) => {
  delete obj[f]
})
console.log(obj);

// function User () {
//     this.name = 'anisha';

// }

// const user1 = new User();
// console.log(user1);


function User(name, age) {
  this.name = name;
  this.age = age;
}

const user1 = new User('ram', 90);
const user2 = new User('shyam', 100);
console.log(user1, user2);



function Car(name, brand, color) {
  this.name = name;
  this.brand = brand;
  this.color = color;
}

const car1 = new Car('Corolla', 'Toyota','White');

console.log(car1);
