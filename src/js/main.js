import './helpers/postDate';
import scrollSmooth from './helpers/smooth-scroll.js';
import conception from './modules/conception.js';
import winter from './modules/winter.js';
import scientists from './modules/scientists.js';
import header from './modules/header.js';
import about from './modules/about.js';
import nutrients from './modules/nutrients.js';
import reviews from './modules/reviews.js';
import questions from './modules/questions.js';
import Review from './modules/Review.js'

function main() {
  scrollSmooth();
  // header();
  conception();
  about();
  winter();
  scientists();
  nutrients();
  questions();
  Review();
  reviews();
}

if (document.documentElement.clientWidth < 480) {
  window.addEventListener('scroll',
    function () {
      return setTimeout(main, 1000);
    }, {
      once: true
    });
} else {
  main();
};
