const input = document.getElementById("inputDate");
const cal = document.getElementById("calender");
const iconCal = document.getElementById("icon-cal");

input.addEventListener("focusin", function() {
    cal.style.display = "flex";
});

input.addEventListener("click", function() {
    cal.style.display = "flex";
});

// input.addEventListener("focusout", function() {
//     cal.style.display = "none";
// });

iconCal.addEventListener("click", function() {
    if (cal.style.display == "flex") 
        cal.style.display = "none";
    else
        cal.style.display = "flex";
});

const calDateTime = document.getElementById("calender");

calDateTime.addEventListener("mouseover", function() {
    cal.style.display = "flex";
});

calDateTime.addEventListener("mouseout", function() {
    cal.style.display = "none";
});