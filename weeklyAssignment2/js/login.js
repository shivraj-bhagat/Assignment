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

let formData = localStorage.getItem("formData");
function onLogin(){
    if(!(email.value.length)){
        // console.log(email.value.length)
        event.preventDefault();
        email.setCustomValidity("Please provide email address!");
        form.reportValidity();
    } else if(!(password.value.length)) {
        password.setCustomValidity("Please provide password!");
        form.reportValidity();
    } else if(formData){
        formData = JSON.parse(formData);
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        if(email !== formData.email){
            event.preventDefault();
            alert("Email doesn't exists, Please sign up!");
        }else if(password !== formData.password) {
            event.preventDefault();
            alert("Please check your password!!!");
        }
        if(email === formData.email && password === formData.password){
            // console.log("here")
            formData = { ...formData, login: true};
            localStorage.setItem('formData', JSON.stringify(formData));
            alert("You're logged in!!!!");
            window.location.replace("/html/index.html");
        }
    } else {
        alert("Email doesn't exists, please sign up!");
        event.preventDefault();
    }
}
function redirectIfLogin(){
    let {login} = JSON.parse(localStorage.getItem("formData"));
    if(login == true){
        window.location.replace("/html/index.html");
    }
}