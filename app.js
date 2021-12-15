const $body = document.querySelector('body');
const $preloader = document.querySelector('.preloader');

window.addEventListener('load', () => {
   $body.style.overflowY = 'initial';
   $preloader.style.opacity = '0';
   $preloader.style.pointerEvents = 'none';
})

window.addEventListener('load', loadPop);

function loadPop() {
   document.querySelector('.logo').classList.add('pop');
   document.querySelector('h1').classList.add('pop');
   document.querySelector('.header__wrapper p').classList.add('pop');
   document.getElementById('download__btn').classList.add('pop');
}

function snippetsPop() {
   const title = document.querySelector('.snippets__wrapper h2')
   const position = title.getBoundingClientRect().top;
   var screenPosition = window.innerHeight / 1.4;
   if (position < screenPosition) {
      title.classList.add('pop');
      document.querySelector('.snippets__wrapper p').classList.add('pop')
   }
}

function snippetsListPop() {
   const list = document.querySelector('.snippets__list');
   const items = document.querySelectorAll('.snippets__list-item');
   const position = list.getBoundingClientRect().top;
   var screenPosition = window.innerHeight / 1.4;
   if (position < screenPosition) {
      for (let x of items) {
         x.classList.add('pop');
      }
      document.querySelector('.snippets__main img').classList.add('pop')
   }
}

function accessPop() {
   const title = document.querySelector('.access__wrapper h2')
   const position = title.getBoundingClientRect().top;
   var screenPosition = window.innerHeight / 1.4;
   if (position < screenPosition) {
      title.classList.add('pop');
      document.querySelector('.access__wrapper p').classList.add('pop')
      document.querySelector('.access__wrapper img').classList.add('pop')
   }
}

function workflowPop() {
   const title = document.querySelector('.workflow__wrapper h2')
   const position = title.getBoundingClientRect().top;
   var screenPosition = window.innerHeight / 1.4;
   if (position < screenPosition) {
      title.classList.add('pop');
      document.querySelector('.workflow__wrapper p').classList.add('pop')
      document.querySelector('.workflow__wrapper img').classList.add('pop')
   }
}

function workflowListPop() {
   const list = document.querySelector('.workflow__main');
   const items = document.querySelectorAll('.workflow__main-item');
   const position = list.getBoundingClientRect().top;
   var screenPosition = window.innerHeight / 1.4;
   if (position < screenPosition) {
      for (let x of items) {
         x.classList.add('pop');
      }
   }
}

function downloadPop() {
   const title = document.querySelector('.download__wrapper h2')
   const position = title.getBoundingClientRect().top;
   var screenPosition = window.innerHeight / 1.4;
   if (position < screenPosition) {
      title.classList.add('pop');
      document.querySelector('.download__wrapper p').classList.add('pop');
      document.getElementById('download__btn').classList.add('pop');
   }
}



window.addEventListener('scroll', snippetsPop)
window.addEventListener('scroll', snippetsListPop)
window.addEventListener('scroll', accessPop);
window.addEventListener('scroll', workflowPop);
window.addEventListener('scroll', workflowListPop);
window.addEventListener('scroll', downloadPop);