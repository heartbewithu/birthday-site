// 信封打开效果
function openEnvelope() {
  document.getElementById('envelope').classList.add('open');
}

// 翻页效果
let currentPage = 1;
const totalPages = document.querySelectorAll('.magazine-page').length;

function updatePage() {
  document.querySelectorAll('.magazine-page').forEach((page, index) => {
    page.classList.remove('active');
    if (index + 1 === currentPage) {
      page.classList.add('active');
    }
  });
  document.querySelector('.page-indicator').textContent = `${currentPage} / ${totalPages}`;
}

function nextPage() {
  if (currentPage < totalPages) {
    currentPage++;
    updatePage();
  }
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    updatePage();
  }
}
function createStar() {
  const star = document.createElement('div');
  star.classList.add('star');

  star.innerHTML = '⭐';

  star.style.left = Math.random() * window.innerWidth + 'px';

  star.style.fontSize = Math.random() * 20 + 10 + 'px';

  star.style.animationDuration = Math.random() * 5 + 5 + 's';

  document.que
