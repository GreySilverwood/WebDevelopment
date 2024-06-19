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