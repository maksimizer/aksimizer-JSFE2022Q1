/*=====================BURGER================*/

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

//================RANDOMIZER
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

//============CREATE NEW RANDOM CARD
function createRandomCard(i) {  
    let pet = allPets[i];
    let randomCard = document.createElement('div');
    randomCard.classList.add('card', `card-${pet}`);
    let img = document.createElement('img');
    img.src = `../../assets/images/pets-${pet}.png`;
    img.alt = 'pet';
    let petName = document.createElement('p');
    petName.classList.add('pet-name');
    petName.innerHTML = `${pet}`;
    let petBtn = document.createElement('button');
    petBtn.classList.add('button-secondary', 'learn-more-button', `${pet}`);
    petBtn.innerHTML = 'Learn more';
    randomCard.append(img);
    randomCard.append(petName);    
    randomCard.append(petBtn);
    return randomCard;
};


/*=====================PAGINATION================*/
 
 
const btnStart = document.querySelector('.start-btn');
const btnLeft = document.querySelector('.left-btn');
const pageCounter = document.querySelector('.page-counter')
const btnRight = document.querySelector('.right-btn');
const btnEnd = document.querySelector('.end-btn');
const carousel = document.querySelector('.carousel');
const itemLeft = document.querySelector('.item-left');
const itemActive = document.querySelector('.item-active');
const itemRight = document.querySelector('.item-right');
let randomArrArr = [];
let pageCount = 0;


