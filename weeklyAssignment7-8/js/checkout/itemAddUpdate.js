async function onAddition(id) {
    let quant, price;
    for (index in cart) {
        if(cart[index].productId == id) {
            quant = cart[index].quantity;
            price = cart[index].price;
            quant++;
            cart[index].quantity++;
        }
    }
    localStorage.setItem("cart",JSON.stringify(cart));
    document.getElementById(`quan${id}`).children[0].innerHTML = quant;
    totalPrice += parseInt(price);
    document.getElementById("totalPrice").innerHTML = totalPrice;
}


async function onSubtraction(id) {
    let price, flag = 0;
    let quant = parseInt(document.getElementById(`quan${id}`).children[0].innerHTML);
    for (index in cart) {
        if(quant == 1 && cart[index].productId == id) {
            price = cart[index].price;
            cart.splice(index,1);
            document.getElementById(`pro${id}`).innerHTML = "";
        } else if(cart[index].productId == id) {
            quant--;
            cart[index].quantity--;
            price = cart[index].price;
            flag = 1;
        }
    }
    localStorage.setItem("cart",JSON.stringify(cart));
    if(flag) document.getElementById(`quan${id}`).children[0].innerHTML = quant;
    totalPrice -= parseInt(price);
    document.getElementById("totalPrice").innerHTML = totalPrice;
}