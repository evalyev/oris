$(function () {
  function handleClick(evt) {
    const activeDoctor = document.querySelector('.doctors__element_active');
    const thisDoctor = evt.target.closest('.doctors__element');

    let isBeforeActive = false;
    let nextDoctor = null
    try {
      isBeforeActive = thisDoctor.nextElementSibling.classList.contains('doctors__element_active');
      if (isBeforeActive) {
        nextDoctor = activeDoctor.nextElementSibling;
      }
      else {
        nextDoctor = activeDoctor.previousElementSibling;
      }
    }
    catch {
      isBeforeActive = false;
      nextDoctor = activeDoctor.previousElementSibling;
    }
    if (isBeforeActive) {
      thisDoctor.classList.add('doctors__element_active');
      activeDoctor.classList.remove('doctors__element_active');
      thisDoctor.before(nextDoctor)
    }
    else {
      thisDoctor.classList.add('doctors__element_active');
      activeDoctor.classList.remove('doctors__element_active');
      this.after(nextDoctor)
    }
    thisDoctor.removeEventListener('click', handleClick);
    activeDoctor.addEventListener('click', handleClick);
    
  }

  doctorsList = Array.from(document.querySelectorAll('.doctors .doctors__element'));
  doctorsList.forEach(doctor => {
    if (!doctor.classList.contains('doctors__element_active'))
      doctor.addEventListener('click', handleClick);
    
  })

});