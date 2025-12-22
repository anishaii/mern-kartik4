// Task 1:
// Given a string "Hello JavaScript", extract only the word "JavaScript" using a string method.
const ext = "Hello JavaScript";
const extract = ext.split(" ")[1];
console.log(extract);

// Task 2:
// Convert the string "frontend developer" into uppercase.
const dev = "fronend developer";
console.log(dev.toUpperCase);

// Task 3:
// Check whether the string "React is great" contains the word "great".
const gre ="React is great";
console.log(gre.includes('great'));

// Task 4:
// Replace the word "bad" with "good" in the string "JavaScript is bad".

const goodBad = "Javascript is bad";6  
console.log(goodBad.replace('bad','good'));

// Task 5:
// Trim the extra spaces from the string "   learn js now   ".
const space = "   learn js now   ";
console.log(space.trim());


// Task 6:
// Take the string "abcdefg" and return the character at index 3.
const index = "abcdefg";
console.log(index.charAt(3));


// Task 7:
// Find the index of the first occurrence of "a" in "banana".
const str = "banana";
const ind = str.indexOf('a');
console.log(ind);

// Task 8:
// Split the string "apple,banana,grapes" into an array.
const fruits = "apple,banana,grapes";
const farray = fruits.split(',');
console.log(farray);


// Task 9:
// Using string methods, reverse the string "hello".
const rev = "hello";
const reversed = rev.split("").reverse().join("");
console.log(reversed);

// Task 10:
// Check if the string "Welcome" starts with "Wel".
const welcome = "Welcome"
console.log(welcome.startsWith('Wel'));

// Task 11:
// Check if the string "JavaScript" ends with "Script".
const end = "JavaScript";
console.log(end.endsWith('Script'));

// Bonus Tasks
// Task 12:
// Count how many times letter "a" appears in "programming".
const cnt = "programming";
const count = cnt.split('a').length-1;
console.log(count);

// Task 13:
// Remove all spaces from "I am learning JS".
const spec = "I am learning JS";
console.log(spec.replaceAll(" ",""));
// Task 14:
// Capitalize the first letter of "javascript" using string methods.
const cap1 = "javascript";
const cap2 = cap1.charAt(0).toUpperCase()+cap1.slice(1);
console.log(cap2);

const name = "Asha";
const age = 27;
// Asha is 27 years old.
 const nameAge = `${name} is ${age} years old`;
 console.log(nameAge);

const temperature = 20;
const value = 2;
const pizza = 'pizza';
const  pasta = 'pasta';

const all = `the temperature is ${temperature} `
console.log(all);

const add = `${value} plus ${value} makes ${value + value}  `;
console.log(add);

const food = `I like ${pizza} and ${pasta}`;
console.log(food);
//Using const x = 5, y = 3; craft a template string that shows:
//5 + 3 = 8
const x = 5;
const y = 3;
const sum = `${x} + ${y} = ${x +y}`;
console.log(sum);

