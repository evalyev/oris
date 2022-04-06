function oKlinike() {
  certsList = Array.from(document.querySelectorAll('.clinika__certs li'));
  certsList.forEach(item => {
    item.addEventListener('mouseover', () => {
      item.querySelector('.clinika__cert-img').classList.add('clinika__cert-img_active');
      item.addEventListener('mouseleave', (evt) => {
        console.log()
        if (evt.relatedTarget.closest('li')){
          if (!evt.relatedTarget.closest('li').isEqualNode(item)) {
            item.querySelector('.clinika__cert-img').classList.remove('clinika__cert-img_active');
          }
        }
        else {
          item.querySelector('.clinika__cert-img').classList.remove('clinika__cert-img_active');
        }
        
      })
    })
  });
}

oKlinike();