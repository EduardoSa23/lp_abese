$(document).ready(function () {
    const destaques = [
    { texto: "atualização", img: "./images/icons/person.svg" },
    { texto: "networking",    img: "./images/icons/networking.svg" },
    { texto: "tecnologia",    img: "./images/icons/tecnologia.svg" },
    { texto: "regulamentação",img: "./images/icons/regulamentacao.svg" },
    { texto: "mercado",       img: "./images/icons/mercado.svg" }
    ];


  const $container = $("#pqParticiparDestaques");
  $container.empty();

  $.each(destaques, function (i, item) {
    const $tag = $(`
      <div class="flex items-center bg-[#183154] text-white px-4 py-2 rounded-full text-sm">
        <img src="${item.img}" alt="${item.texto}" class="w-6 h-6 mr-2">
        <span class="text-[16px]">${item.texto}</span>
      </div>
    `);
    $container.append($tag);
  });
});
