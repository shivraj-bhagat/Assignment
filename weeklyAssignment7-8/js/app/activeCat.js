function onClickActive(id) {
    let catList = document.getElementById("category");
    for(let i=0; i<catList.childNodes.length; i++){
        catList.children[i].classList.remove("active");
    }
    document.getElementById(id).classList.add("active");
    onCategoryChange(id);
}