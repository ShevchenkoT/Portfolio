const myTab = document.querySelector('#myTab');
const navLinks = document.querySelectorAll('.nav-link');

myTab.addEventListener('click', ({ target }) => {
  if (target.classList.contains('btn')) {
    return;
  }

  [...navLinks].forEach((link) => {
    link.classList.remove('active');
  });
  target.classList.add('active');
  console.log(target);
});
