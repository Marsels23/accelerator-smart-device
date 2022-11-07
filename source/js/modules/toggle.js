document.querySelectorAll('[data-toggle]').forEach((toggle) => {
  let aboutText = toggle.querySelector('[data-toggle-text]');
  let aboutButton = toggle.querySelector('[data-toggle-btn]');


  aboutButton.addEventListener('click', (event)=> {
    event.preventDefault();

    aboutText.classList.toggle('company__texts--closed');
    aboutText.classList.toggle('company__texts--open');

    [aboutButton.dataset.toggleText, btn.innerHTML] = [btn.innerHTML, btn.dataset.toggleText];
  });
});
