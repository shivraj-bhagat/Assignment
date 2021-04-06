var latitude = undefined;
var longitude = undefined;
let user = JSON.parse(localStorage.getItem("userDetails"));
let whsDetails = JSON.parse(localStorage.getItem("whsDetails"));
const cart = (() => {
    const fieldValue = localStorage.getItem('cart');
    return fieldValue === null
      ? []
      : JSON.parse(fieldValue);
})();

let totalPrice = 0;;

function formData() {
    document.getElementById("name").value = user.name;
    document.getElementById("phone").value = user.phone_number;
    for(item in cart)
        totalPrice += cart[item].price * cart[item].quantity;
    cartData();
}

function onGetLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(setPosition, showGeoError);
    } else { 
        alert("Geolocation is not supported by this browser.");
    }
}

function setPosition(position) {
    latitude = position.coords.latitude ? position.coords.latitude : 0;
    longitude = position.coords.longitude ? position.coords.longitude : 0;
}

function showGeoError(error) {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.");
        break;
    }
}

function onSubmitForm() {
    let msg = document.getElementById("formMsg");
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    msg.style.display = "none";

    if (name && phone && email && longitude && latitude) {
        if(phone.length < 12 || isNaN(phone)) {
            msg.innerHTML = "Phone number must be of 12 digit <br>It must only contain number";
            msg.style.display = "block";
        } else if(!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))) {
            msg.innerHTML = "Phone check email address";
            msg.style.display = "block";
        } else {
            let data = {
                items: [...cart],
                user_details: {
                    name: name,
                    email: email,
                    phone_number: phone,
                    latitude: latitude,
                    longitude: longitude
                },
                total_price: totalPrice,
                user_id: user.user_id,
                whsOrgId: whsDetails.whsOrgId,
                outletOrgId: whsDetails.outletOrgId
            }
            localStorage.setItem("order",JSON.stringify(data));
            console.log(data);
            msg.innerHTML = "Your order has been placed!!!";
            msg.style.display = "block";
            setTimeout( function() { 
                localStorage.removeItem("cart");
                window.location.replace("app.html"); 
            }, 5000);
        }
    } else {
        let text;
        if(!name) {
            text = "name";
        } else if(!phone){
            text = "phone number";
        } else if(!email) {
            text = "email";
        } else if((longitude == undefined || longitude == null ) && (latitude == undefined || latitude == null )) {
            text = "longitude & latitude";
        } else {
            text = "input";
        }

        msg.innerHTML = "Please check " + text + " details";
        msg.style.display = "block";
    }
}

function cartData() {
    for(product in cart) {
        cartAddItem(cart[product]);
    }
    let prodList = document.getElementById("cartBucket");
    let list = document.createElement('div');
    list.className = "cart-total-price";
    let data = `<h3>Total Price: Rs. <span id="totalPrice">${totalPrice}</sapn></h3>`;
    list.innerHTML = data;
    prodList.appendChild(list);
}

function cartAddItem(product) {
    let prodList = document.getElementById("cartBucket");
    let list = document.createElement('div');
    list.className = "cart-items";
    list.setAttribute("id",`pro${product.productId}`);
    let data = `<div class="cart-item-img">
                    <div class="item-img">
                        <img src="${product.productImg}" alt="product image">
                    </div>
                </div>
                <div class="cart-items-details">
                    <h4>${product.productName}</h4>
                    <p>Price: <span>${product.price}</span></p>
                    <div class="cart-items-quantity">
                        <div class="cart-items-minus" onclick="onSubtraction(${product.productId})">
                            <p>-</p>
                        </div>
                        <div class="cart-items-no" id="quan${product.productId}">
                            <p>${product.quantity}</p>
                        </div>
                        <div class="cart-items-plus" onclick="onAddition(${product.productId})">
                            <p>+</p>
                        </div>
                    </div>
                </div>`;
    list.innerHTML = data;
    prodList.appendChild(list);
}


formData();