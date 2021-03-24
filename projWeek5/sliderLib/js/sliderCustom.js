let currentSlide = 0;
let slides = document.querySelectorAll(".slide");

function showSlider() {
    let currentSlide = 0;
    let slides = document.querySelectorAll(".slide1");
    const init = (n) => {
        slides.forEach((slide) => {
            slide.style.display = "none"
        })
        slides[n].style.display = "block"
    }

    document.addEventListener("DOMContentLoaded", init(currentSlide))

    setInterval(() => {
        currentSlide >= slides.length - 1 ? currentSlide = 0 : currentSlide++;
        init(currentSlide);
    }, 5000);
}

function showDots(autoplaySlide = false) {
    let currentSlide = 0;
    let slides = document.querySelectorAll(".slide2");
    const dots = document.querySelectorAll('.dot2');
    const init = (n) => {
        slides.forEach((slide) => {
            slide.style.display = "none"
            dots.forEach((dot) => {
                dot.classList.remove("active")
            })
        })
        slides[n].style.display = "block"
        dots[n].classList.add("active")
    }

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            init(index)
            currentSlide = index
        })
    })

    document.addEventListener("DOMContentLoaded", init(currentSlide))
    if(autoplaySlide) {
        setInterval(() => {
            currentSlide >= slides.length - 1 ? currentSlide = 0 : currentSlide++;
            init(currentSlide);
        }, 5000);
    }
}

function showNavigation(autoplaySlide = false) {
    let currentSlide = 0;
    let slides = document.querySelectorAll(".slide3");
    const init = (n) => {
        slides.forEach((slide) => {
            slide.style.display = "none";
        })
        slides[n].style.display = "block";
    }
    document.addEventListener("DOMContentLoaded", init(currentSlide))

    let next = () => {
        currentSlide >= slides.length - 1 ? currentSlide = 0 : currentSlide++;
        init(currentSlide);
    }
    
    let prev = () => {
        currentSlide <= 0 ? currentSlide = slides.length - 1 : currentSlide--;
        init(currentSlide);
    }
    
    document.querySelector(".slide3Next").addEventListener('click', next);
    document.querySelector(".slide3Prev").addEventListener('click', prev);
    if(autoplaySlide) {
        setInterval(() => {
            next();
            init(currentSlide);
        }, 5000);
    }
}

function showDotsNavigation(autoplaySlide = false) {
    let currentSlide = 0;
    let slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll('.dot');
    console.log(slides.length);
    const init = (n) => {
        slides.forEach((slide) => {
            slide.style.display = "none"
            dots.forEach((dot) => {
                dot.classList.remove("active")
            })
        })
        slides[n].style.display = "block"
        dots[n].classList.add("active")
    }

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            init(index)
            currentSlide = index
        })
    })

    document.addEventListener("DOMContentLoaded", init(currentSlide))

    let next = () => {
        currentSlide >= slides.length - 1 ? currentSlide = 0 : currentSlide++;
        init(currentSlide);
    }
    
    let prev = () => {
        currentSlide <= 0 ? currentSlide = slides.length - 1 : currentSlide--;
        init(currentSlide);
    }
    
    document.querySelector(".next").addEventListener('click', next);
    document.querySelector(".prev").addEventListener('click', prev);

    if(autoplaySlide) {
        setInterval(() => {
            next()
            init(currentSlide);
        }, 5000);
    }
}

function showMultiple(autoplaySlide = false) {
    let currentSlide = 0;
    let slides = document.querySelectorAll(".slide-multiple");
    const dots = document.querySelectorAll('.multiple-dot');
    console.log(slides.length);
    const init = (n) => {
        slides.forEach((slide) => {
            slide.style.display = "none"
            dots.forEach((dot) => {
                dot.classList.remove("active")
            })
        })
        slides[n].style.display = "grid"
        dots[n].classList.add("active")
    }

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            init(index)
            currentSlide = index
        })
    })

    document.addEventListener("DOMContentLoaded", init(currentSlide))

    let next = () => {
        currentSlide >= slides.length - 1 ? currentSlide = 0 : currentSlide++;
        init(currentSlide);
    }
    
    let prev = () => {
        currentSlide <= 0 ? currentSlide = slides.length - 1 : currentSlide--;
        init(currentSlide);
    }
    
    document.querySelector(".multiple-next").addEventListener('click', next);
    document.querySelector(".multiple-prev").addEventListener('click', prev);

    if(autoplaySlide) {
        setInterval(() => {
            next()
            init(currentSlide);
        }, 5000);
    }
}

showSlider()
showDots(true)
showNavigation(true)
showDotsNavigation(true);
showMultiple(true);