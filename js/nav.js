function nav() {
  const navList = Array.from(document.querySelectorAll('.header__nav-link'));
  const navCont = document.querySelector('.header__nav');
  let computedStyle = getComputedStyle(navCont, null)
  let paddings = parseInt(computedStyle.getPropertyValue('padding-left')) * 2;
  paddings = parseInt(computedStyle.getPropertyValue('width')) - paddings;

  navList.forEach(item => {
    paddings -= item.clientWidth;
  })

  paddings = paddings / (navList.length * 2 + 2)  

  navList.forEach(item => {
    item.style.paddingLeft = paddings + 'px';
    item.style.paddingRight = paddings + 'px';
  })
}

nav();