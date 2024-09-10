console.log("This is my first Frontend project!");

    





// Burger handler

(function() {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header-navigation');
    const header = document.querySelector('.header');
    const menuCloseItem = document.querySelector('.header-nav-close');
    const body = document.querySelector('body');
    const title = document.querySelector('.header-title');
    const menuLinks = document.querySelectorAll('.header a');
   

    burgerItem.addEventListener('click', () => {
        menu.classList.add('header-nav-active');
        body.classList.add('header-overflow');
        header.classList.add('header-overlay');
        title.classList.add('header-title-darken');
    });

    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header-nav-active');
        body.classList.remove('header-overflow');
        header.classList.remove('header-overlay');
        title.classList.remove('header-title-darken');
    });

    header.addEventListener('click', (event) => {
        if (event.target === header && menu.classList.contains('header-nav-active')) {
            menu.classList.remove('header-nav-active');
            body.classList.remove('header-overflow');
            header.classList.remove('header-overlay');
            title.classList.remove('header-title-darken');
        }
    });

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('header-nav-active');
            body.classList.remove('header-overflow');
            header.classList.remove('header-overlay');
            title.classList.remove('header-title-darken');
        });
    });
}())








// Slider handler

const pets = [
    { name: "Katrine", img: "assets/img/pets-katrine.png" },
    { name: "Jennifer", img: "assets/img/pets-jennifer.png" },
    { name: "Woody", img: "assets/img/pets-woody.png" },
    { name: "Charly", img: "assets/img/pets-charly.png" },
    { name: "Freddie", img: "assets/img/pets-freddie.png" },
    { name: "Scarlet", img: "assets/img/pets-scarlet.png" },
    { name: "Sophia", img: "assets/img/pets-sophia.png" },
    { name: "Timmy", img: "assets/img/pets-timmy.png" }
];

const slider = document.getElementById('slider');
let prevArrow;
let nextArrow;

let currentIndex = 0;
let itemsPerPage = getItemsPerPage();

function getItemsPerPage() {
    const width = window.innerWidth;
    if (width >= 1280) return 3;
    if (width >= 768) return 2;
    return 1;
}

function getArrows() {
    const width = window.innerWidth;
    if (width < 768) {
        return {
            prevArrow: document.getElementById('prevArrowSecond'),
            nextArrow: document.getElementById('nextArrowSecond')
        };
    } else {
        return {
            prevArrow: document.getElementById('prevArrow'),
            nextArrow: document.getElementById('nextArrow')
        };
    }
}

function setArrows() {
    const arrows = getArrows();
    prevArrow = arrows.prevArrow;
    nextArrow = arrows.nextArrow;

    if (prevArrow && nextArrow) {
        prevArrow.addEventListener('click', showPrevSlide);
        nextArrow.addEventListener('click', showNextSlide);
    }
}

function generateSlide(items) {
    slider.innerHTML = '';
    items.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('our_friends-item');
        div.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>Learn more</p>
        `;
        slider.appendChild(div);
    });
}

function getRandomItems(items, count) {
    const shuffled = items.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function updateSlide() {
    const displayedItems = document.querySelectorAll('.our_friends-item');
    const currentItems = Array.from(displayedItems).map(item => item.querySelector('h3').textContent);

    let newItems;
    do {
        newItems = getRandomItems(pets, itemsPerPage);
    } while (newItems.some(item => currentItems.includes(item.name)));

    generateSlide(newItems);
}

function showNextSlide() {
    currentIndex = (currentIndex + 1) % pets.length;
    updateSlide();
}

function showPrevSlide() {
    currentIndex = (currentIndex - 1 + pets.length) % pets.length;
    updateSlide();
}

function handleResize() {
    itemsPerPage = getItemsPerPage();
    setArrows();
    updateSlide();
}

setArrows();
window.addEventListener('resize', handleResize);
updateSlide();