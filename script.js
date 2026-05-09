```javascript
function openLetter() {

  document
    .getElementById('envelope')
    .classList.toggle('open');
}



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
```

function createStar() {
  const star = document.createElement('div');
  star.classList.add('star');

  star.innerHTML = '⭐';

  star.style.left = Math.random() * window.innerWidth + 'px';

  star.style.fontSize = Math.random() * 20 + 10 + 'px';

  star.style.animationDuration = Math.random() * 5 + 5 + 's';

  document.que
}

