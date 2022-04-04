$(function () {
  new Promise(function (resolve) {
    $('.entry__input-date').datetimepicker({
      locale: 'ru',
      stepping: 10,
      format: 'DD.MM.YYYY',
      daysOfWeekDisabled: [0, 6]
    });
    resolve(1);
  })
    .finally(function () {
      document.querySelector('.entry__input-date').value = ""
    })
  
  popupEntry = document.querySelector('.entry')
  form = popupEntry.querySelector('.entry__form');
  form.addEventListener('submit', evt => {
    evt.preventDefault();
  })
  btnClose = popupEntry.querySelector('.entry__btn-close');
  btnClose.addEventListener('click', () => {
    popupEntry.classList.remove('entry_active')
  })

  headerBtnEntry = document.querySelector('.header__btn-entry');
  headerBtnEntry.addEventListener('click', () => {
    popupEntry.classList.add('entry_active')
  })

  

});

