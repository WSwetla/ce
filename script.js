import ancientsData from './data/ancients.js';
import difficulties from './data/difficulties.js';
import blueCardsData from './data/mythicCards/blue/index.js';
import greenCardsData from './data/mythicCards/green/index.js';
import brownCardsData from './data/mythicCards/brown/index.js';


const ansientAzathoth = document.querySelector('.ansientAzathoth'),
      ansientCthulthu = document.querySelector('.ansientCthulthu'),
      ansientIogSothoth = document.querySelector('.ansientIogSothoth'),
      ansientShubNiggurath = document.querySelector('.ansientShubNiggurath'),

      buttonStart = document.querySelector('.buttonStart button'),
      cardBack = document.querySelector('.cardBack'),
      cardFront = document.querySelector('.cardFront'),

      trackerGreen1 = document.querySelector('.green1'),
      trackerBrown1 = document.querySelector('.brown1'),
      trackerBlue1 = document.querySelector('.brown1'),
      trackerGreen2 = document.querySelector('.green2'),
      trackerBrown2 = document.querySelector('.brown2'),
      trackerBlue2 = document.querySelector('.brown2'),
      trackerGreen3 = document.querySelector('.green3'),
      trackerBrown3 = document.querySelector('.brown3'),
      trackerBlue3 = document.querySelector('.brown3'),

      changeBtn1 = document.querySelectorAll('.btn1'),
      changeBtn2 = document.querySelectorAll('.btn2'),
      changeBtn3 = document.querySelectorAll('.btn3'),
      changeBtn4 = document.querySelectorAll('.btn4'),
      changeBtn5 = document.querySelectorAll('.btn5');

let card = null;

// const cssText

// ansientAzathoth.addEventListener('click', () => {
//    ansientAzathoth.style.cssText = 'border: solid 1px rgb(42, 20, 241);
//    box-shadow:12px12px2px1px rgba(0, 0, 255, .2);';
// });

// ansientCthulthu.addEventListener('click', () => {
//    ansientCthulthu.classList.toggle('active')
// });

// ansientIogSothoth.addEventListener('click', () => {
//    ansientIogSothoth.classList.toggle('active')
// });

// ansientShubNiggurath.addEventListener('click', () => {
//    ansientShubNiggurath.classList.toggle('active')
// });


// if (ansientAzathoth.classList.contains('active') !== true) {
//    ansientAzathoth.classList.add('active');
// }








