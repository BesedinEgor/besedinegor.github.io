let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.left__main');
let hidden = document.querySelector('.wrapper');

burger.onclick = function() {
    menu.classList.toggle('closed');
    hidden.classList.toggle('hidden');
}