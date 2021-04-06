function cartDetails() {
    let cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = cart.length;

    let totalPrice = 0;
    for( item in cart) {
        totalPrice += parseInt(cart[item].price) * cart[item].quantity;
    }
    let cartPrice = document.getElementById("cart-total");
    cartPrice.innerHTML = totalPrice;

    let cartContainer = document.querySelector(".cart-section");
    if(cart.length)
        cartContainer.style.display = "block";
    else
        cartContainer.style.display = "none";
}

function onCLickCart() {
    let whsElem = document.getElementById("whs");
    let whsOrgId = whsElem.options[whsElem.selectedIndex].value;
    let outletElem = document.getElementById("outl");
    let outletOrgId = outletElem.options[outletElem.selectedIndex].value;
    let data = {
        whsOrgId,
        outletOrgId
    }

    localStorage.setItem("whsDetails",JSON.stringify(data));
    window.location.replace("checkout.html");
}