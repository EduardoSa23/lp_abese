$(function () {
  const faqs = [
    {
      pergunta: "Quem pode participar do Congresso ABESE?",
      resposta:
        "O evento é voltado para empresários, gestores, profissionais e lideranças do setor de segurança eletrônica que buscam atualização, networking e novas oportunidades de negócio.",
    },
    {
      pergunta: "Quando e onde acontece o Congresso ABESE 2025?",
      resposta:
        "O evento será realizado no dia 27 de novembro de 2025, das 14h às 18h, no - MILENIUM CENTRO DE CONVENÇÕES, em São Paulo (SP).",
    },
    {
      pergunta: "O que você vai encontrar no evento?",
      resposta:
        "Palestras e painéis com especialistas do setor, insights sobre regulamentação, tecnologia e mercado, além de oportunidades únicas de networking e geração de negócios.",
    },
    {
      pergunta: "Tenho que pagar para participar do Congresso ABESE 2025?",
      resposta: "Não. O Congresso ABESE 2025 é gratuito.",
    },
    {
      pergunta: "O Congresso ABESE é aberto a não associados?",
      resposta: "Sim! O evento é aberto a todo o setor, mas associados ABESE têm condições especiais de participação.",
    },
  ];

  const $faqContainer = $("#faqContainer");

  // Monta cada item do FAQ dinamicamente
  $.each(faqs, function (i, faq) {
    const $item = $(`
      <div class="faq-item border border-b-0 rounded-xl shadow-lg overflow-hidden mb-4">
        <button class="faq-header w-full flex justify-between items-center p-4 text-left font-semibold text-[#0c2e57] bg-white hover:bg-gray-50 focus:outline-none"
                aria-expanded="false">
          <span>${faq.pergunta}</span>
          <i class="faq-icon bi bi-chevron-down text-[#404040] transition-transform duration-300"></i>
        </button>
        <div class="faq-content px-4 pb-4 text-[#404040]" style="display:none; opacity:0;">
          <p class="border-t border-[#E5E3DF] pt-4">${faq.resposta}</p>
        </div>
      </div>
    `);

    $faqContainer.append($item);
  });

  // Lógica do accordion
  $faqContainer.on("click", ".faq-header", function () {
    const $btn = $(this);
    const $content = $btn.next(".faq-content");
    const $icon = $btn.find(".faq-icon");

    if ($content.is(":visible")) {
      // Fechar
      $content.stop(true, true).animate({ opacity: 0 }, 200, function () {
        $content.hide();
      });
      $btn.attr("aria-expanded", "false");
      $icon.removeClass("rotate-180");
    } else {
      // Fecha todos antes
      $faqContainer.find(".faq-content:visible").stop(true, true).animate({ opacity: 0 }, 200, function () {
        $(this).hide();
      });
      $faqContainer.find(".faq-header").attr("aria-expanded", "false");
      $faqContainer.find(".faq-icon").removeClass("rotate-180");

      // Abre o clicado
      $content.show().stop(true, true).animate({ opacity: 1 }, 300);
      $btn.attr("aria-expanded", "true");
      $icon.addClass("rotate-180");
    }
  });
});