//=============================1280px
//=========INITIAL RANDOMISE
if (document.documentElement.clientWidth > 1279) {
    function randomisePages() {
    for (let i = 0; i < 6; i++) {
        randomArr = getRandomArr();
        randomArrArr.push(randomArr);
    };
    itemLeft.innerHTML = '';
    for (let i = 0; i < 8; i++) {
        let randomCard = createRandomCard(randomArrArr[pageCount][i]);
        itemLeft.appendChild(randomCard);
    };
    itemActive.innerHTML = '';
    for (let i = 0; i < 8; i++) {
        let randomCard = createRandomCard(randomArrArr[pageCount + 1][i]);
        itemActive.appendChild(randomCard);   
    };
    itemRight.innerHTML = '';
    for (let i = 0; i < 8; i++) {
        let randomCard = createRandomCard(randomArrArr[pageCount + 1][i]);
        itemRight.appendChild(randomCard);
    };
    };
    
    window.onload = randomisePages();  

    //===============animation
    const moveLeft = () => {
        carousel.classList.add('transition-left');
        btnLeft.removeEventListener('click', moveLeft);
        btnRight.removeEventListener('click', moveRight);
        if (pageCount === 5) {
            btnEnd.classList.remove('disabled');
            btnRight.classList.remove('disabled');
        };
        pageCounter.innerHTML = pageCount;
        pageCount = pageCount - 1;
        if (pageCount === 0) {
            btnStart.classList.add('disabled');
            btnLeft.classList.add('disabled');
        };
    };
    const moveStart = () => {
        itemActive.innerHTML = '';
        for (let i = 0; i < 8; i++) {
            let card = createRandomCard(randomArrArr[0][i]);
            itemActive.appendChild(card);
        };
        itemLeft.innerHTML = '';
        for (let i = 0; i < 8; i++) {
            let card = createRandomCard(randomArrArr[1][i]);
            itemLeft.appendChild(card);
        };
        itemRight.innerHTML = '';
        for (let i = 0; i < 8; i++) {
            let card = createRandomCard(randomArrArr[1][i]);
            itemRight.appendChild(card);
        };
        pageCounter.innerHTML = 1;
        pageCount = 0;
        btnRight.addEventListener('click', moveRight);
        btnLeft.removeEventListener('click', moveLeft);
        btnRight.classList.remove('disabled');
        btnEnd.classList.remove('disabled');
        btnLeft.classList.add('disabled');
        btnStart.classList.add('disabled'); 
    };
    const moveRight = () => {
        carousel.classList.add('transition-right');
        btnLeft.removeEventListener('click', moveLeft);
        btnRight.removeEventListener('click', moveRight);
        if (pageCount === 0) {
            btnLeft.classList.remove('disabled');
            btnStart.classList.remove('disabled');
        };
        pageCounter.innerHTML = pageCount + 2;
        pageCount = pageCount + 1;
        if (pageCount === 5) {
            btnRight.classList.add('disabled');
            btnEnd.classList.add('disabled');
        };
    };
    const moveEnd = () => {
        itemActive.innerHTML = '';
        for (let i = 0; i < 8; i++) {
            let card = createRandomCard(randomArrArr[5][i]);
            itemActive.appendChild(card);
        };
        itemLeft.innerHTML = '';
        for (let i = 0; i < 8; i++) {
            let card = createRandomCard(randomArrArr[4][i]);
            itemLeft.appendChild(card);
        };
        itemRight.innerHTML = '';
        for (let i = 0; i < 8; i++) {
            let card = createRandomCard(randomArrArr[4][i]);
            itemRight.appendChild(card);
        };
        pageCounter.innerHTML = 6;
        pageCount = 5;
        btnLeft.addEventListener('click', moveLeft);
        btnRight.removeEventListener('click', moveRight);
        btnLeft.classList.remove('disabled');
        btnStart.classList.remove('disabled');
        btnRight.classList.add('disabled');
        btnEnd.classList.add('disabled'); 
    };

    btnLeft.addEventListener('click', moveLeft);
    btnRight.addEventListener('click', moveRight);
    btnStart.addEventListener('click', moveStart);
    btnEnd.addEventListener('click', moveEnd);

    carousel.addEventListener('animationend', () => {
        let itemToChange;
        if (carousel.classList.contains('transition-left')) {
            itemToChange = itemLeft;
            itemActive.innerHTML = itemLeft.innerHTML;
            carousel.classList.remove('transition-left');
        } else if (carousel.classList.contains('transition-right')) {
            itemToChange = itemRight;
            itemActive.innerHTML = itemRight.innerHTML;
            carousel.classList.remove('transition-right');
        };
    
        if (pageCount !== 0 && pageCount !== 5) {
            itemToChange.innerHTML = "";
            for (let i = 0; i < 8; i++) {
                const card = createRandomCard(randomArrArr[pageCount][i]);
                itemToChange.appendChild(card);
            };
    
        itemLeft.innerHTML = '';
        for (let i = 0; i < 8; i++) {
            const card = createRandomCard(randomArrArr[pageCount - 1][i]);
            itemLeft.appendChild(card);
        };
        itemRight.innerHTML = '';
        for (let i = 0; i < 8; i++) {
            const card = createRandomCard(randomArrArr[pageCount + 1][i]);
            itemRight.appendChild(card);
        };
        btnLeft.addEventListener("click", moveLeft);
        btnRight.addEventListener("click", moveRight);
        } else if (pageCount === 5) {
            itemToChange.innerHTML = "";
            for (let i = 0; i < 8; i++) {
                const card = createRandomCard(randomArrArr[pageCount][i]);
                itemToChange.appendChild(card);
            };
            itemLeft.innerHTML = '';
            for (let i = 0; i < 8; i++) {
                const card = createRandomCard(randomArrArr[pageCount - 1][i]);
                itemLeft.appendChild(card);
            };  
            itemRight.innerHTML = '';
            for (let i = 0; i < 8; i++) {
                const card = createRandomCard(randomArrArr[pageCount - 1][i]);
                itemRight.appendChild(card);
            };
        btnLeft.addEventListener("click", moveLeft);
        btnRight.classList.add('disabled');
        btnEnd.classList.add('disabled');
        } else if (pageCount === 0) {   
        itemToChange.innerHTML = "";
        for (let i = 0; i < 8; i++) {
            const card = createRandomCard(randomArrArr[pageCount][i]);
            itemToChange.appendChild(card);
        };  
        itemLeft.innerHTML = '';
        for (let i = 0; i < 8; i++) {
        const card = createRandomCard(randomArrArr[pageCount + 1][i]);
        itemLeft.appendChild(card);
        };
        itemRight.innerHTML = '';
        for (let i = 0; i < 8; i++) {
        const card = createRandomCard(randomArrArr[pageCount + 1][i]);
        itemRight.appendChild(card);
        };
        btnRight.addEventListener('click', moveRight);
        btnLeft.classList.add('disabled');
        btnStart.classList.add('disabled');
    };
    });
};


