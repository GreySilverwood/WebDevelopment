/**
 * Monday, June 17th: Events in Javascript
 * Zaiqiang Li
 * 
 */

//onclick event
//step 1: Find and save the element that we want to apply and event to
let button1 = document.querySelector(".button1")

//step 2: Bound the click even to button1
button1.onclick = function(){
    alert("The button has been clicked.")
}

//onmouseover
document.querySelector(".linkqcc").onmouseout = () => {
    alert("QCC Link was touched.")
}

//change color
//step 1: collect and save the elements
let colorcontainer = document.querySelector(".colorcontainer")
let buttoncolor = document.querySelector(".buttoncolor")

buttoncolor.addEventListener("click", function(){
    colorcontainer.style.backgroundColor = randomcolor()
})

let randomcolor = function(){
    let redvalue = Math.floor(Math.random()*255)
    let greenvalue = Math.floor(Math.random()*255)
    let bluevalue = Math.floor(Math.random()*255)
    return `rgb(${redvalue},${greenvalue},${bluevalue})`
}

//collect the buttons 
let buttonolive = document.querySelector(".buttonolive")
let buttonorange = document.querySelector(".buttonorange")
let buttonreset = document.querySelector(".buttonreset")

//add click event to each button to change the background color to the corresponding colors respectively
buttonorange.addEventListener("click", function(){
    colorcontainer.style.backgroundColor = "orange"
})

buttonolive.addEventListener("click", function(){
    colorcontainer.style.backgroundColor = "olive"
})

buttonreset.addEventListener("click", function(){
    colorcontainer.style.backgroundColor = "white"
})

/**
 * Tuesday, June 18th
 */
/* Event Object */
//Collect the button
let buttonpressme = document.querySelector(".buttonpressme")
buttonpressme.addEventListener("click", function(e){
    //switch text content 'buttonpressme' button
    if (e.target.textContent === "Press Me!"){
        e.target.textContent = "Button was pressed."
    }
    else {
        e.target.textContent = "Press Me!"
    }

    //toggle between class 'buttonpressme' and 'buttonactive'
    e.target.classList.toggle("buttonactive")
})

/* Remove an Item from a List */
let listfruits = document.querySelector("#listfruits")
listfruits.addEventListener("click", function(event){
    if(event.target.tagName.toLowerCase() === "li"){
        event.target.remove()
    }
})

/* Prevent Default of an Event */
let visitqcc = document.querySelector(".visitqcc")
visitqcc.addEventListener("click", function(event){
    event.preventDefault()
    alert("QCC Website is offline. Try again later.")
})

/* Scroll Events */
let content = document.querySelector("#content")
let buttonscrollright = document.querySelector(".buttonscrollright")
buttonscrollright.addEventListener("click", function(){
    window.scrollBy(100,0)
})

/* Slice Photo Gallery */
let buttonleft = document.querySelector(".buttonleft")
let buttonright = document.querySelector(".buttonright")
let gallerycontainer = document.querySelector(".gallerycontainer")

buttonleft.addEventListener("click", function(){
    gallerycontainer.scrollBy({
        left: -500,
        behavior: "smooth"
    })
})

buttonright.addEventListener("click", function(){
    gallerycontainer.scrollBy({
        left: 500,
        behavior: "smooth"
    })
})

/* To Top */
const gotop = document.querySelector(".gotop")

window.addEventListener("scroll", function(){
    let pixelstop = window.scrollY;
    console.log(pixelstop)
    if(pixelstop >= 300){
        gotop.style.display = "block"
    } 
    else{
        gotop.style.display = "none"
    }
})

/**
 * Thursday. June 20th
 */
/* FORE EVENTS */
/* Input Event */
// Get reference for the fore elements
const myform = document.querySelector("#myform")

//get the <div class="greeting">
const greeting = document.querySelector(".greeting")
const greetingname = document.querySelector(".greeting p span")

myform.addEventListener("submit", function(event){
    //prevent the default fore submission behavior
    event.preventDefault()

    //start form validation, username
    const usernameinput = document.querySelector("#username")

    //collect the input text value
    const username = usernameinput.value

    //validation 1: make sure the user types a username before pressing the submit button
    if (username.trim() === ""){
        alert("Please enter a username.")
        return; //Stop further execution of the function
    }

    //if the validation passed, you can submit the data to the server
    //greeting message after the validation
    greetingname.innerHTML = username
    greeting.style.display = "block"


    //after the form is submitted, we can clear the username
    usernameinput.value = ""
})

/**
 * Password Validation
 */

//collect form elements
const passwordfield = document.querySelector("#passwordfield")
const submitbutton = document.querySelector(".submitbutton")

//collect the password error message element
const passworderror = document.querySelector(".passworderror")

//disabled button when loading the window 
window.addEventListener("load", function(){
    submitbutton.disabled = true
    submitbutton.style.backgroundColor = "lightgray"
})

//check the length of the password
passwordfield.addEventListener("input", function(){
    let numbercharacter = passwordfield.value.length
    if (numbercharacter<8){
        passworderror.textContent = "Password must have 8+ characters."
        passworderror.style.color = "red";
        passwordfield.style.border = "solid 2px red"
    }
    else{
        passworderror.innerHTML = "&#x2713;"
        passworderror.style.color = "green";
        passwordfield.style.border = "solid 2px green"
        submitbutton.disabled = false
        submitbutton.style.backgroundColor = "red"
    }
})

//atleast 50 characters and no more than 200 characters
const commentfield = document.querySelector("#commentfield")
const commenterror = document.querySelector(".commenterror")

commentfield.addEventListener("input", function(){
    let commentcharacters = commentfield.value.length
    if (commentcharacters < 50 || commentcharacters > 200){
        commenterror.textContent = "Comments must have more than 50 characters and less than 200 characters."
        commenterror.style.color = "red";
        commentfield.style.border = "solid 2px red"
    }
    /**else if (commentcharacters > 200){
        commenterror.textcontent = "Comments must have less than 200 characters."
        commenterror.style.color = "red";
        commentfield.style.border = "solid 2px red"
    } */
    else{
        commenterror.innerHTML = "&#x2713;"
        commenterror.style.color = "green";
        commentfield.style.border = "solid 2px green"
    }
})