const callRequest = document.querySelector('.callRequest');
const btnCall = document.querySelectorAll('.button_call');
const btnClose = callRequest.querySelector('.button_close');
const blure = document.querySelector('.side-bar__bg');

for (let i = 0; i < btnCall.length; i++) {
  btnCall[i].addEventListener('click', function () {
    callRequest.classList.add('open');
  });
}

btnClose.addEventListener('click', function () {
  callRequest.classList.remove('open');
});

callRequest.addEventListener('click', function (e) {
  if (!e.target.closest('.callRequest__body')) {
    callRequest.classList.remove('open');
  }
});
