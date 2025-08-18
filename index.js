// How to accept user input

// First way is using windows Prompt


/* 
let username;

username = window.prompt("What is your username?")

console.log(username); */

// Second way is using Using html textbox

/* let username;

document.getElementById("mySubmit").onclick = function(){
        username = document.getElementById("myText").value;
        document.getElementById("myH1").textContent = `Hello ${username}`
} */

// type conversion = change the datatype of a value to another 
//                  (strings, numbers, booleans)


/* let age = window.prompt("How old are you"); 
age = Number(age);
age+=1; */

/* 
console.log(age, typeof age); */



//  Same thing as the above just another example 


/* let x = "pizza";
let y = "pizza";
let z = "0";

x = Number(x);
y = String(y);
z = Boolean(z);


console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);
 */

// const = a variable that cant be changed

/* const PI = 3.1415;
let radius;
let circumference;

radius = window.prompt('Enter the radius of a circle');
radius = Number(radius);

circumference = 2 * PI * radius;

console.log(circumference) */


// Still on the example

/* const PI = 3.1415;
let radius;
let circumference;


circumference = 2 * PI * radius;

document.getElementById("mySubmit").onclick = function(){
        radius = document.getElementById("myText").value;
        radius = Number(radius);
        circumference = 2 * PI * radius;
        document.getElementById("myH3").textContent = circumference + "cm";
}
 */


// Counter Program

/* const  decreaseBtn = document.getElementById("decreaseBtn");
const  resetBtn = document.getElementById("resetBtn");
const  increaseBtn = document.getElementById("increaseBtn");
const  countLabel = document.getElementById("countLabel");
let count = 0;

increaseBtn.onclick = function (){
        count++;
        countLabel.textContent = count;
}
decreaseBtn.onclick = function (){
        count--;
        countLabel.textContent = count;
}
resetBtn.onclick = function (){
        count = 0;
        countLabel.textContent = count;
} */


// Math is a built-in object that provides a collection of math relate properties and method

/* let x = 3.21;
let y = 2;
let z; */

//z = Math.round(x);
//z = Math.floor(x);
//z = Math.ceil(x);
//z = Math.trunc(x);

//console.log(z);

