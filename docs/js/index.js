/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/modules/burger.js
const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.menu');
const cross = document.querySelector('.menu__head_close');
burger.onclick = () => {
  menu.style.display = 'block';
};
cross.onclick = () => {
  menu.style.display = 'none';
};
;// CONCATENATED MODULE: ./src/js/modules/slider.js
const swiper = new Swiper('.mySwiper', {
  scrollbar: {
    el: '.swiper-scrollbar',
    hide: false,
    draggable: true
  }
});
;// CONCATENATED MODULE: ./src/js/index.js




/******/ })()
;