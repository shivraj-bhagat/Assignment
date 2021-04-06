const cart = (() => {
    const fieldValue = localStorage.getItem('cart');
    return fieldValue === null
      ? []
      : JSON.parse(fieldValue);
})();

function setCart(data) {
    let flag = 1;
    for(let i=0; i<cart.length; i++){
        if(cart[i].productId == data.productId) {
            cart[i].quantity = data.quantity;
            flag = 0;
            localStorage.setItem('cart',JSON.stringify(cart));
        }
    }

    if(flag) {
        cart.push(data);
        localStorage.setItem('cart',JSON.stringify(cart));
    }
    cartDetails();
}

function updateCart(id, quantity) {
    for(let i=0; i<cart.length; i++){
        if(cart[i].productId == id) {
            cart[i].quantity = quantity;
            flag = 0;
            if(quantity == 0){
                cart.splice(i,1);
            }
            localStorage.setItem('cart',JSON.stringify(cart));
        }
    }
    cartDetails();
}

function updateProductQuantity() {
    for(let i=0; i<cart.length; i++){
        // console.log(cart[i],cart[i].productId);
        let quantity = document.getElementById(`quan${cart[i].productId}`);
        // console.log(quantity)
        if(quantity) {
            // console.log(quantity)
            quantity = quantity.children[0];
            quantity.setAttribute("data",cart[i].quantity);
            quantity.innerHTML = cart[i].quantity;
        }
    }
    cartDetails();
}

function clearCart() {
    cart.splice(0,cart.length);
    localStorage.setItem('cart',JSON.stringify(cart));
}