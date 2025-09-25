$(document).ready(function () {
  const destaques = [
    { texto: "atualização", img: "./images/icons/person.svg" },
    { texto: "networking", img: "./images/icons/networking.svg" },
    { texto: "tecnologia", img: "./images/icons/tecnologia.svg" },
    { texto: "regulamentação", img: "./images/icons/regulamentacao.svg" },
    { texto: "mercado", img: "./images/icons/mercado.svg" }
  ];

  const $container = $("#pqParticiparDestaques");
  $container.empty();

  $.each(destaques, function (i, item) {
    const $tag = $(`
      <div class="tag-item opacity-0 translate-y-10 flex items-center bg-[#183154] text-white px-4 py-2 rounded-full text-sm transition-all duration-700 ease-out">
        <img src="${item.img}" alt="${item.texto}" class="w-6 h-6 mr-2">
        <span class="text-[16px]">${item.texto}</span>
      </div>
    `);
    $container.append($tag);
  });

  // Intersection Observer
  const section = document.querySelector("#pqParticipar");
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // anima cada tag com delay
        $("#pqParticiparDestaques .tag-item").each(function (i) {
          setTimeout(() => {
            $(this).removeClass("opacity-0 translate-y-10").addClass("opacity-100 translate-y-0");
          }, i * 200); // atraso em cascata
        });

        obs.unobserve(section); // roda só uma vez
      }
    });
  }, { threshold: 0.3 });

  observer.observe(section);
});
