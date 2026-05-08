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
