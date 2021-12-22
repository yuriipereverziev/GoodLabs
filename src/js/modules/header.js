export default () => {
  let burger = document.querySelector('.header__burger');
  let mobMenu = document.querySelector('.header__mob');
  let mobMenuBg = document.querySelector('.header__bg');
  let mobClose = document.querySelector('.top__close');
  let links = document.querySelectorAll('.item__link');

  burger.addEventListener('click', function () {
    mobMenu.classList.toggle('open');
  })
  mobClose.addEventListener('click', function () {
    mobMenu.classList.toggle('open')
  })
  mobMenuBg.addEventListener('click', function () {
    mobMenu.classList.toggle('open')
  })
  
  for(let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', hideMenu);
  }

  function hideMenu() {
    if (document.documentElement.clientWidth < 1024) {
      mobMenu.classList.toggle('open');
    }
  }
}