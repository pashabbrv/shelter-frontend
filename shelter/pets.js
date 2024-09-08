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