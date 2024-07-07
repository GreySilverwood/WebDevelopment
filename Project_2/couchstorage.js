
/* SHOPPING CART */
//collect the elements
const formitem1 = document.querySelector(".formitem1")
const itemname = document.querySelector(".itemname1")
const itemdescription = document.querySelector(".itemdescription1").textContent
const saleprice = document.querySelector(".saleprice1").textContent
const imgitem1 = document.querySelector(".imgitem1").getAttribute('src')

formitem1.addEventListener("submit", function(){
    //collect the quantity
    const quantityitem1 = document.querySelector(".quantityinput").value
    

    //set data into sessionStorage
    sessionStorage.setItem('quantityitem1', quantityitem1)
    sessionStorage.setItem('name_item1', itemname)
    sessionStorage.setItem('description_item1', itemdescription)
    sessionStorage.setItem('sale_price1', saleprice)
    sessionStorage.setItem('item_image1', imgitem1)
})