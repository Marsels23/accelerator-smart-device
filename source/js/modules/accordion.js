let verticalMenu = document.querySelectorAll('[data-accordion]');

verticalMenu.forEach((accordion) => {
  verticalMenu.forEach((ac) => {
    ac.closest('.footer__section').classList.remove('footer__section--open');
  });

  accordion.addEventListener('click', ()=> {
    if (accordion.closest('.footer__section').classList.contains('footer__section--open')) {
      accordion.closest('.footer__section').classList.remove('footer__section--open');
    } else {
      verticalMenu.forEach((ac) => {
        ac.closest('.footer__section').classList.remove('footer__section--open');
      });
      accordion.closest('.footer__section').classList.add('footer__section--open');
    }
  });
});
