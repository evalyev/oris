function nav() {
  function navPaddings() {
    const navList = Array.from(document.querySelectorAll('.header__nav-link'));
    const navCont = document.querySelector('.header__nav');
    let computedStyle = getComputedStyle(navCont, null)
    let paddings = parseInt(computedStyle.getPropertyValue('padding-left')) * 2;
    paddings = parseInt(computedStyle.getPropertyValue('width')) - paddings;

    navList.forEach(item => {
      paddings -= item.clientWidth;
    })

    paddings = paddings / (navList.length * 2 + 3)

    navList.forEach(item => {
      item.style.paddingLeft = paddings + 'px';
      item.style.paddingRight = paddings + 'px';
    })
  }

  function services() {
    const btnServices = document.querySelector('.header__nav-link_type_services');
    btnServices.addEventListener('mouseover', () => {
      const services = document.querySelector('.header__services_type_services');

      function mouseOut(evt) {
        if (!(evt.relatedTarget.closest('.header__services_type_services') || evt.relatedTarget.closest('.header__nav-link_type_services'))) {
          services.classList.remove('header__services_active');
          // document.removeEventListener('click', mouseOut);
          services.removeEventListener('mouseleave', mouseOut);
          btnServices.removeEventListener('mouseleave', mouseOut);
        }

      }
      services.classList.add('header__services_active');
      // document.addEventListener('click', mouseOut)
      services.addEventListener('mouseleave', mouseOut)
      btnServices.addEventListener('mouseleave', mouseOut)
    })
  }

  function diagnostika() {
    const btnServices = document.querySelector('.header__nav-link_type_diagnostika');
    btnServices.addEventListener('mouseover', () => {
      const services = document.querySelector('.header__services_type_diagnostika');

      function mouseOut(evt) {
        if (!(evt.relatedTarget.closest('.header__services_type_diagnostika') || evt.relatedTarget.closest('.header__nav-link_type_services'))) {
          services.classList.remove('header__services_active');
          // document.removeEventListener('click', mouseOut);
          services.removeEventListener('mouseleave', mouseOut);
          btnServices.removeEventListener('mouseleave', mouseOut);
        }

      }
      services.classList.add('header__services_active');
      // document.addEventListener('click', mouseOut)
      services.addEventListener('mouseleave', mouseOut)
      btnServices.addEventListener('mouseleave', mouseOut)
    })
  }

  navPaddings();
  services();
  diagnostika();
}

nav();