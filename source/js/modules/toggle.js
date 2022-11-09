document.querySelectorAll('[data-toggle]').forEach((toggle) => {
  const aboutText = toggle.querySelector('[data-toggle-text]');
  const aboutButton = toggle.querySelector('[data-toggle-btn]');


  aboutButton.addEventListener('click', (event)=> {
    event.preventDefault();

    aboutText.classList.toggle('company__texts--closed');
    aboutText.classList.toggle('company__texts--open');

    [aboutButton.dataset.toggleText, btn.innerHTML] = [btn.innerHTML, btn.dataset.toggleText];
  });
});
