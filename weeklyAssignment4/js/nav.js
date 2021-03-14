const navbar = document.querySelector('.header');
window.onscroll = () => {
    if (window.scrollY > 100) {
        navbar.classList.add('nav-active');
        document.getElementById("headerLogo").setAttribute("src","../img/logo_fixed.png");
    } else {
        navbar.classList.remove('nav-active');
        document.getElementById("headerLogo").setAttribute("src","../img/logo.png");
    }
};

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