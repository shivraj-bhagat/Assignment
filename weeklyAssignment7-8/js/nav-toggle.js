function toggleClick(e) {
    const list = document.getElementById("barIcon");
    const close = document.getElementById("closeIcon");
    const leftContent = document.getElementById("leftContent");
    if(e.id === "barIcon"){
        list.style.display = "none";
        close.style.display = "block";
        leftContent.className += " responsive";
    } else if(e.id === "closeIcon" ) {
        list.style.display = "block";
        close.style.display = "none";
        leftContent.className = "left-content";
    }
}