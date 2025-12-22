// let i =0;
// while (i<20){
//     console.log('hello');
// }

// let i =0;
// while (i<20){
//     console.log('hello');
//     i++;
// }

//total
let i = 0;

while (i < 10) {

  i++;
  console.log(` ${i}`);
}
//even
let j = 0;

while (j < 10) {
    if(j%2==0){
        console.log(`${j}`)
    }
   j++;
}
//odd
// let k = 0;

// while (k < 10) {
//     if(k%2!=0){
//         console.log(`${k}`)
//     }
//    k++;
// }


// let l = 0;

// while (l > 10) {

//   l++;
//   console.log(`hello ${l}`);
// }
// do {
//   l++;
//   console.log(`hello ${l}`);
// } while (l > 10)

for (let i = 1; i <= 20; i++) {
    if(i%2==0){
        console.log(`even ${i}`);
    }else{
        console.log(`odd ${i}`)
    }

}

for(let num =0; i<10;num++){
    if(num==4){
        break;
    }
    console.log(num);
}

// for i from 1 to 15
//     if i is divisible by 3 and 5
//         print "fizz buzz"
//     otherwise if i is divisible by 3
//         print "fizz"
//     otherwise if i is divisible by 5
//         print "buzz"
//     otherwise
//         print i

for(let char=1; char<=15; char++){
    console.log(char);

    if(char % 3 && char %5){
        console.log('fizz buzz');
    }else if(char %3){
        console.log('fizz');
    }else if(char %5){
        console.log('buzz');
    }else{
        console.log('i');
    }
        
}

const persons = ['ram', 'shyam', 'hari'];
// forEach, map, find, filter, reduce


for (let n in persons) {
  console.log(n);
}

for (let n of persons) {
  console.log(n);
}

//function


function greetPerson() {
  console.log('hello world');
}

const greets = (personName, age) => {
  console.log(`${personName} ${age}`);
}
greets('ram', 90);

greetPerson();


const number = (num1, num2) => {
  console.log(`${num1 +num2}`);
}
number(4, 4);
