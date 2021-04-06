function getCookie(cookieName) {
    let name = cookieName + "=";
    let ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

function checkCookie() {
    let token = getCookie("token");
    if (token != "") {
        window.location.replace("app.html");
    }
}

function checkCookieApp() {
    let token = getCookie("token");
    if (token == "") {
        window.location.replace("login.html");
    }
}

function checkCookieCheckout() {
    let token = getCookie("token");
    let cart = JSON.parse(localStorage.getItem("cart"));
    if( token != "" && cart.length == 0) {
        window.location.replace("app.html");
    }
}

function onLogout() {
    let token = getCookie("token");
    if(token != "") {
        document.cookie = "token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
        window.location.replace("login.html");
    }
    localStorage.clear();
}