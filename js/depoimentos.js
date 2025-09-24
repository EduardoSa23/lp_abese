$(document).ready(function () {
  const track = $(".carousel-track");
  const buttonsContainer = $(".carousel-buttons");

  // Array de cards
  const cards = [
    {
      text: "“A ABESE é mais que uma associação, é um agente catalisador do desenvolvimento, da inovação e da segurança eletrônica no Brasil.”",
      img: "./images/depoimentos/andre_prado.png",
      name: "André Prado",
      role: "CEO - Emive&CO",
    },
    {
      text: "“Para o Grupo Invicta, estar na ABESE significa estar conectado com inovação, conhecimento e relacionamento de alto nível.”",
      img: "felipe-provenzano.jpg",
      name: "Felipe Provenzano",
      role: "CEO - Grupo Invicta",
    },
    {
      text: "“Participar da ABESE nos trouxe novas conexões e abriu portas para projetos inovadores.”",
      img: "pessoa3.jpg",
      name: "Maria Silva",
      role: "Diretora - TechSeg",
    },
    {
      text: "“O evento é uma oportunidade única de networking e aprendizado no setor de segurança eletrônica.”",
      img: "pessoa4.jpg",
      name: "João Santos",
      role: "CEO - SafeTech",
    },
  ];

  track.empty();
  $.each(cards, function (i, card) {
    const $card = $(`
      <div class="card-depoimentos">
        <p>${card.text}</p>
        <img src="${card.img}" alt="${card.name}">
        <h4>${card.name}</h4>
        <span>${card.role}</span>
      </div>
    `);
    track.append($card);
  });

  // Renderiza os botões
  buttonsContainer.empty();
  $.each(cards, function (i) {
    const $btn = $(
      `<span class="btn-nav ${i === 0 ? "active" : ""}" data-slide="${i}"></span>`
    );
    buttonsContainer.append($btn);
  });

  // const buttons = $(".btn-nav");
  // let currentIndex = 0;
  // const totalSlides = cards.length;
  // let autoSlide;

  // function goToSlide(index) {
  //   currentIndex = index;
  //   let translateX = -(index * 100);
  //   track.css("transform", "translateX(" + translateX + "%)");
  //   buttons.removeClass("active");
  //   buttons.eq(index).addClass("active");
  // }

  // function nextSlide() {
  //   currentIndex = (currentIndex + 1) % totalSlides;
  //   goToSlide(currentIndex);
  // }

  // // autoplay a cada 4 segundos
  // function startAutoSlide() {
  //   autoSlide = setInterval(nextSlide, 4000);
  // }

  // function stopAutoSlide() {
  //   clearInterval(autoSlide);
  // }

  // buttons.click(function () {
  //   stopAutoSlide();
  //   goToSlide($(this).data("slide"));
  //   startAutoSlide();
  // });

  // startAutoSlide();
});
