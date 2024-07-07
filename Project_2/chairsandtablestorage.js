
/* SHOPPING CART */
//collect the elements
const formitem1 = document.querySelector(".formitem3")
const itemname = document.querySelector(".itemname3")
const itemdescription = document.querySelector(".itemdescription3").textContent
const saleprice = document.querySelector(".saleprice3").textContent
const imgitem1 = document.querySelector(".imgitem3").getAttribute('src')

formitem1.addEventListener("submit", function(){
    //collect the quantity
    const quantityitem1 = document.querySelector(".quantityinput3").value
    

    //set data into sessionStorage
    sessionStorage.setItem('quantityitem3', quantityitem1)
    sessionStorage.setItem('name_item3', itemname)
    sessionStorage.setItem('description_item3', itemdescription)
    sessionStorage.setItem('sale_price3', saleprice)
    sessionStorage.setItem('item_image3', imgitem1)
})