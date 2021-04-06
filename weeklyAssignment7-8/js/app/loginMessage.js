let msg = document.getElementById("loginMessage");
function showMsg() {
    let flag = localStorage.getItem("showMsg");
    if(flag) {
        msg.style.display = "none";
    } else {
        setTimeout(function(){
            msg.style.display = "none";
        }, 3000);
        localStorage.setItem("showMsg",1);
    }
}

function onCLickMsgClose() {
    msg.style.display = "none";
    localStorage.setItem("showMsg",1);
}

showMsg();