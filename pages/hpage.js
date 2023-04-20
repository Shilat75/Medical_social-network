const intro = document.querySelector('.intro');
const animation = intro.querySelector('.animation');

setTimeout(() => {
  intro.classList.add('show-animation');
}, 1000);

animation.addEventListener('transitionend', () => {
  animation.style.display = 'none';
});
