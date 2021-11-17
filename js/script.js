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

function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    }
  });
}

const observer = new IntersectionObserver(onEntry, {
  threshold: [0.5]
});
const elements = document.querySelectorAll('.element-animation');
elements.forEach((el) => {
  observer.observe(el);
});
