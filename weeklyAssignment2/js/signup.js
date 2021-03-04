const form  = document.getElementsByTagName('form')[0];
let name = document.getElementById("name"),
    password = document.getElementById("password"),
    email = document.getElementById("email"),
    phone = document.getElementById("phone"),
    dob = document.getElementById("dob"),
    gender = document.getElementById("gender"),
    password2 = document.getElementById("password2");

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
        password.setCustomValidity("Please password must be length of 8 or more!");
        password.reportValidity();
    } else {
        password.setCustomValidity("");
    }
});

password2.addEventListener("keyup", function (event) {
    if (password2.value !== password.value) {
        password2.setCustomValidity("Please check confirm password!");
        password2.reportValidity();
    } else {
        password2.setCustomValidity("");
    }
});

phone.addEventListener("keyup", function (event) {
    let temp = phone.value;
    if (temp[0] == 0) {
        phone.setCustomValidity("Please enter number without 0 as first digit!");
    }else if(temp.length < 10) {
        phone.setCustomValidity("Number must be of 10 digits!");
    } else {
        phone.setCustomValidity("");
    }
    phone.reportValidity();
});

function validateForm() {
    let text;
    if(!(email.value.length)) {text = "email"}
    else if(!(password.value.length)) {text = "password"}
    else if(!(password2.value)){text = "confirm password"}
    else if(!(dob.value)) {text = "date of birth"}
    else if(!(phone.value)) {text = "phone"}
    else if(!(name.value)) {text = "name"}
    else if(!(gender.value.length)) {text = "gender"}
    
    if(text.length){
        document.getElementById("error").innerHTML = "please provide " + text;
        return false;
    } else {
        return true;
    }
}

const user = (() => {
    const fieldValue = localStorage.getItem('users');
    return fieldValue === null
      ? []
      : JSON.parse(fieldValue);
})();
    
function onSubmit(){
    let formData = {
        name: document.getElementById("name").value,
        password: document.getElementById("password").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        dob: document.getElementById("dob").value,
        gender: document.getElementById("gender").value,
    };
    if( formData.name && formData.password && formData.email && formData.phone && formData.dob && formData.gender){
        event.preventDefault();
        let flagUser = false;
        for(let i=0; i<user.length; i++){
            if(user[i].email == formData.email) {
                flagUser = true;
                break;
            }
        }
        if(!flagUser){
            user.push(formData);
            localStorage.setItem('users',JSON.stringify(user));
            alert("Signed up Successfully!!!");
            window.location.replace("index.html");
        } else {
            alert("Email already exists!!!");
        }
    } else {
        // event.preventDefault();
        form.reportValidity();
    }
}

function redirectIfLogin(){
    window.location.replace("index.html");
}