const myTab = document.querySelector('#myTab');
const navLinks = document.querySelectorAll('.nav-link');
const containers = document.querySelectorAll('.content-container');

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
