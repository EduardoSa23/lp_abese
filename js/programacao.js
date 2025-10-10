$(document).ready(function () {
  const cardsProgramacao = [
    { icon: "./images/icons/pessoas_branco.svg", title: "13h30", subtitulo: "Início do Credenciamento", description: "Recepção dos participantes e entrega de materiais" },
    { icon: "./images/icons/lampada_branca.svg", title: "14h00", subtitulo: "Abertura do Evento", description: "Apresentação oficial do Congresso ABESE 2025" },
    { icon: "./images/icons/cidade_branca.svg", title: "14h40", subtitulo: "Painel 1: Tríplice Aliança: Governo, Mercado e Universidade da Segurança do Futuro", 
       description: `
        <ul class="list-disc list-inside text-left space-y-1 text-[#404040]">
          <li>Estatuto da Segurança Privada</li>
          <li>Segurança Colaborativa</li>
          <li>A interferência do poder público na iniciativa privada - Portaria Remota e Reforma Tributária</li>
        </ul>
      `
    },
    { icon: "./images/icons/wifi_branco.svg", title: "15h40", subtitulo: "Painel 2 - Revolução 5.0 IA, Dados e Cibersegurança", description: "As mais recentes inovações tecnológicas transformando o setor" },
    { icon: "./images/icons/seguranca_branco.svg", title: "16h40", subtitulo: "Keynote Speaker", description: "" },
    { icon: "./images/icons/pessoas_branco.svg", title: "17h40", subtitulo: "Encerramento", description: "Considerações finais e próximos passos" },
    { icon: "./images/icons/xicara_branco.svg", title: "18h00", subtitulo: "Coquetel", description: "Networking e confraternização entre os participantes" }
  ];

  // MOBILE
  const $mobile = $("#cardsProgramacaoMobile");
  $mobile.empty();
  $.each(cardsProgramacao, function (i, card) {
    const $card = $(`
      <div class="card-programacao opacity-0 translate-y-8 transition-all duration-700 ease-out flex flex-col bg-white rounded-xl shadow border border-gray-200 px-7 py-5 gap-3">
        <div class="flex items-center gap-4 justify-center">
          <div class="bg-orange-500 text-white w-12 h-12 p-3 rounded-full flex items-center justify-center">
            <img src="${card.icon}" alt="${card.subtitulo}" class="w-6 h-6">
          </div>
          <p class="font-bold text-2xl text-[#183154]">${card.title}</p>
        </div>
        <div class="pl-0">
          <p class="font-bold text-center text-lg text-[#183154]">${card.subtitulo}</p>
          <p class="text-[#666666] text-center">${card.description}</p>
        </div>
      </div>
    `);
    $mobile.append($card);
  });

  // DESKTOP
  const $desktop = $("#cardsProgramacaoDesktop");
  $desktop.empty();
  $.each(cardsProgramacao, function (i, card) {
    const $card = $(`
      <div class="card-programacao opacity-0 translate-y-8 transition-all duration-700 ease-out flex flex-col md:flex-row bg-white rounded-xl shadow border border-gray-200 px-7 py-5 gap-3">
        <div class="flex items-center gap-4 justify-center">
          <div class="bg-orange-500 text-white w-12 h-12 p-3 rounded-full flex items-center justify-center">
            <img src="${card.icon}" alt="${card.subtitulo}" class="w-6 h-6">
          </div>
        </div>
        <div class="pl-0 md:pl-4">
          <div class="flex items-start gap-8 md:w-[80%] w-full">
            <p class="font-bold text-2xl text-[#183154]">${card.title}</p>
            <p class="font-bold text-lg text-[#183154]">${card.subtitulo}</p>
          </div>
          <p class="text-[#666666]">${card.description}</p>
        </div>
      </div>
    `);
    $desktop.append($card);
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        $(entry.target)
          .removeClass("opacity-0 translate-y-8")
          .addClass("opacity-100 translate-y-0");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  $(".card-programacao").each(function () {
    observer.observe(this);
  });

  const $inscricao = $(".inscricao-programacao");
  if ($inscricao.length) {
    $inscricao.addClass("opacity-0 translate-y-8 transition-all duration-700 ease-out");
    observer.observe($inscricao[0]);
  }

  const $sujeitaAlteracao = $(".sujeita-alteracao");
  if ($sujeitaAlteracao.length) {
    $sujeitaAlteracao.addClass("opacity-0 translate-y-8 transition-all duration-700 ease-out");
    observer.observe($sujeitaAlteracao[0]);
  }
});
