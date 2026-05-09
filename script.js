function scrollToLetter() {
  document.getElementById('letter').scrollIntoView({
    behavior: 'smooth'
  });
}


const cards = document.querySelectorAll('.timeline-card');

window.addEventListener('scroll', () => {
  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
      card.style.opacity = '1';
      card.style.transform += ' scale(1)';
    }
  });
});
function createStar() {
  const star = document.createElement('div');
  star.classList.add('star');

  star.innerHTML = '⭐';

  star.style.left = Math.random() * window.innerWidth + 'px';

  star.style.fontSize = Math.random() * 20 + 10 + 'px';

  star.style.animationDuration = Math.random() * 5 + 5 + 's';

  document.que
