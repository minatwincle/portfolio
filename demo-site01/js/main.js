// スクロールするとメニューをfixed表示にする
const fixedTarget = document.getElementById('head');
window.addEventListener('scroll', () => {
  const offset = window.scrollY;
  if (offset > 600) {
    fixedTarget.classList.add('slide-in');
  } else if (offset <= 600) {
    fixedTarget.classList.remove('slide-in');
  }
  if (offset > 160) {
    fixedTarget.classList.add('slide-out');
  } else {
    fixedTarget.classList.remove('slide-out');
  }
});
