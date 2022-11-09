const aboutUs = document.querySelector('.about-us');
const aboutUsBtn = aboutUs.querySelector('.about-us__button');
const aboutUsText = aboutUs.querySelectorAll('.about-us__text');
const textWidth768 = aboutUs.querySelector('.about-us__text_width_768');
const textWidth1440 = aboutUs.querySelector('.about-us__text_width_1440');

aboutUsBtn.addEventListener('click', function () {
  if (textWidth768.hasAttribute('hidden') && textWidth1440.hasAttribute('hidden')) {
    for (let i = 0; i < aboutUsText.length; i++) {
      aboutUsText[1].removeAttribute('hidden');
      textWidth768.removeAttribute('hidden');
      textWidth1440.removeAttribute('hidden');

      aboutUsBtn.textContent = 'Скрыть';
      aboutUsBtn.setAttribute('style', 'width: 90px');
      aboutUsBtn.classList.add('about-us_button-rotate');

      aboutUs.setAttribute('style', 'min-height: 300px');
    }
  } else {
    for (let i = 0; i < aboutUsText.length; i++) {
      aboutUsText[1].setAttribute('hidden', 'hidden');
      textWidth768.setAttribute('hidden', 'hidden');
      textWidth1440.setAttribute('hidden', 'hidden');
    
      aboutUsBtn.textContent = 'Читать далее';
      aboutUsBtn.setAttribute('style', 'width: 132px');
      aboutUsBtn.classList.remove('about-us_button-rotate');

      aboutUs.setAttribute('style', 'min-height: auto');
    }
  }
});
