(function ($) {
  "use strict";

  $(window).on("load", function (event) {
    $(".preloader").delay(500).fadeOut(500);
  });

  if ($(".progress-line").length) {
    $(".progress-line").appear(
      function () {
        var el = $(this);
        var percent = el.data("width");
        $(el).css("width", percent + "%");
      },
      { accY: 0 }
    );
  }
})(jQuery);
