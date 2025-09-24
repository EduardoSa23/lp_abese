 $(window).on("scroll", function () {
    $(".card, .map").each(function () {
      var pos = $(this).offset().top;
      var winTop = $(window).scrollTop();
      var winHeight = $(window).height();

      if (pos < winTop + winHeight - 100) {
        $(this).addClass("visible");
      }
    });

    // animação em cascata para os feature-cards
    $(".features .feature-card").each(function (i) {
      var pos = $(this).offset().top;
      var winTop = $(window).scrollTop();
      var winHeight = $(window).height();

      if (pos < winTop + winHeight - 100) {
        setTimeout(() => {
          $(this).addClass("visible");
        }, i * 200);
      }
    });
  });

  // 👇 força execução ao carregar a página
  $(document).ready(function () {
    $(window).trigger("scroll");
  });