//==========768px

if ((document.documentElement.clientWidth > 767) && (document.documentElement.clientWidth < 1280)) { 
//==================INITIAL RANDOMISE   

    function randomisePages() {
        for (let i = 0; i < 6; i++) {
            randomArr = getRandomArr();
            randomArrArr.push(randomArr);
        }; 
        let allCardsArr = randomArrArr.flat();
         randomArrArr = [[], [], [], [], [], [], [], []];
        while (allCardsArr.length > 0) {
            let cardNum = allCardsArr.pop();
            let i = 0;
            while (true) {
                if (!randomArrArr[i].includes(cardNum) && randomArrArr[i].length < 6) {
                    randomArrArr[i].push(cardNum);
                    break;
                } else {
                    i++;
                };  
            };
        };
        itemLeft.innerHTML = '';
        for (let i = 0; i < 6; i++) {
            let randomCard = createRandomCard(randomArrArr[pageCount][i]);
            itemLeft.appendChild(randomCard);
        };
        itemActive.innerHTML = '';
        for (let i = 0; i < 6; i++) {
            let randomCard = createRandomCard(randomArrArr[pageCount + 1][i]);
            itemActive.appendChild(randomCard);   
        };
        itemRight.innerHTML = '';
        for (let i = 0; i < 6; i++) {
            let randomCard = createRandomCard(randomArrArr[pageCount + 1][i]);
            itemRight.appendChild(randomCard);
        };
        
    };
    window.onload = randomisePages();


//===============animation
       const moveLeft = () => {
        carousel.classList.add('transition-left');
        btnLeft.removeEventListener('click', moveLeft);
        btnRight.removeEventListener('click', moveRight);
        if (pageCount === 7) {
            btnEnd.classList.remove('disabled');
            btnRight.classList.remove('disabled');
        };
        pageCounter.innerHTML = pageCount;
        pageCount = pageCount - 1;
        if (pageCount === 0) {
            btnStart.classList.add('disabled');
            btnLeft.classList.add('disabled');
        };
    };
    const moveStart = () => {
        itemActive.innerHTML = '';
        for (let i = 0; i < 6; i++) {
            let card = createRandomCard(randomArrArr[0][i]);
            itemActive.appendChild(card);
        };
        itemLeft.innerHTML = '';
        for (let i = 0; i < 6; i++) {
            let card = createRandomCard(randomArrArr[1][i]);
            itemLeft.appendChild(card);
        };
        itemRight.innerHTML = '';
        for (let i = 0; i < 6; i++) {
            let card = createRandomCard(randomArrArr[1][i]);
            itemRight.appendChild(card);
        };
        pageCounter.innerHTML = 1;
        pageCount = 0;
        btnRight.addEventListener('click', moveRight);
        btnLeft.removeEventListener('click', moveLeft);
        btnRight.classList.remove('disabled');
        btnEnd.classList.remove('disabled');
        btnLeft.classList.add('disabled');
        btnStart.classList.add('disabled'); 
    };
    const moveRight = () => {
        carousel.classList.add('transition-right');
        btnLeft.removeEventListener('click', moveLeft);
        btnRight.removeEventListener('click', moveRight);
        if (pageCount === 0) {
            btnLeft.classList.remove('disabled');
            btnStart.classList.remove('disabled');
        };
        pageCounter.innerHTML = pageCount + 2;
        pageCount = pageCount + 1;
        if (pageCount === 7) {
            btnRight.classList.add('disabled');
            btnEnd.classList.add('disabled');
        };
    };
    const moveEnd = () => {
        itemActive.innerHTML = '';
        for (let i = 0; i < 6; i++) {
            let card = createRandomCard(randomArrArr[5][i]);
            itemActive.appendChild(card);
        };
        itemLeft.innerHTML = '';
        for (let i = 0; i < 6; i++) {
            let card = createRandomCard(randomArrArr[4][i]);
            itemLeft.appendChild(card);
        };
        itemRight.innerHTML = '';
        for (let i = 0; i < 6; i++) {
            let card = createRandomCard(randomArrArr[4][i]);
            itemRight.appendChild(card);
        };
        pageCounter.innerHTML = 8;
        pageCount = 7;
        btnLeft.addEventListener('click', moveLeft);
        btnRight.removeEventListener('click', moveRight);
        btnLeft.classList.remove('disabled');
        btnStart.classList.remove('disabled');
        btnRight.classList.add('disabled');
        btnEnd.classList.add('disabled'); 
    };

    btnLeft.addEventListener('click', moveLeft);
    btnRight.addEventListener('click', moveRight);
    btnStart.addEventListener('click', moveStart);
    btnEnd.addEventListener('click', moveEnd);

    carousel.addEventListener('animationend', () => {
        let itemToChange;
        if (carousel.classList.contains('transition-left')) {
            itemToChange = itemLeft;
            itemActive.innerHTML = itemLeft.innerHTML;
            carousel.classList.remove('transition-left');
        } else if (carousel.classList.contains('transition-right')) {
            itemToChange = itemRight;
            itemActive.innerHTML = itemRight.innerHTML;
            carousel.classList.remove('transition-right');
        };
    
        if (pageCount !== 0 && pageCount !== 7) {
            itemToChange.innerHTML = "";
            for (let i = 0; i < 6; i++) {
                const card = createRandomCard(randomArrArr[pageCount][i]);
                itemToChange.appendChild(card);
            };
    
        itemLeft.innerHTML = '';
        for (let i = 0; i < 6; i++) {
            const card = createRandomCard(randomArrArr[pageCount - 1][i]);
            itemLeft.appendChild(card);
        };
        itemRight.innerHTML = '';
        for (let i = 0; i < 6; i++) {
            const card = createRandomCard(randomArrArr[pageCount + 1][i]);
            itemRight.appendChild(card);
        };
        btnLeft.addEventListener("click", moveLeft);
        btnRight.addEventListener("click", moveRight);
        } else if (pageCount === 7) {
            itemToChange.innerHTML = "";
            for (let i = 0; i < 6; i++) {
                const card = createRandomCard(randomArrArr[pageCount][i]);
                itemToChange.appendChild(card);
            };
            itemLeft.innerHTML = '';
            for (let i = 0; i < 6; i++) {
                const card = createRandomCard(randomArrArr[pageCount - 1][i]);
                itemLeft.appendChild(card);
            };  
            itemRight.innerHTML = '';
            for (let i = 0; i < 6; i++) {
                const card = createRandomCard(randomArrArr[pageCount - 1][i]);
                itemRight.appendChild(card);
            };
        btnLeft.addEventListener('click', moveLeft);
        btnRight.classList.add('disabled');
        btnEnd.classList.add('disabled');
        } else if (pageCount === 0) {   
        itemToChange.innerHTML = "";
        for (let i = 0; i < 6; i++) {
            const card = createRandomCard(randomArrArr[pageCount][i]);
            itemToChange.appendChild(card);
        };  
        itemLeft.innerHTML = '';
        for (let i = 0; i < 6; i++) {
        const card = createRandomCard(randomArrArr[pageCount + 1][i]);
        itemLeft.appendChild(card);
        };
        itemRight.innerHTML = '';
        for (let i = 0; i < 6; i++) {
        const card = createRandomCard(randomArrArr[pageCount + 1][i]);
        itemRight.appendChild(card);
        };
        btnRight.addEventListener('click', moveRight);
        btnLeft.classList.add('disabled');
        btnStart.classList.add('disabled');
    };
    });

};
