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