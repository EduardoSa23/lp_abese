$(document).ready(function () {
  const cardsProgramacao = [
    { icon: "./images/icons/pessoas_branco.svg", title: "13h30", subtitulo: "Início do Credenciamento", description: "Recepção dos participantes e entrega de materiais" },
    { icon: "./images/icons/lampada_branca.svg", title: "14h00", subtitulo: "Abertura do Evento", description: "Apresentação oficial do Congresso ABESE 2025" },
    { icon: "./images/icons/cidade_branca.svg", title: "14h40", subtitulo: "Painel 1 - ABESELabs e Público X Privado", description: "Discussão sobre a interação entre setor público e privado na segurança eletrônica" },
    { icon: "./images/icons/wifi_branco.svg", title: "15h40", subtitulo: "Painel 2 - Inovações - IOT, IA, Cibersegurança", description: "As mais recentes inovações tecnológicas transformando o setor" },
    { icon: "./images/icons/seguranca_branco.svg", title: "16h40", subtitulo: "Painel 3 - Novos Mercados e Novas Oportunidades", description: "Explorando verticais e oportunidades emergentes no mercado" },
    { icon: "./images/icons/pessoas_branco.svg", title: "17h40", subtitulo: "Encerramento", description: "Considerações finais e próximos passos" },
    { icon: "./images/icons/xicara_branco.svg", title: "18h00", subtitulo: "Coquetel", description: "Networking e confraternização entre os participantes" }
  ];

  // MOBILE
  const $mobile = $("#cardsProgramacaoMobile");
  $mobile.empty();
  $.each(cardsProgramacao, function (i, card) {
    const $card = $(`
      <div class="flex flex-col bg-white rounded-xl shadow border border-gray-200 px-7 py-5 gap-3">
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
      <div class="flex flex-col md:flex-row bg-white rounded-xl shadow border border-gray-200 px-7 py-5 gap-3">
        <div class="flex items-center gap-4 justify-center">
          <div class="bg-orange-500 text-white w-12 h-12 p-3 rounded-full flex items-center justify-center">
            <img src="${card.icon}" alt="${card.subtitulo}" class="w-6 h-6">
          </div>
        </div>
        <div class="pl-0 md:pl-4">
          <div class="flex items-end gap-8">
            <p class="font-bold text-2xl text-[#183154]">${card.title}</p>
            <p class="font-bold text-lg text-[#183154]">${card.subtitulo}</p>
          </div>
          <p class="text-[#666666]">${card.description}</p>
        </div>
      </div>
    `);
    $desktop.append($card);
  });
});
