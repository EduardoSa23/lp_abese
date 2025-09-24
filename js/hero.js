$(document).ready(function () {

    const heroCards = [
        {
            title: "Local",
            main: "MILENIUM",
            sub: "Centro De Convenções"
        },
        {
            title: "Data",
            main: "27 de Novembro",
            sub: ""
        },
        {
            title: "Horário",
            main: "Das 14h às 18h",
            sub: ""
        }
    ];

    const $container = $("#heroCardsContainer");

    $.each(heroCards, function (i, card) {
        const $card = $(`
        <div class="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center border border-white border-opacity-20">
            <h3 class="text-white text-lg font-light mb-2 opacity-80">${card.title}</h3>
            <p class="text-[#EF7D00] text-2xl font-bold">${card.main}</p>
            ${card.sub ? `<span class="text-[#EF7D00] text-lg font-bold">${card.sub}</span>` : ""}
        </div>
        `);

        $container.append($card);
    });
});