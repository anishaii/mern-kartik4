const persons = ['ram', 'shyam', 'hari'];
// forEach, map, find, filter, reduce


// const numbers = [11, 22, 33, 44, 55, 66, 77];
// let sum = 0;

// numbers.forEach((per, i) => {
//     sum+= per;
 
  

// })
// console.log(sum);



// const numbers = [11, 22, 33, 44, 55, 66, 77];

// const nN = numbers.map((n, i) => {
//   return n * 2;
// });

// console.log(nN);

// const numbers = [11, 22, 33, 44, 55, 66, 77];

// const nN = numbers.map((n, i) => {
//     if(n==77){
//         return 100;
//     }
//   return n;
// });

// console.log(nN);

// const numbers = [11, 22, 33, 44, 55, 66, 77];
// const nN = numbers.find((n, i) => {
//   return n + 100;
// });

// console.log(nN);

// const numbers = [11, 22, 33, 44, 55, 66, 77];
// const nN = numbers.find((n, i) => {
//   return n > 44;
// });

// console.log(nN);

// const numbers = [11, 22, 33, 44, 55, 66, 77];

// const nN = numbers.filter((n, i) => {
//   return n > 33;
// });

// console.log(nN);

//reversing string using reduce
const originalString = "javascript";


const n = originalString.split('');
// ['j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't']
const m = n.reduce((p, n) => {
  // p=j n=a
  // avaj
  return n + p;
})
console.log(m);

const numbers = [11, 22, 33];

const nN = numbers.reduce((a, b) => {
  // 11, 22
  // 33, 33

  return a + b;
});

console.log(nN);