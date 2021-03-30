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