// ページ切り替えカーテン
const navBtn = document.getElementsByClassName('header__nav__list__link');
const curtainPiece = document.getElementsByClassName('main__container__curtain')[0];

[...navBtn].forEach(element => {
  element.addEventListener('click',()=>{
    curtainPiece.classList.add('slide');
    element.classList.add('slide');
    setTimeout(function(){
      curtainPiece.classList.remove('slide');
      [...navBtn].forEach(element => {
        element.classList.remove('slide');
      })
    }, 750);
  })
});

// ページ切り替え
const introBtn = navBtn[0];
const workBtn = navBtn[1];
const skillBtn = navBtn[2];
const linkBtn = navBtn[3];
const introSec = document.getElementById('intro');
const workSec = document.getElementById('work');
const skillSec = document.getElementById('skill');
const linkSec = document.getElementById('link');
const secArray = [introSec,workSec,skillSec,linkSec];

introBtn.addEventListener('click',()=>{
  [...navBtn].forEach(btn => {
    btn.classList.remove('on');
    btn.setAttribute('style','pointer-events:none');
  })
  introBtn.classList.add('on');
  setTimeout(function(){
    secArray.forEach(btn => {
      btn.classList.remove('on');
    })
    introSec.classList.add('on');
  },350)
  setTimeout(function(){
    [...navBtn].forEach(btn => {
      btn.style.removeProperty('pointer-events')
    })
  },750)
});
workBtn.addEventListener('click',()=>{
  [...navBtn].forEach(btn => {
    btn.classList.remove('on');
    btn.setAttribute('style','pointer-events:none');
  })
  workBtn.classList.add('on');
  setTimeout(function(){
    secArray.forEach(btn => {
      btn.classList.remove('on');
    })
    workSec.classList.add('on');
  },350)
  setTimeout(function(){
    [...navBtn].forEach(btn => {
      btn.style.removeProperty('pointer-events')
    })
  },750)
});
skillBtn.addEventListener('click',()=>{
  [...navBtn].forEach(btn => {
    btn.classList.remove('on');
    btn.setAttribute('style','pointer-events:none');
  })
  skillBtn.classList.add('on');
  setTimeout(function(){
    secArray.forEach(btn => {
      btn.classList.remove('on');
    })
    skillSec.classList.add('on');
  },350)
  setTimeout(function(){
    [...navBtn].forEach(btn => {
      btn.style.removeProperty('pointer-events')
    })
  },750)
});
linkBtn.addEventListener('click',()=>{
  [...navBtn].forEach(btn => {
    btn.classList.remove('on');
    btn.setAttribute('style','pointer-events:none');
  })
  linkBtn.classList.add('on');
  setTimeout(function(){
    secArray.forEach(btn => {
      btn.classList.remove('on');
    })
    linkSec.classList.add('on');
  },350)
  setTimeout(function(){
    [...navBtn].forEach(btn => {
      btn.style.removeProperty('pointer-events')
    })
  },750)
});