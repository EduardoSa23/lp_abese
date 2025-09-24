$(document).ready(function () {    
    const cardsHistoria = [
    {
        icon: "./images/icons/calendario.svg",
        destaque: "500+",
        titulo: "eventos realizados",
        descricao: "Ao longo de mais de 30 anos"
    },
    {
        icon: "./images/icons/cidades.svg",
        destaque: "50+",
        titulo: "cidades pelo Brasil",
        descricao: "Cobertura nacional completa"
    },
    {
        icon: "./images/icons/inscritos.svg",
        destaque: "800.000+",
        titulo: "inscritos acumulados",
        descricao: "Profissionais capacitados"
    },
    {
        icon: "./images/icons/marcas.svg",
        destaque: "100+",
        titulo: "marcas patrocinadas",
        descricao: "Líderes do mercado"
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
            <h3 class="text-4xl text-[#183154] font-bold text-center">${card.destaque}</h3>
            <p class="text-[#404040] mt-2 text-lg text-center">${card.titulo}</p>
            <p class="text-sm text-[#5E5E5E] mt-2 text-center">${card.descricao}</p>
        </div>
        `);
        $container.append($card);
    });
});
