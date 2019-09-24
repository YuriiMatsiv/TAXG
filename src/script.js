
"use strict";

alert("it\'s working...");
[...document.querySelectorAll('.main-list__item')].forEach(function (item) {
    item.addEventListener('click', function () {
        let someResult = item.innerHTML;
        let title = document.querySelector(".search__title");
        title.innerHTML = someResult;
    });
});
