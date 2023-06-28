// スクロールするとメニューをfixed表示にする
const fixedTarget = document.getElementById('head');
window.addEventListener('scroll', () => {
  const offset = window.scrollY;
  if (offset > 960) {
    fixedTarget.classList.add('fixed-on');
    fixedTarget.classList.add('slide-in');
  } else {
    fixedTarget.classList.remove('slide-in');
  }
  if (offset > 160) {
    fixedTarget.classList.add('slide-out');
  } else {
    fixedTarget.classList.remove('fixed-on');
    fixedTarget.classList.remove('slide-out');
  }
});

// スムーススクロール
const links = document.querySelectorAll('a[href^="#"');
links.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    const rect = targetElement.getBoundingClientRect().top;
    const offset = window.pageYOffset;
    const gap = 160;
    const target = rect + offset - gap;
    window.scrollTo({
      top: target,
      behavior: 'smooth',
    });
  });
});
