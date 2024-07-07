/* SHOPPING CART */
//collect the elements
const formitem1 = document.querySelector(".formitem4")
const itemname = document.querySelector(".itemname4")
const itemdescription = document.querySelector(".itemdescription4").textContent
const saleprice = document.querySelector(".saleprice4").textContent
const imgitem1 = document.querySelector(".imgitem4").getAttribute('src')

formitem1.addEventListener("submit", function(){
    //collect the quantity
    const quantityitem1 = document.querySelector(".quantityinput4").value
    

    //set data into sessionStorage
    sessionStorage.setItem('quantityitem4', quantityitem1)
    sessionStorage.setItem('name_item4', itemname)
    sessionStorage.setItem('description_item4', itemdescription)
    sessionStorage.setItem('sale_price4', saleprice)
    sessionStorage.setItem('item_image4', imgitem1)
})