function cookie() {
  const btnSubmit = document.querySelector('.cookie__btn-submit');
  btnSubmit.addEventListener('click', () => {
    document.querySelector('.cookie').classList.remove('cookie_active');
  })
}

cookie();