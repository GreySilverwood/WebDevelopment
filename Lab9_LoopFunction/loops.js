console.log("Zaiqiang Li")

console.log("===== Example 1: For-Loop as a Counter =====")
let i = 1;
for(i; i < 5; i++){
    console.log(`Iteration = ${i}`)
}

console.log("===== Example 2: For-Loop as a Decrement Counter =====")
//create a loop counter from 10 to 0 step 1
for(let n = 10; n >= 0; n--){
    console.log(`Iteration = ${n}`)
}

console.log("===== Example 3: Condition inside the Loop =====")
//check how many even numbers are in between -5 and 5
let counter = 0;
for(let m = -5; m < 5; m++){
    console.log(`Iteration = ${m}`)
    if(m%2 === 0 && m !== 0){
        counter++
    }
}
console.log(`There is ${counter} of even numbers.`)

console.log("===== Example 4: While-Loop as a Counter =====")
//display number from 0 to 4
let p = 0
while(p <= 4){
    console.log(`Iteration = ${p}`)
    p++
}

console.log("===== Example 5: While-Loop Application =====")
//guess number game
const SECRET = 8

let guessnumber = parseInt(prompt("Guess a number between 1 and 10: "))
while(guessnumber !== SECRET){
    guessnumber = parseInt(prompt("Guess a number between 1 and 10: "))
}
console.log(`You guessed it. The number is ${SECRET}.`)

console.log("===== Example 6: While-Loop Application in a List =====")
let colors = ["magenta", "olive", "babyblue"]
let sizeofcolors = colors.length
let index = 0;
while(index < sizeofcolors){
    console.log(colors[index])
    index++
}

console.log("===== Example 7: While-Loop to Simulate a Password Lock =====")
//terminate the loop if password fails in three attempts

const password = "peterpan"
let numberattempt = 0
let userpassword = prompt("Enter a password: ")
while(userpassword !== password){
    numberattempt++
    if(numberattempt > 3){
        break
    }
    userpassword = prompt(`Attempt ${numberattempt}. Try again: `)
}

console.log("Have a good day.")

console.log("===== Example 8: Do-While Loop to Simulate a Widthdraw from a Bank Account =====")
//user try to withdraw money from an account with balance of $1000.
let withdraw = 0
let balance = 1000
do{
    withdraw = parseInt(prompt("How much do you want to withdraw?"))
    if(withdraw <= balance){
        balance = balance - withdraw
        break
    }
    else{
        console.log("Insufficient amount. Try again.")
    }
}while(withdraw > balance)

console.log(`Your new balance is ${balance}`)

console.log("===== Exercise: Simulate a Bank Transaction =====")
//simulate the collection of a pin number of 4 digits.
let pinnumber = 8916
let pinattempt = 0
let userbalance = 1000
let userpin = parseInt(prompt("Enter your pin number: "))
let userdeposit = 0
let userwithdraw = 0
while(pinnumber !== userpin){
    numberattempt++
    if(numberattempt > 3){
        console.log("You have been locked out of your account.")
        break
    }
    userpin = parseInt(prompt(`You have ${3 - pinattempt} attemps left. Try again: `))
}

console.log("Welcome User.")

//ask the user to pick a transaction: view the balance, deposit, withdraw --> Flow Control (if, else-if, else or switch statement)
let usercontrol = prompt("Select the operation you would like to process. Input the number 1 to view your balance. Input the number 2 to deposit money. Input the number 3 to withdraw an amount from your account.")

do{
    switch(usercontrol){
        case '1':
            console.log(`Your balance currently is ${userbalance}`)
            break
        case '2':
            userdeposit = parseInt(prompt(`Input the amount you would like to deposit: `))
            userbalance = userbalance + userdeposit
            break
        case '3':
            userwithdraw = parseInt(prompt(`Input the amount you would like to withdraw: `))
            userbalance = userbalance - userwithdraw
            break
    
    }

    usercontrol = prompt("Would you like to continue operations? If you would like to quit, please input the number 4.")
} while(usercontrol >= 0 && usercontrol < 4 && userattempt > 3)

console.log(`Your final balance is ${userbalance}. Have a good day.`)
//ask the user if they want another transaction

//print result
