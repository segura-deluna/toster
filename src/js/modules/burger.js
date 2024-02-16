const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.menu');
const cross = document.querySelector('.menu__head_close');

burger.onclick = () => {
  menu.style.display = 'block';
};

cross.onclick = () => {
  menu.style.display = 'none';
};
