let brendsItem = document.querySelectorAll('.brends__item_hidden');
let techniqueItem = document.querySelectorAll('.technique__item_hidden');
let viewBtn = document.querySelectorAll('.view-btn');

for (let i = 0; i < viewBtn.length; i++) {
  viewBtn[i].addEventListener('click', function () {
    if (viewBtn[i].textContent === 'Показать все') {
      viewBtn[i].textContent = 'Скрыть';
      viewBtn[i].classList.add('view-btn-rotate');
    } else {
      viewBtn[i].textContent = 'Показать все';
      viewBtn[i].classList.remove('view-btn-rotate');
    }
    if (i === 0) {
      for (let i = 0; i < brendsItem.length; i++) {
        if (brendsItem[i].classList.contains('brends__item_hidden')) {
          brendsItem[i].classList.remove('brends__item_hidden');
        } else {
          brendsItem[i].classList.add('brends__item_hidden');
        }
      }
    }

    if (i === 1) {
      for (let i = 0; i < techniqueItem.length; i++) {
        if (techniqueItem[i].classList.contains('technique__item_hidden')) {
          techniqueItem[i].classList.remove('technique__item_hidden');
        } else {
          techniqueItem[i].classList.add('technique__item_hidden');
        }
      }
    }
  });
}
