

// navigation bar//
let btnHam = document.querySelector('.ham-btn');
let btnTimes = document.querySelector('.times-btn');
let navibar = document.getElementById('nav-bar');

btnHam.addEventListener
('click', function(){
    if(btnHam.className !== ""){
        btnHam.style.display = "none";
        btnTimes.style.display = "block";
        navibar.classList.add
        ("show-nav");
    }
})

btnTimes.addEventListener
('click', function(){
    if(btnHam.className !== ""){
        this.style.display = "none";
        btnHam.style.display = "block";
        navibar.classList.remove
        ("show-nav");
    }
})

// carousel //

const buttons = document.querySelectorAll('[data-carousel-button]')

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const offset = button.dataset.carouselButton === 'next' ? 1 : -1
        const slides = button
        .closest("[data-carousel")
        .querySelector('[data-slides]')

        const activeSlide = slides.querySelector('[data-active]')
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0
        
        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
        
    })
})

