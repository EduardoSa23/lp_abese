$(document).ready(function () {
  const patrocinadores = [
    { img: "./images/logos/logo_abese.png", texto: "Logo Abese"},
    { img: "./images/logos/logo_auvo.png", texto: "Logo Abese"},
    { img: "./images/logos/logo_fulltime.png", texto: "Logo Abese"},
    { img: "./images/logos/logo_getrak.png", texto: "Logo Abese"},
    { img: "./images/logos/logo_ifaseg.png", texto: "Logo Abese"},
    { img: "./images/logos/logo_johnsoncontrols.png", texto: "Logo Abese"},
    { img: "./images/logos/logo_moninf.png", texto: "Logo Abese"},
    { img: "./images/logos/logo_ppa.png", texto: "Logo Abese"},
    { img: "./images/logos/logo_segware.png", texto: "Logo Abese"},
    { img: "./images/logos/logo_netti.png", texto: "Logo Abese"},
    { img: "./images/logos/logo_x3tech.png", texto: "Logo Abese"},
    { img: "./images/logos/logo_virtueyes.png", texto: "Logo Abese"},
  ];

  const $container = $("#sponsorsContainer");

  $.each(patrocinadores, function (i, sponsor) {
    const $card = $(`
      <div class="card-patrocinador bg-white rounded-2xl shadow-lg p-8 flex items-center justify-center">
        <div class="text-center">
            <img src="${sponsor.img}" alt="${sponsor.texto}" class=" mr-2">
        </div>
      </div>
    `);

    $container.append($card);
  });

});
