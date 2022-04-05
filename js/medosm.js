function medosm() {
  btnSpravki = document.querySelector('.medosm__title_type_spravki');
  btnOsmotr = document.querySelector('.medosm__title_type_osmotr');

  btnSpravki.addEventListener('click', () => {
    document.querySelector('.medosm__list_type_spravki').classList.add('medosm__list_active');
    btnSpravki.classList.add('medosm__title_active');
    document.querySelector('.medosm__list_type_osmotr').classList.remove('medosm__list_active');
    btnOsmotr.classList.remove('medosm__title_active');
  });

  btnOsmotr.addEventListener('click', () => {
    document.querySelector('.medosm__list_type_osmotr').classList.add('medosm__list_active');
    btnOsmotr.classList.add('medosm__title_active');
    document.querySelector('.medosm__list_type_spravki').classList.remove('medosm__list_active');
    btnSpravki.classList.remove('medosm__title_active');
  })
}

medosm();