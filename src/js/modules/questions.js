export default function () {
  (function () {
    $(document).click(function(event) {
      if ($(event.target).closest(".questions__item").length) return;
      $(".questions__item.active").removeClass("active");
    });

    $(".questions__item").click(function() {
      $(this).siblings().removeClass("active");
      $(this).toggleClass("active");
    });
  })();
}
