function services() {
  const servicesList = Array.from(document.querySelectorAll('.services__element'));
  servicesList.forEach(item => {
    item.addEventListener('click', (evt) => {
      evt.target.closest('.services__element').querySelector('.services__list').classList.toggle('services__list_active');
    });

    if (item.id === document.location.hash.slice(1)) {
      item.querySelector('.services__list').classList.add('services__list_active');
    }
  });


  window.addEventListener('hashchange', (e) => {
    servicesList.forEach(item => {
      if (item.id === document.location.hash.slice(1)) {
        item.querySelector('.services__list').classList.add('services__list_active');

        servicesList.forEach(item2 => {
          if (item2 !== item) {
            item2.querySelector('.services__list').classList.remove('services__list_active')
          }
        })
      }
    });
  })
}

services();