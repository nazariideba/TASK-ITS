const PRICE_URL = 'https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';

function getPrice() {
    fetch(PRICE_URL)
    .then(response => response.json())
    .then(components => filter(components))
    .catch(err => console.log('Get data error', err))
    
}
getPrice();

function filter(elems) {
    elems.forEach(elem => {
        if(elem.price <= 5) {
            approp(elem);
        }
    });
}

function approp(arg) {
    if(arg.id == 146) {
        CARUSEL_TEXT1.textContent = arg.name;
        CARUSEL_PRICE.textContent = arg.price;
    }
    else if(arg.id == 145) {
        CARUSEL_TEXT2.textContent = arg.name;
        CARUSEL_PRICE.textContent = arg.price;
    }
    else if(arg.id == 133) {
        CARUSEL_TEXT3.textContent = arg.name;
        CARUSEL_PRICE.textContent = arg.price;
    }
}

const STORE_BTN = document.querySelector('.header-info-store-icon');
const DROP_DOWN = document.querySelector('.header-info-store-dropdown');
const STORE_ICON = document.querySelector('.header-info-store-icon');
let check = 0;

STORE_BTN.addEventListener('click', function() {
    DROP_DOWN.style.display = 'flex';
    STORE_ICON.innerHTML = '<i class="uil uil-angle-up"></i>';
    check++;
})

window.addEventListener('click', function(event) {
    const elem = event.target;
    if(!elem.classList.contains('header-info-store-dropdown') && !elem.classList.contains('uil-angle-down') && check > 0){
        DROP_DOWN.style.display = 'none';
        STORE_ICON.innerHTML = '<i class="uil uil-angle-down"></i>';
        check = 0;
    }
})

const LEFT_BTN = document.querySelector('.carusel-left');
const RIGHT_BTN = document.querySelector('.carusel-right');
const DOTE_LEFT = document.querySelector('.carusel-dotes-left');
const DOTE_CENTER = document.querySelector('.carusel-dotes-center');
const DOTE_RIGHT = document.querySelector('.carusel-dotes-right');
const CARUSEL_TEXT1 = document.querySelector('.carusel-text-info1');
const CARUSEL_TEXT2 = document.querySelector('.carusel-text-info2');
const CARUSEL_TEXT3 = document.querySelector('.carusel-text-info3');
const CARUSEL_PRICE = document.querySelector('.carusel-text-name');

let layout1 = true;
let layout2 = false;
let layout3 = false;

RIGHT_BTN.addEventListener('click', function() {
    if(layout1) {
        LEFT_BTN.style.display = 'block';
        CARUSEL_TEXT1.style.display = 'none';
        CARUSEL_TEXT2.style.display = 'block';
        CARUSEL_TEXT2.style.top = 42 + 'px';
        DOTE_LEFT.style.opacity = 0.2;
        DOTE_CENTER.style.opacity = 1;
        layout1 = false;
        layout2 = true;
    }
    else if(layout2) {
        RIGHT_BTN.style.display = 'none';
        CARUSEL_TEXT2.style.display = 'none';
        CARUSEL_TEXT3.style.display = 'block';
        CARUSEL_TEXT3.style.top = 42 + 'px';
        DOTE_CENTER.style.opacity = 0.2;
        DOTE_RIGHT.style.opacity = 1;
        layout2 = false;
        layout3 = true;
    }
})

LEFT_BTN.addEventListener('click', function() {
    if (layout3) {
        RIGHT_BTN.style.display = 'block';
        CARUSEL_TEXT2.style.display = 'block';
        CARUSEL_TEXT2.style.top = 42 + 'px';
        CARUSEL_TEXT3.style.display = 'none';
        DOTE_CENTER.style.opacity = 1;
        DOTE_RIGHT.style.opacity = 0.2;
        layout3 = false;
        layout2 = true;
    }
    else if (layout2) {
        LEFT_BTN.style.display = 'none';
        CARUSEL_TEXT1.style.display = 'block';
        CARUSEL_TEXT2.style.display = 'none';
        DOTE_CENTER.style.opacity = 0.2;
        DOTE_LEFT.style.opacity = 1;
        layout2 = false;
        layout1 = true;
    }
})

DOTE_LEFT.addEventListener('click', function() {
        LEFT_BTN.style.display = 'none';
        RIGHT_BTN.style.display = 'block';
        CARUSEL_TEXT1.style.display = 'block';
        CARUSEL_TEXT2.style.display = 'none';
        CARUSEL_TEXT3.style.display = 'none';
        DOTE_LEFT.style.opacity = 1;
        DOTE_CENTER.style.opacity = 0.2;
        DOTE_RIGHT.style.opacity = 0.2;
        layout2 = false;
        layout1 = true;
})

DOTE_CENTER.addEventListener('click', function() {
        LEFT_BTN.style.display = 'block';
        CARUSEL_TEXT1.style.display = 'none';
        CARUSEL_TEXT2.style.display = 'block';
        CARUSEL_TEXT3.style.display = 'none';
        CARUSEL_TEXT2.style.top = 42 + 'px';
        DOTE_LEFT.style.opacity = 0.2;
        DOTE_CENTER.style.opacity = 1;
        DOTE_RIGHT.style.opacity = 0.2;
        layout1 = false;
        layout2 = true;
})

DOTE_RIGHT.addEventListener('click', function() {
        LEFT_BTN.style.display = 'block';
        RIGHT_BTN.style.display = 'none';
        CARUSEL_TEXT1.style.display = 'none';
        CARUSEL_TEXT2.style.display = 'none';
        CARUSEL_TEXT3.style.display = 'block';
        CARUSEL_TEXT3.style.top = 42 + 'px';
        DOTE_LEFT.style.opacity = 0.2;
        DOTE_CENTER.style.opacity = 0.2;
        DOTE_RIGHT.style.opacity = 1;
        layout2 = false;
        layout3 = true;
})


const VIDEO = document.querySelector('#player');

let press = true;
VIDEO.addEventListener('click', function() {
    if(press) {
        window.open(`https://www.youtube.com/embed/-Jcz560UNbA`, "_blank");
        press = false;
    }
})

const player = new Plyr('#player', {});
window.player = player;


const BURGER = document.querySelector('.burger');
const INFO = document.querySelector('.header-info');

let burger = false;
BURGER.addEventListener('click', function() {
    if(!burger) {
        INFO.style.display = 'flex';
        burger = true;
    }else if(burger) {
        INFO.style.display = 'none';
        burger = false;
    }
})