let data = {
    "msisdn":"",
    "loginType":"KAIZALA",
    "groupId":"","KIS":"",
    "actionPackageId":"",
    "version":"",
    "minorVersion":""
}

let flag = 0;
let phone = document.getElementById("phone");
let msg = document.getElementById("msg");
phone.addEventListener("keyup", function (event) {
    if(phone.value.length < 12) {
        msg.innerHTML = "Please enter 12 digit phone number<br>Phone number must include country code. <br>Eg: for india, eg: 91xxxxxxxxxx";
    }else if(phone.value.length == 12) {
        msg.innerHTML = "";
        flag = 1;
    } else {
        msg.innerHTML = "Number must be of 12 digit<br>Phone number must include country code. <br>Eg: for india, eg: 91xxxxxxxxxx"
        flag = 0;
    }

    if(isNaN(phone.value)){
        msg.innerHTML = "Only numbers are allowed";
    }
});

async function onLogin() {
    let phone = document.getElementById("phone").value;
    data = {...data, "msisdn": phone};
    if(phone && flag) {
        try{
            let response = await fetch("https://netco-indo-test.nfrnds.net:20003/fmcg-dd/login", { 
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json"
                }
            });
            response = await response.json();
            // console.log(response);
            if(response.successful) {
                msg.innerHTML = "";
                setCookie(response);
            }else {
                msg.innerHTML = response.responseDesc;
            }
        } catch(e) {
            console.log(e.message);
        }
    } else if(!flag && phone.value == undefined){
        msg.innerHTML = "Please enter your 12 digit phone number<br>Phone number must include country code. <br>Eg: for india, eg: 91xxxxxxxxxx";
    }
    return false;
}

function setCookie(data) {
    let d = new Date();
    d.setTime(d.getTime() + data.expires_in);
    document.cookie = "token=" + data.token + ";" + "expires=" + d.toGMTString();
    window.location.replace("app.html");
}