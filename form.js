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

// form //\

function message(){
    window.alert('Thank you for signing up with us!')
}

const form = document.getElementById('submit')

form.addEventListener('submit', (event) =>{
    message()
})