// =========================
// 打开信件
// =========================

function openLetter() {
  const envelope = document.getElementById('envelope');
  const btn = document.querySelector('.open-btn');
  
  // 切换 .open 类名，触发 CSS 动画
  envelope.classList.toggle('open');
  
  // 点击后更改按钮的文字
  if (envelope.classList.contains('open')) {
    btn.innerText = '收起信件💌';
  } else {
    btn.innerText = '点击开启信件💌';
  }
}


// =========================
// 相册翻页
// =========================

const pages = document.querySelectorAll('.book-page');

let currentPage = 0;



function showPage(index) {

  pages.forEach(page => {
    page.classList.remove('show');
  });

  pages[index].classList.add('show');

  document.getElementById('pageNum').innerText =
    `${index + 1} / ${pages.length}`;
}



function nextBook() {

  if(currentPage < pages.length - 1) {

    currentPage++;

    showPage(currentPage);
  }
}



function prevBook() {

  if(currentPage > 0) {

    currentPage--;

    showPage(currentPage);
  }
}



// =========================
// 飘落星星
// =========================

function createStar() {

  const star = document.createElement('div');

  star.classList.add('star');

  star.innerHTML = '⭐';

  star.style.left =
    Math.random() * window.innerWidth + 'px';

  star.style.fontSize =
    Math.random() * 20 + 10 + 'px';

  star.style.animationDuration =
    Math.random() * 5 + 5 + 's';

  document
    .querySelector('.stars')
    .appendChild(star);

  setTimeout(() => {
    star.remove();
  }, 10000);
}



setInterval(createStar, 300);



// =========================
// 鼠标拖尾
// =========================

document.addEventListener('mousemove', (e) => {

  const sparkle = document.createElement('div');

  sparkle.innerHTML = '✦';

  sparkle.style.position = 'fixed';

  sparkle.style.left = e.clientX + 'px';

  sparkle.style.top = e.clientY + 'px';

  sparkle.style.pointerEvents = 'none';

  sparkle.style.fontSize = '18px';

  sparkle.style.color = '#ffd6f6';

  sparkle.style.zIndex = '9999';

  sparkle.style.transition = '1s';

  document.body.appendChild(sparkle);

  setTimeout(() => {

    sparkle.style.opacity = '0';

    sparkle.style.transform =
      'translateY(-20px) scale(1.5)';

  }, 10);

  setTimeout(() => {
    sparkle.remove();
  }, 1000);
});



// =========================
// 初始化第一页
// =========================

showPage(currentPage);
