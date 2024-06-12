console.log("Zaiqiang Li")
console.log("===== Example 1: If Statement =====")
let day = true;

if(day){
    console.log("Good morning")
}

console.log("===== Example 2: If-Else Statement =====")
let n1 = 8, n2 = 10;
if(n1 === n2){
    console.log("They are equal")
} else {
    console.log("They are different")
}

// "===" checks for the exact data type and the same value while "==" checks for the value

console.log("===== Example 3: Multiway Conditions =====")
//check if a number is positive, negative or zero

let number = "%"
if (number > 0){
    console.log(`Number ${number} is positive.`)
}
else if(number < 0){
    console.log(`Number ${number} is negative.`)
}
else if (number === 0){
    console.log(`The number is zero.`)
}
else{
    console.log(`${number} is undefined.`)
}

console.log("===== Example 4: Multiway Condition Statement in Prompt Function =====")
//check if a user enters a number, didn't enter anything, or pressed cancel button
let n = prompt("Enter a number: ")

if(n===null){
    console.log("The cancel button was pressed.")
}
else if(n===""){
    console.log("The OK button was pressed")
}
else if(isNaN(n)){
    console.log(`${n} is a string.`)
}
else{
    console.log(`${n} is a number.`)
}

console.log("===== Example 5: Nested Conditional Statement =====")
//check if a password has at least 6+ characters and no space
let password = prompt("Enter a password: ")

//to find the number of characters in a string, we use the method .length
if(password.length >= 6){
    console.log(`Password ${password} has ${password.length} characters.`)
    if(password.indexOf(" ") === -1){
        console.log(`Password ${password} has NO SPACE`)
    }
    else{
        console.log(`Password ${password} HAS A SPACE`)
    }
}
else{
    console.log(`Password ${password} has less than 6 characters`)
}

console.log("===== Exercise =====")

let m = prompt("Enter a value: ")

if(m > 0){
    console.log(`${m} is a positive value.`)
}
else if(m < 0){
    console.log(`${m} is a negative value.`)
}
else if(isNaN(m)){
    console.log(`${m} is a string.`)
}
else if(m === 0){
    console.log(`${m} is zero.`)
}

console.log("===== Example 6: List =====")
let colors =["yellow", "magenta", "red", "olive", "orange", "baby blue", "hot pink"]
//all list has an index number that start with 0 (leftmost)
console.log(`The third color is ${colors[2]}`)

let selectcolor = prompt("Example 6: Select a color using an index number")

switch(selectcolor){
    case '0':
        console.log(`Selected color is ${colors[0]}.`)
        break
    case '1':
        console.log(`Selected color is ${colors[1]}.`)
        break
    case '2':
        console.log(`Selected color is ${colors[2]}.`)
        break
    case '3':
        console.log(`Selected color is ${colors[3]}.`)
        break
    case '4':
        console.log(`Selected color is ${colors[4]}.`)
        break
    default:
        console.log("Color is not on the list.")
}

console.log("===== Example 7: String =====")
let greeting = "Good Evening"
console.log(`The seventh character ${greeting[6]}`)
