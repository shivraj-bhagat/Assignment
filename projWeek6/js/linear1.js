function progress() {
  let i = 0;
  if (i == 0) {
    i = 1;
    let elem = document.querySelector('.progress-bar-inner');
    let width = 10;
    let id = setInterval(frame, 100);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
        document.querySelector(".progress-bar-text").style.display = "block";
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width  + "%";
        elem.style.opacity = 1; 
      }
    }
  }
}

progress();