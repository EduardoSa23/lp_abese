$(function () {
  // quando clicar no header
  $(".faq-header").on("click", function (e) {
    e.preventDefault();
    const btn = $(this);
    const item = btn.closest(".faq-item");
    const content = item.find(".faq-content");
    const icon = btn.find(".faq-icon");
    const expanded = btn.attr("aria-expanded") === "true";

    // Fechar os outros (modo "acordeão" = 1 aberto por vez). Se quiser permitir vários abertos, remova este bloco.
    $(".faq-item").not(item).each(function () {
      const other = $(this);
      other.find(".faq-content").slideUp(180);
      other.find(".faq-header").attr("aria-expanded", "false");
      other.find(".faq-icon").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    });

    if (expanded) {
      // Está aberto -> fechar
      content.slideUp(180);
      btn.attr("aria-expanded", "false");
      icon.removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
      // Está fechado -> abrir
      content.slideDown(180);
      btn.attr("aria-expanded", "true");
      icon.removeClass("fa-chevron-down").addClass("fa-chevron-up");
    }
  });

  // Suporte teclado (Enter / Space)
  $(".faq-header").on("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      $(this).trigger("click");
    }
  });
});
