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
    const nav = document.querySelector('.menu');
    const navLinks = document.querySelectorAll('.navLinks li');
    const darkHeader = document.querySelector(".header");


    burger.addEventListener('click', () => {

        nav.classList.toggle('nav-active');
        darkHeader.classList.toggle('dark-theme');

        //slow motion
        // navLinks.forEach((link, index) => {
        //     link.style.animation = 'navLinkFade 0.5 easy forwards ${index / 7+1}s';
        // });

    });




}
navSlide();
