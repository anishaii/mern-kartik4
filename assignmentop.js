const a = 90;
const b = 100;


const result = 90 + (90 - 100);

console.log(result);

console.log(a + b);
console.log(a * b);
console.log(a - b);
console.log(a / b);
console.log(b % a);

// const a = 90;
// const b = 100;


// console.log(a > b);
// console.log(a < b);
// console.log(a >= b);
// console.log(a <= b);
// console.log(a === b);
// console.log(a !== b);]

// console.log(a > b || a < b || a === b);
// console.log(a > b && a < b && a === b);

// const age =40;
// const gender = age<20 ? 'junior' : age>50 ? 'adult'  : 'regular';
// console.log(gender);

// const age = 91;
// if(age>90){
//     console.log("la vayo vavyp")
// }

// const age = 40;
// if(age<20){
//     console.log("junior");
// }else if(age<50){
//     console.log("adult");
// }else {
//     console.log("regular");
// }

// const pos = 100;

const x = 900;
const y= 1000;
const calc = 'add';

switch (calc) {

  case 'add':
    console.log();

    break;

  case 2:
    console.log('hello jee');

    break;

  case 3:
    console.log('hello jee');

    break;

  default:
    console.log('hello jee');
    break;

}

 let ages = 90;


// age = age + 100;
ages += 100;


console.log(ages);

// reference
// const name = ['harry', 'Ron','hermoine'];
// console.log(name[4]);

// const name = ['harry', 'Ron','hermoine'];
// name[0]='Severum';
// console.log(name[0]);

// mutable and immutable array(mutuable)
//primitive are immutable and reference type is immutable
// push and unshift paxadi agadi
// pop and shit pachadu bata udauxa and agadi bata udauxa

const persons = ['ram', 'shyam', 'hari'];
// persons[0] = 'rita';
// persons.push('lio', 'mio');//pachaid thapxa
// persons.pop();//pachadi ko udauxa
// persons.shift();//agadi ko udauxa
// persons.unshift('rio')//agaid thapxa

// console.log(persons.at(0));
// console.log(persons); 

// const arr = [1, 2, 3, 4, 5];

// // copy elements from index 3..end to index 0
// arr.copyWithin(0, 3);
// // arr is now [4, 5, 3, 4, 5] find out what it does
// console.log(persons.includes('hari'));
// console.log(persons.reverse())

//console.log(persons.at(0));
//console.log(persons.concat('t', 's', 'l'));
//console.log(persons.copyWithin(2, 1))
//console.log(persons.fill(90, 1));
//console.log(persons.includes('ram'));
//console.log(persons.indexOf('ram'));
//console.log(persons.reverse());
//console.log(persons.length);
// console.log(persons.slice(1, 3));
persons.splice(2, 1);
console.log(persons);