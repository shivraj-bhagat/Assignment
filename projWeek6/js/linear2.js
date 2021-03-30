function progress2() {
    let i=0;
    if(i==0) {
        i=1;
        let elem = document.querySelector(".progress-bar-inner-2");
        let width = 5;
        let id = setInterval(interval, 150);
        function interval() {
            if(width >= 100) {
                clearInterval();
                i=0;
                document.querySelector(".progress-bar-text-2").style.display = "block";
            } else {
                width++;
                elem.style.width = width + '%';
                elem.style.opacity = 1;
            }
        }
    }
}

progress2();