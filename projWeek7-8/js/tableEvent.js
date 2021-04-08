const table = document.getElementById("day").getElementsByTagName('tbody')[0];
let activeDay = today.getDate();
if(activeDay<10) activeDay = "0"+activeDay;

table.addEventListener("click", function(e) {
    e = e || window.event;
    var target = e.target || e.srcElement,
        text = target.textContent || target.innerText;
    for( let i=0; i<table.rows.length;i++){
        for(let j=0; j<table.rows[0].cells.length;j++){
            if(table.rows[i].cells[j].innerHTML == text) {
                table.rows[i].cells[j].classList.add("active");
            } else {
                table.rows[i].cells[j].classList.remove("active");
                table.rows[i].cells[j].classList.remove("active-today");
            }
        }
    }
    let input = document.getElementById("inputDate");
    let day = text;
    if(day<10) day = "0"+day;
    activeDay = day;
    let month = document.getElementById("months").value;
    if(month<10) month = "0"+month;
    let year = document.getElementById("years").value;
    if(input.value == "")
        input.value = day + "/" + month + "/" + year + " " + "00:00";
    else {
        let time = input.value.split(" ");
        input.value = day + "/" + month + "/" + year + " " + time[1];
    }  
});

const timeTable = document.getElementById("time").getElementsByTagName('tbody')[0];
timeTable.addEventListener("click", function(e) {
    e = e || window.event;
    var target = e.target || e.srcElement,
        text = target.textContent || target.innerText;
    for( let i=0; i<timeTable.rows.length;i++){
        if(timeTable.rows[i].cells[0].innerHTML == text) {
            timeTable.rows[i].cells[0].classList.add("active");
        } else {
            timeTable.rows[i].cells[0].classList.remove("active");
        }
    }
    let input = document.getElementById("inputDate");
    let month = document.getElementById("months").value;
    if(month<10) month = "0"+month;
    let year = document.getElementById("years").value;
    input.value = "";
    input.value = activeDay + "/" + month + "/" + year + " " + text;  
});