const email = document.getElementById("email");
const password = document.getElementById("password");
const form  = document.getElementsByTagName('form')[0];

email.addEventListener("keyup", function (event) {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("Please enter email address!");
        email.reportValidity();
    } else {
        email.setCustomValidity("");
    }
});

password.addEventListener("keyup", function (event) {
    if (password.value.length < 8) {
        password.setCustomValidity("Please enter password & it must be up to 8 charcerter!");
        password.reportValidity();
    } else {
        password.setCustomValidity("");
    }
});

const user = (() => {
    const fieldValue = localStorage.getItem('users');
    return fieldValue === null
      ? []
      : JSON.parse(fieldValue);
})();

function onLogin(){
    if(!(email.value.length)){
        // console.log(email.value.length)
        event.preventDefault();
        email.setCustomValidity("Please provide email address!");
        form.reportValidity();
    } else if(!(password.value.length)) {
        password.setCustomValidity("Please provide password!");
        form.reportValidity();
    } else if(user.length){
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        let flagUser = false, pointer = null;
        for(let i=0; i<user.length; i++){
            if(user[i].email === email){
                flagUser = true;
                pointer = i;
                break;
            }
        }
        if(!flagUser){
            event.preventDefault();
            alert("Email doesn't exists, Please sign up!");
        }else if(password !== user[pointer].password) {
            event.preventDefault();
            alert("Please check your password!!!");
        } else {
            localStorage.setItem('login', true);
            localStorage.setItem("pointer", pointer);
            alert("You're logged in!!!!");
            window.location.replace("index.html");
        }
    } else {
        alert("Email doesn't exists, please sign up!");
        event.preventDefault();
    }
}

let login = localStorage.getItem("login") === "true" ? true : false;
function redirectIfLogin(){
    window.location.replace("index.html");
}