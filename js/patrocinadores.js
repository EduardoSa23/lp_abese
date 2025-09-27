$(document).ready(function () {
  const patrocinadores = [
    { img: "./images/logos/logo_exposec.png", texto: "Logo Exposec"},
    { img: "./images/logos/logo_fulltime.png", texto: "Logo Fulltime"},
    { img: "./images/logos/logo_getrak.png", texto: "Logo Getrak"},
    { img: "./images/logos/logo_ifaseg.png", texto: "Logo Ifaseg"},
    { img: "./images/logos/logo_johnsoncontrols.png", texto: "Logo Johnson Controls"},
  ];

   const $container = $("#sponsorsContainer");

  $.each(patrocinadores, function (i, sponsor) {
    const $card = $(`
      <div class="card-patrocinador opacity-0 transition-opacity duration-700 ease-out bg-white rounded-2xl shadow-lg p-8 flex items-center justify-center transform transition-transform duration-500 ease-in-out hover:scale-105">
        <div class="text-center">
            <img src="${sponsor.img}" alt="${sponsor.texto}" class="mx-auto">
        </div>
      </div>
    `);

    $container.append($card);
  });

  const patrocinadoresInferior = [
    { img: "./images/logos/logo_moninf.png", texto: "Logo Moninf"},
    { img: "./images/logos/logo_ppa.png", texto: "Logo PPA"},
    { img: "./images/logos/logo_segware.png", texto: "Logo Segware"},
    { img: "./images/logos/logo_netti.png", texto: "Logo Netti"},
    { img: "./images/logos/logo_x3tech.png", texto: "Logo X3Tech"},
    { img: "./images/logos/logo_virtueyes.png", texto: "Logo Virtueyes"},
  ]
 
   const $containerInferior = $("#sponsorsContainerInferior");

    $.each(patrocinadoresInferior, function (i, sponsorInferior) {
    const $cardInferior = $(`
      <div class="card-patrocinador opacity-0 transition-opacity duration-700 ease-out bg-white rounded-2xl shadow-lg p-8 flex items-center justify-center transform transition-transform duration-500 ease-in-out hover:scale-105">
        <div class="text-center">
            <img src="${sponsorInferior.img}" alt="${sponsorInferior.texto}" class="mx-auto">
        </div>
      </div>
    `);

    $containerInferior.append($cardInferior);
  });

  // Observer para os cards (apenas fade in)
  const observerCards = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        $(entry.target)
          .removeClass("opacity-0")
          .addClass("opacity-100");
        observerCards.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  $(".card-patrocinador").each(function () {
    observerCards.observe(this);
  });

  // Observer para a seção inteira (fade in na entrada da sessão)
  const observerSection = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        $(entry.target)
          .removeClass("opacity-0")
          .addClass("opacity-100");
        observerSection.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  // já adiciona classes iniciais de transição na seção
  const $section = $("#patrocinadores");
  $section.addClass("opacity-0 transition-opacity duration-1000 ease-out");
  observerSection.observe($section[0]);
});
