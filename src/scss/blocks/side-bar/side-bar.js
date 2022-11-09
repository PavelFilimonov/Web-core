const sideBar = document.querySelector('.side-bar');
const buttonBurger = document.querySelector('.button_burger');
const buttonClose = sideBar.querySelector('.button_close');
const blure = document.querySelector('.side-bar__bg');

const hidden = sideBar.getAttribute('hidden');

buttonBurger.addEventListener('click', function () {
  sideBar.classList.add('side-bar_open');
  sideBar.classList.remove('hidden_laptop');
  sideBar.classList.remove('side-bar_close');
  sideBar.removeAttribute('hidden');

  blure.classList.add('side-bar__bg_active');
});

buttonClose.addEventListener('click', function () {
  sideBar.classList.remove('side-bar_open');
  blure.classList.remove('side-bar__bg_active');
  sideBar.classList.add('side-bar_close');
});

document.addEventListener('click', function (e) {
  if (e.target === blure) {
    sideBar.classList.remove('side-bar_open');
    blure.classList.remove('side-bar__bg_active');
    sideBar.classList.add('side-bar_close');
  }
});

document.addEventListener('keyup', function (e) {
  let key = e.keyCode;

  if (key == 27) {
    sideBar.classList.remove('side-bar_open');
    blure.classList.remove('side-bar__bg_active');
    sideBar.classList.add('side-bar_close');
  }
});
