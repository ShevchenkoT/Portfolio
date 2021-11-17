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
});

const containers = document.querySelectorAll('.container');
function changeLinkState() {
  let index = containers.length;

  while (--index && window.scrollY + 50 < containers[index].offsetTop) {}

  navLinks.forEach((link) => link.classList.remove('active'));
  navLinks[index].classList.add('active');
}

changeLinkState();
window.addEventListener('scroll', changeLinkState);
