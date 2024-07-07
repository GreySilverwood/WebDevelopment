
/* SHOPPING CART */
//collect the elements
const formitem = document.querySelector(".formitem2")
const itemname = document.querySelector(".itemname2")
const itemdescription = document.querySelector(".itemdescription2").textContent
const saleprice = document.querySelector(".saleprice2").textContent
const imgitem = document.querySelector(".imgitem2").getAttribute('src')

formitem.addEventListener("submit", function(){
    //collect the quantity
    const quantityitem = document.querySelector(".quantityinput2").value
    

    //set data into sessionStorage
    sessionStorage.setItem('quantityitem2', quantityitem)
    sessionStorage.setItem('name_item2', itemname)
    sessionStorage.setItem('description_item2', itemdescription)
    sessionStorage.setItem('sale_price2', saleprice)
    sessionStorage.setItem('item_image2', imgitem)
})