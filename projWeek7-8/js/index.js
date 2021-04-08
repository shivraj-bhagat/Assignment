function createYear() {
    let year = document.getElementById("years");
    for(let i=1970; i<=2030; i++) {
        let option = document.createElement("option");
        option.text = i;
        option.value = i;
        year.add(option);
    }
}

function createTime() {
    let timeTable = document.getElementById("time");
    for(let hour=23;hour>=0;hour--) {
        if(hour<10) hour = "0" + hour;
        for(let min=45;min>=0;min = min - 15) {
            if (min == 0) min = "00";
            let row = timeTable.insertRow(0);
            row.insertCell(0).innerHTML = `${hour}:${min}`
        }
    }
}

createYear();
createTime();