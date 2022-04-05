function services() {
  const servicesList = Array.from(document.querySelectorAll('.services__element'));
  servicesList.forEach(item => {
    item.addEventListener('click', (evt) => {
      evt.target.closest('.services__element').querySelector('.services__list').classList.toggle('services__list_active');
    })
  })
}

services();