let data = document.getElementById("inputDate");

function onSubmit() {
    let flag = /^(3[01]|[12][0-9]|0[1-9])\/(1[0-2]|0[1-9])\/[0-9]{4} (2[0-3]|[01]?[0-9]):([0-5]?[0-9])$/.test(data.value);
    if(flag) {
        document.getElementById("message").innerHTML = data.value;
    } else {
        document.getElementById("message").innerHTML = "Please enter the data time in DD/MM/YYYY HH:MM format";
    }
    document.getElementById("message").style.display = "block";
}

data.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      onSubmit();
    }
  });