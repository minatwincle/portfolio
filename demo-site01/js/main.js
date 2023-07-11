//--------------------------------------------------------
// ロード中画面
//--------------------------------------------------------
//ロード画面中はスクロールを固定する
function disableScroll() {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
  window.onscroll = function () {
    window.scrollTo(0, 0);
  };
  setTimeout(function () {
    window.onscroll = null;
  }, 2800);
}
const loadPhaze = document.getElementById('load');
const message = document.getElementsByClassName('fv__text')[0];
window.addEventListener('load', () => {
  disableScroll();
  loadPhaze.classList.add('on');
  message.classList.add('out');
  setTimeout(function () {
    message.classList.add('fade-in');
  }, 600);
  setTimeout(function () {
    loadPhaze.classList.add('off');
  }, 2000);
  setTimeout(function () {
    loadPhaze.classList.remove('on');
    loadPhaze.classList.remove('off');
    loadPhaze.style.display = 'none';
    message.classList.remove('out');
    message.classList.remove('fade-in');
  }, 2800);
});

//--------------------------------------------------------
// スクロールするとメニューをfixed表示にする
//--------------------------------------------------------
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

//--------------------------------------------------------
// スムーススクロール
//--------------------------------------------------------
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

//--------------------------------------------------------
// バーガーメニュー
//--------------------------------------------------------
const burgerMenu = document.getElementsByClassName('burger')[0];
const btns = document.getElementsByClassName('container--nav--btns')[0];
const navList = document.getElementById('nav');
const navContainer = [burgerMenu, btns, navList];
//表示関数
function appear() {
  btns.classList.add('on');
  navList.classList.add('on');
  // アニメーションを発火させるために後回し
  setTimeout(function () {
    btns.classList.toggle('appear');
    navList.classList.toggle('appear');
  }, 0);
  //アニメーション中は入力を受け付けない
  navContainer.forEach((navItem) => {
    navItem.setAttribute('style', 'pointer-events:none');
    setTimeout(function () {
      navItem.style.removeProperty('pointer-events');
    }, 300);
  });
}
//非表示関数
function disappear() {
  if (btns.classList.contains('on')) {
    setTimeout(function () {
      btns.classList.remove('on');
      navList.classList.remove('on');
    }, 300);
  }
}
//クリックしたときに表示・非表示を切り替える
navContainer.forEach((navItem) => {
  navItem.addEventListener('click', function () {
    disappear();
    appear();
  });
});
// スクロールした際、メニューを閉じる
window.addEventListener('scroll', function () {
  navContainer.forEach((navItem) => {
    if (btns.classList.contains('on')) {
      navItem.setAttribute('style', 'pointer-events:none');
    }
    setTimeout(function () {
      btns.classList.remove('appear');
      navList.classList.remove('appear');
      disappear();
      navItem.style.removeProperty('pointer-events');
    }, 300);
  });
});
