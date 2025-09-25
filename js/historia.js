$(document).ready(function () {
  const cardsHistoria = [
    {
      icon: "./images/icons/calendario.svg",
      destaque: 500,
      titulo: "eventos realizados",
      descricao: "Ao longo de mais de 30 anos",
      sufixo: "+"
    },
    {
      icon: "./images/icons/cidades.svg",
      destaque: 50,
      titulo: "cidades pelo Brasil",
      descricao: "Cobertura nacional completa",
      sufixo: "+"
    },
    {
      icon: "./images/icons/inscritos.svg",
      destaque: 800000,
      titulo: "inscritos acumulados",
      descricao: "Profissionais capacitados",
      sufixo: "+"
    },
    {
      icon: "./images/icons/marcas.svg",
      destaque: 100,
      titulo: "marcas patrocinadas",
      descricao: "Líderes do mercado",
      sufixo: "+"
    }
  ];

  const $container = $("#historiaCards");
  $container.empty();

  $.each(cardsHistoria, function (i, card) {
    const $card = $(`
      <div class="bg-[#D0D0D3] text-gray-900 px-6 py-8 rounded-xl shadow-lg">
        <div class="mb-6">
          <img src="${card.icon}" alt="${card.titulo}" class="w-16 h-16 mx-auto">
        </div>
        <h3 class="contador text-4xl text-[#183154] font-bold text-center" 
            data-valor="${card.destaque}" 
            data-sufixo="${card.sufixo || ''}">0</h3>
        <p class="text-[#404040] mt-2 text-lg text-center">${card.titulo}</p>
        <p class="text-sm text-[#5E5E5E] mt-2 text-center">${card.descricao}</p>
      </div>
    `);
    $container.append($card);
  });

  function animarContagem($el, valorFinal, sufixo) {
    let valorAtual = 0;
    const incremento = Math.ceil(valorFinal / 100);
    const intervalo = setInterval(() => {
      valorAtual += incremento;
      if (valorAtual >= valorFinal) {
        valorAtual = valorFinal;
        clearInterval(intervalo);
      }
      $el.text(valorAtual.toLocaleString("pt-BR") + sufixo);
    }, 20);
  }

  const sectionHistoria = document.querySelector("#historia");
  const observerHistoria = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        $("#historiaCards .contador").each(function () {
          const $this = $(this);
          const valorFinal = parseInt($this.data("valor"));
          const sufixo = $this.data("sufixo") || "";
          animarContagem($this, valorFinal, sufixo);
        });
        obs.unobserve(sectionHistoria);
      }
    });
  }, { threshold: 0.3 });

  observerHistoria.observe(sectionHistoria);
});
