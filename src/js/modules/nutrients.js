export default function () {
    var windowHeight = $(window).height();
    $(document).on("scroll", function () {
      $(".nutrients").each(function () {
        var self = $(this),
          height;

        if (self.height() >= windowHeight) {
          height = self.offset().top + windowHeight - 100;
        } else {
          height = self.offset().top + self.height();
        }

        if ($(document).scrollTop() + windowHeight >= height) {
          self.addClass("show");
        } else {
          self.removeClass("show");
        }
      });
    });
}
