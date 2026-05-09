// 滚动到信件
function scrollToLetter() {
  document.getElementById("letter").scrollIntoView({ behavior: "smooth" });
}

// 打开信件（已修复）
function openLetter() {
  const env = document.getElementById("envelope");
  env.classList.add("open");
}

// 翻页相册（已修复）
let currentPage = 0;
const pages = document.querySelectorAll(".book-page");
const total = pages.length;

function updateBookPage() {
  pages.forEach((p, i) => {
    p.classList.remove("show");
    if (i === currentPage) p.classList.add("show");
  });
  document.getElementById("pageNum").innerText = `${currentPage + 1} / ${total}`;
}

function nextBook() {
  if (currentPage < total - 1) {
    currentPage++;
    updateBookPage();
  }
}

function prevBook() {
  if (currentPage > 0) {
    currentPage--;
    updateBookPage();
  }
}

updateBookPage();
function createStar() {
  const star = document.createElement('div');
  star.classList.add('star');

  star.innerHTML = '⭐';

  star.style.left = Math.random() * window.innerWidth + 'px';

  star.style.fontSize = Math.random() * 20 + 10 + 'px';

  star.style.animationDuration = Math.random() * 5 + 5 + 's';

  document.que
}
