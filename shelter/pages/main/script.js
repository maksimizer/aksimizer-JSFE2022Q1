

// ================BURGER======================================
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const darkener = document.querySelector('.darkener');
const logoBurger = document.querySelector('.logo-burger');


burger.addEventListener('click', toggleMenu);

function toggleMenu() {
  burger.classList.toggle('open');
  nav.classList.toggle('open');
  darkener.classList.toggle('active');
  document.documentElement.classList.toggle('disabled');
};

nav.addEventListener('click', closeMenu);
darkener.addEventListener('click', closeMenu);


function closeMenu (event) {
    if (event.target.classList.contains('nav-link') || event.target.classList.contains('darkener')) {
        burger.classList.remove('open');
        nav.classList.remove('open');
        darkener.classList.remove('active');
        document.documentElement.classList.remove('disabled');
    }
};

window.addEventListener('resize', function() {
    if (this.document.documentElement.classList.contains('disabled') 
    && this.document.documentElement.clientWidth > 767) {
        burger.classList.remove('open');
        nav.classList.remove('open');
        darkener.classList.remove('active');
        document.documentElement.classList.remove('disabled');
    }
})


// ================CAROUSEL======================================

const btnRight = document.querySelector('.right-btn');
const btnLeft = document.querySelector('.left-btn');
const carousel = document.querySelector('.carousel');
const itemLeft = document.querySelector('.item-left');
const itemRight = document.querySelector('.item-right');

const moveLeft = () => {
    carousel.classList.add('transition-left');
    btnLeft.removeEventListener('click', moveLeft);
    btnRight.removeEventListener('click', moveRight);
};
const moveRight = () => {
    carousel.classList.add('transition-right');
    btnLeft.removeEventListener('click', moveLeft);
    btnRight.removeEventListener('click', moveRight);
};

carousel.addEventListener('animationend', () => {
    carousel.classList.remove('transition-left');
    carousel.classList.remove('transition-right');
    btnLeft.addEventListener('click', moveLeft);
    btnRight.addEventListener('click', moveRight);
});

btnLeft.addEventListener('click', moveLeft);
btnRight.addEventListener('click', moveRight);


//======================RANDOMIZER+++++++++++++++++++++++++++++++++++++++
let allPets = ['Katrine', 'Jennifer', 'Woody', 'Sophia', 'Timmy', 'Charly', 'Scarlett', 'Freddie'];

function getRandomArr() {
    let arr = []; 
    while(arr.length < allPets.length){
        let randomInt = Math.floor(Math.random() * (allPets.length));
        if((arr.indexOf(randomInt) === -1) && (randomInt !== 8)) {
            arr.push(randomInt);
        };
    };
    return arr;
};
  
let randomArr = getRandomArr();
console.log(randomArr);
