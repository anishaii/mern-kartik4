// Write a function that takes a number and a callback. The callback should check whether the number is even or odd.
number(6,display);
function number(num, call){
    call(num);
  

}
function display(num){

      if(num % 2 == 0){
        console.log(`${num} is even`);
    }else{
        console.log(`${num} is odd`);
    }
}

// Create a function calculate(a, b, callback) that performs addition, subtraction, multiplication, or division based on the callback passed.
calculate(4,2,displaysub);
function calculate(a,b,callback){
  
    callback(a,b);
}
function displaysum(a,b){
    console.log(`sum: ${a + b}`);
}
function displaysub(a,b){
    console.log(`subtraction: ${a - b}`);
}
function displaymul(a,b){
    console.log(`multiplication: ${a * b}`);
}
function displaydiv(a,b){
    console.log(`div: ${a/b}`);
}


// Write a function that accepts a string and a callback. The callback should return the string in uppercase.
string('hello',upcase);
function string(str,clback){
    clback(str);
}
function upcase(str){
    console.log(str.toUpperCase());
}