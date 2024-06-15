/**
 * Zaiqiang Li
 * June 15th, Function and Object
 */

console.log("Zaiqiang Li")
function msg(){
    console.log("Hello World!")
}

//function to print numbers between 1 and 3, inclusive
function printcount(){
    for(let x = 1; x <= 3; x++){
        console.log(x)
    }
}

//function that passes a name as argument
function greeting(name){
    console.log(`Welcome to Javascript, ${name}.`)
}

function fullname(firstname, lastname){
    console.log(`Welcome to Javascript, ${firstname} ${lastname[0]}.`)
}

let firstname = "Peter"
let lastname = "Pan"

fullname(firstname, lastname)

//function without parameters but returns a value
function sumxy(){
    let x = 10
    let y = -2
    return x+y
}

//function with parameters and returns a value
function sum(x,y){
    return x+y
}

//calling sum()
let s = sum(5, 10)
console.log(`The sum is ${s}`)

function checkpositive(number){
    if(number > 0){
        return true
    }
    else{
        return false
    }
}

//call the function
let n = 2
let check = checkpositive(n)
console.log(`Is number ${n} positive? ${check}`)

//save function in a variable
/*
function addition(num1, num2){
    return num1 + num2
}
*/
const addition = function(num1, num2){
    return num1 + num2 
}

/*
//regular variable function
const product = function(num1, num2){return num1*num2}
*/
//arrow function
const product = (num1, num2) => {return num1*num2}

// ANONYMOUS FUNCTION
(
    function(){
        console.log("This is an anonymous function.")
    }
)();

(
    () => {console.log("This is an anonymous function using arrow.")}
)();



//OBJECT
/*real-world objects are all around us, and they each have 
- attributes and behaviors that can describe the features that an object has.
- behaviors describe actions that an object can perform
*/

//car is the object
let car = {
    //attribute
    make: "Jeep",
    year: 2021,
    model: "Wrangler",
    startmileage: 10,
    endmileage: 50,

    //behaviors (methods, functions)
    accelerate : function(){return this.model},
    brake: function(){return this.make},
    distancetravel: function(){return this.endmileage - this.startmileage}
}

//add a method to the car object
car.start = function(){
    return `${this.make} ${this.model} is running...`
}

//add a property 'price'
car.price = 32000