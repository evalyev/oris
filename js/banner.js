class Banner {
  constructor(elementSelector, elementsSelector) {
    this._element = document.querySelector(elementSelector);
    this._position = 1;
    this._amount = Array.from(this._element.querySelectorAll(elementsSelector)).length - 4;
    // this._renderer = renderer;

    this._control = document.querySelector('.banner__controls');

    this._isSide = false;
  }

  left() {
    if (!this._isSide) {
      const windowWidth = window.innerWidth;

      this._isSide = true;
      this._element.style.transitionDuration = "300ms";
      // this._element.style.transform = "translate3d(" + ((-this._position) * 662 + 662) + "px, 0px, 0px)";
      this._element.style.transform = "translate3d(" + ((-this._position) * 682 + 682 * 2) + "px, 0px, 0px)";
      this._position -= 1;

      this._control.style.transitionDuration = "300ms";
      this._control.style.transform = "translate3d(" + (+14) + "px, 0px, 0px)";

      setTimeout(() => {
        this._element.style.transitionDuration = "0ms";
        if (this._position === -1) {
          this._position = this._amount - 1;
          this._element.style.transform = "translate3d(" + ((-this._position) * 682 + 682) + "px, 0px, 0px)";
        }
        this._control.style.transitionDuration = "0ms";
        this._control.style.transform = "translate3d(" + (0) + "px, 0px, 0px)";
        this._isSide = false;
      }, 300);

    }

  }

  right() {
    if (!this._isSide) {
      const windowWidth = window.innerWidth;

      this._isSide = true;
      this._element.style.transitionDuration = "300ms";
      // this._element.style.transform = "translate3d(" + ((-this._position) * 682 - 682) + "px, 0px, 0px)";
      this._element.style.transform = "translate3d(" + ((-this._position) * 682) + "px, 0px, 0px)";
      this._position += 1;

      this._control.style.transitionDuration = "300ms";
      this._control.style.transform = "translate3d(" + (-14) + "px, 0px, 0px)";

      setTimeout(() => {
        this._element.style.transitionDuration = "0ms";
        if (this._position === this._amount) {
          this._position = 0;
          this._element.style.transform = "translate3d(" + ((-this._position) * 682 + 682) + "px, 0px, 0px)";
        }
        this._control.style.transitionDuration = "0ms";
        this._control.style.transform = "translate3d(" + (0) + "px, 0px, 0px)";
        this._isSide = false;
      }, 300);
    }

  }
}

function bannerFunction() {
  const bannerCont = document.querySelector('.banner__elements');
  const elementsList = Array.from(bannerCont.querySelectorAll('.banner__element'));

  const controls = document.querySelector('.banner__controls');
  const controlsList = Array.from(controls.querySelectorAll('.banner__control'))
  const control = controls.querySelector('.banner__control');

  if (elementsList.length > 2) {
    let clonedNode = elementsList[0].cloneNode(true);
    bannerCont.append(clonedNode);
    clonedNode = elementsList[1].cloneNode(true);
    bannerCont.append(clonedNode);
    clonedNode = elementsList[elementsList.length - 1].cloneNode(true);
    bannerCont.prepend(clonedNode);
    clonedNode = elementsList[elementsList.length - 2].cloneNode(true);
    bannerCont.prepend(clonedNode);

    const banner = new Banner('.banner__elements', '.banner__element');

    const btnLeft = document.querySelector('.banner__btn-prev');
    const btnRight = document.querySelector('.banner__btn-next');

    btnLeft.addEventListener('click', banner.left.bind(banner))
    btnRight.addEventListener('click', banner.right.bind(banner))

    clonedNode = control.cloneNode(true);
    controls.prepend(clonedNode);
    clonedNode = control.cloneNode(true);
    controls.append(clonedNode);

    controlsList[0].addEventListener('click', banner.left.bind(banner))
    controlsList[2].addEventListener('click', banner.right.bind(banner))


  }


  


}

bannerFunction()