const today = new Date();

function setYearMon() {
    let year = document.getElementById("years");
    let mon = document.getElementById("months");
    year.value = today.getFullYear();
    mon.value = today.getMonth()+1;

}

function startday(month, year) {
    var d = new Date(year, month - 1, 1);
    return d.getDay();
}

function daysInMonth (month, year) {
    return new Date(year, month, 0).getDate();
}

function setDays() {
    let table = document.getElementById("day").getElementsByTagName('tbody')[0];
    let year = document.getElementById("years").value;
    let month = document.getElementById("months").value;
    let day = startday(month,year);
    let days = daysInMonth(month,year);
    let count = 1;
    for( let i=0; i<table.rows.length;i++){
        for(let j=0; j<table.rows[0].cells.length;j++){
            if(j<day-1 && i==0) {
                table.rows[i].cells[j].innerHTML = "";
                continue;
            }
            if(count<=days) {
                table.rows[i].cells[j].innerHTML = count;
                count++;
            }
            table.rows[i].cells[j].classList.remove("active-today");
        }
    }
}

function makeTodayActive() {
    let table = document.getElementById("day").getElementsByTagName('tbody')[0];
    let year = document.getElementById("years").value;
    let month = document.getElementById("months").value;  
    for( let i=0; i<table.rows.length;i++){
        for(let j=0; j<table.rows[0].cells.length;j++){
            if(parseInt(table.rows[i].cells[j].innerHTML) == today.getDate()) {
                table.rows[i].cells[j].classList.add("active-today");
            }
        }
    }   
}

setYearMon();
setDays();
makeTodayActive();