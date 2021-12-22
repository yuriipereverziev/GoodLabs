export default function () {

  $('.js-conception-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<svg class="arrow-left slick-arrow" xmlns="http://www.w3.org/2000/svg" width="40" height="24" viewBox="0 0 40 24" style=""><g><g><path d="M0 11H.51L9.435.151l1.414 1.413L3.086 11H40v2H3.087l7.762 9.435-1.414 1.414L.51 13H0z"></path></g></g></svg>',
    nextArrow: '<svg class="arrow-right slick-arrow" xmlns="http://www.w3.org/2000/svg" width="40" height="24" viewBox="0 0 40 24" style=""><g><g><path d="M0 11h36.914l-7.763-9.436L30.565.151l8.926 10.85H40v2h-.51l-8.925 10.848-1.414-1.414L36.913 13H0z"></path></g></g></svg>',
    dots: true,
    adaptiveHeight: true,
    mobileFirst: true,
    responsive: [{
      breakpoint: 1219,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: false
      }
    }, {
      breakpoint: 1023,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    }, {
      breakpoint: 767,
      settings: {
        adaptiveHeight: false,
        slidesToShow: 2,
        slidesToScroll: 2
      },
    }]
  });
}
