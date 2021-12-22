export default function () {

  window.onscroll = function () {
    var wScroll = window.pageYOffset;
  };

  $(window).scroll(function () {
    var windowWidth = $(this).width();
    var windowScrollTop = $(this).scrollTop();

    var snowflake = function () {
      $('.snowflake').addClass("active");
    };

    if (windowWidth >= 1024) {
      if (windowScrollTop > 2270 && windowScrollTop < 2420) {
        snowflake();
      }
      if (windowScrollTop > 2850 || windowScrollTop < 1900) {
        $('.snowflake').removeClass("active");
      }
    }
  });
}
