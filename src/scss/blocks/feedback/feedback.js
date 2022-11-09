const feedback = document.querySelector('.feedback');
const btnChat = document.querySelectorAll('.button_chat');
const btnClose = feedback.querySelector('.button_close');
const blure = document.querySelector('.side-bar__bg');

for (let i = 0; i < btnChat.length; i++) {
  btnChat[i].addEventListener('click', function () {
    feedback.classList.add('open');
  });
}

btnClose.addEventListener('click', function () {
  feedback.classList.remove('open');
});

feedback.addEventListener('click', function (e) {
  if (!e.target.closest('.feedback__body')) {
    feedback.classList.remove('open');
  }
});
