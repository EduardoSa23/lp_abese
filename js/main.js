$(document).ready(function () {
  // =======================
  // Countdown Timer
  // =======================
  function updateCountdown() {
    // Set the date we're counting down to (27 de Novembro 2025)
    const countDownDate = new Date("Nov 27, 2025 14:00:00").getTime();

    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the count down date
    const distance = countDownDate - now;

    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Desktop
    $("#days").text(days.toString().padStart(2, "0"));
    $("#hours").text(hours.toString().padStart(2, "0"));
    $("#minutes").text(minutes.toString().padStart(2, "0"));
    $("#seconds").text(seconds.toString().padStart(2, "0"));

    // Mobile
    $("#m-days").text(days.toString().padStart(2, "0"));
    $("#m-hours").text(hours.toString().padStart(2, "0"));
    $("#m-minutes").text(minutes.toString().padStart(2, "0"));
    $("#m-seconds").text(seconds.toString().padStart(2, "0"));

    // If countdown finished
    if (distance < 0) {
      $("#days, #hours, #minutes, #seconds, #m-days, #m-hours, #m-minutes, #m-seconds")
        .text("00");
    }
  }

  // Update countdown every second
  updateCountdown();
  setInterval(updateCountdown, 1000);

  // =======================
  // Loading animation
  // =======================
  $(window).on("load", function () {
    $("body").addClass("loaded");
    $(".loading-overlay").fadeOut(500);
  });

  // =======================
  // Intersection Observer
  // =======================
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
        }
      });
    });

    $(".animate-on-scroll").each(function () {
      observer.observe(this);
    });
  }

  // =======================
  // Mobile Menu Toggle
  // =======================
  $("#mobile-menu-btn").on("click", function (e) {
    e.stopPropagation();
    $("#mobile-menu").toggleClass("hidden");
  });

  // Fechar ao clicar fora
  $(document).on("click", function (e) {
    if (!$(e.target).closest("#mobile-menu, #mobile-menu-btn").length) {
      $("#mobile-menu").addClass("hidden");
    }
  });

  // Fechar menu ao clicar em link
  $("#mobile-menu a").on("click", function () {
    $("#mobile-menu").addClass("hidden");
  });
});
