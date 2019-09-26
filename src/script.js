"use strict";

[...document.querySelectorAll('.main-list__item')].forEach(function (item) {
    item.addEventListener('click', function () {
        let someResult = item.innerHTML;
        let title = document.querySelector(".search__title");
        title.innerHTML = someResult;
    });
});

let navSlide = function () {

    const burger = document.querySelector(".burger");
    const nav = document.querySelector('.header-menu');
    const navLinks = document.querySelectorAll('.navLinks li');
    const darkHeader = document.querySelector(".header");
    // const line = document.querySelector(".burger__line");

console.log(burger);
    burger.addEventListener('click', () => {

        nav.classList.toggle('nav-active');
        darkHeader.classList.toggle('dark-theme');
        // line.classList.toggle('burger__line_color');

        burger.classList.toggle('cross');

    });




}
navSlide();
