function clickArrow(direction) {
    let month = document.getElementById("months");
    if(month.value == 1 && direction == "-1") {
        month.value = 12;
        if(document.getElementById("years").value == 1970) 
            document.getElementById("years").value = 2030;
        else
            document.getElementById("years").value--;
    } else if(month.value == 12 && direction == "1") {
        month.value = 1;
        if(document.getElementById("years").value == 2030) 
            document.getElementById("years").value = 1970;
        else 
            document.getElementById("years").value--;

    } else {
        let currentMonth = parseInt(month.value);
        currentMonth += direction;
        month.value = currentMonth;
    }
    setDays()
}

function clickUpDown(value) {
    let element = document.getElementById("timeSection");
    element.scrollTop += value;
}