$(document).ready(function() {
     const palestrantes = [
        {
        nome: "Selma Migliori",
        titulo: "Painel 1",
        descricao: "Selma Migliori é presidente da ABESE – Associação Brasileira das Empresas de Sistemas Eletrônicos de Segurança. Tem formação em Engenheira Eletrônica pela Escola de Engenharia Mauá do Instituto Mauá de Tecnologia - IMT. Possui diversos cursos em gestão empresarial, segurança eletrônica, elaboração de projetos técnicos de segurança, entre outros.",
        foto: "./images/depoimentos/selma_migliore.png", // pode usar img em vez de SVG
        },
        {
        nome: "Jerry Antunes",
        titulo: "Painel 1",
        descricao: "Jerry é Delegado de Polícia Federal desde 1997, com uma carreira marcada por atuações estratégicas no combate a crimes fazendários, previdenciários e instalação de núcleos de combate a entorpecentes e crimes postais. Ocupou posições de destaque como Superintendente da PF em Minas Gerais e Adido Policial na Embaixada do Brasil na Espanha. Em 2021, foi cedido ao Ministério da Justiça e Segurança Pública como Diretor de Operações, coordenando a integração das forças de segurança federais, estaduais e municipais até janeiro de 2022. Após sua aposentadoria do serviço público em fevereiro de 2022, ingressou no Banco Santander Brasil, onde atualmente gerencia a Superintendência de Pessoas, Patrimônio e Negócios, com abrangência nacional. Além disso, é o atual Diretor Setorial de Segurança Bancária da FEBRABAN, aplicando sua vasta experiência em segurança pública ao setor corporativo e bancário brasileiro.",
        foto: "./images/depoimentos/jerry_antunes.png",
        },
        {
        nome: "Caique Paes de Barros",
        titulo: "Painel 1",
        descricao: "Líder de iniciativas que conectam Agricultura e Tecnologia para gerar impacto social alto no campo, está à frente do FazMais, movimento que apoia produtores agrícolas e suas associações, sindicatos, cooperativas e comunidades rurais, promovendo práticas mais sustentáveis (econômicas, sociais e ambientais) com uso de tecnologias conectadas. Foi Coordenador-Geral da ConectarAGRO, entidade com o propósito da expansão da conectividade rural, quando colaborou com a criação de ferramentas como a calculadora de benefícios e o Indicador de Conectividade Rural (ICR), referência para políticas públicas. Atuou na Secretaria de Agricultura e Abastecimentodo Estado de São Paulo SP na coordenação intersecretarial que originou o programa Rotas Rurais, de grande impacto na prestação de serviços públicos às comunidades rurais como segurança, saúde e educação. ",
        foto: "./images/depoimentos/caique_paes.png",
        },
    ];

    const $grid = $("#palestrantes .grid");

    // Monta dinamicamente os cards
    $.each(palestrantes, function (i, p) {
        const $card = $(`
        <div class="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 speaker-card">
            <div class="w-24 h-24 bg-gray-400 rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden">
                <img src="${p.foto}" alt="${p.nome}" class="w-full h-full object-cover">
            </div>
            <h3 class="text-white text-xl font-bold mb-2">${p.nome}</h3>
            <p class="text-white text-sm opacity-80 mb-2">${p.titulo}</p>
            <p class="text-white text-sm opacity-70">${p.descricao}</p>
        </div>
        `);

        $grid.append($card);
    });

    // Smooth scrolling for anchor links
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 80
            }, 1000);
        }
    });
    
    // Speaker cards hover effects
    $('.speaker-card').hover(
        function() {
            $(this).addClass('transform scale-105');
        },
        function() {
            $(this).removeClass('transform scale-105');
        }
    );
    
    // CTA Button click handlers
    $('button:contains("Inscreva-se")').click(function() {
        // Add your registration logic here
        alert('Redirecionando para a página de inscrição...');
        // window.location.href = 'registration-page-url';
    });
    
    // Parallax effect for background elements
    $(window).scroll(function() {
        const scrolled = $(this).scrollTop();
        const parallax = $('.parallax');
        const speed = 0.5;
        
        parallax.each(function() {
            const yPos = -(scrolled * speed);
            $(this).css('transform', 'translateY(' + yPos + 'px)');
        });
    });
    
    // Add loading animation
    $(window).on('load', function() {
        $('body').addClass('loaded');
        $('.loading-overlay').fadeOut(500);
    });
    
    // Speaker card animation on scroll
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('animate-fade-in-up');
                    }, index * 100); // Stagger animation
                }
            });
        }, {
            threshold: 0.1
        });
        
        $('.speaker-card').each(function() {
            observer.observe(this);
        });
    }
    
    // Add click event to speaker cards for future modal functionality
    $('.speaker-card').click(function() {
        const speakerName = $(this).find('h3').text();
        console.log('Clicked on:', speakerName);
        // Future: Open modal with speaker details
        // showSpeakerModal(speakerName);
    });
    
    // Add search functionality (for future use)
    function filterSpeakers(searchTerm) {
        $('.speaker-card').each(function() {
            const speakerName = $(this).find('h3').text().toLowerCase();
            const speakerTitle = $(this).find('p:first').text().toLowerCase();
            
            if (speakerName.includes(searchTerm.toLowerCase()) || 
                speakerTitle.includes(searchTerm.toLowerCase())) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    }
    
    // Add responsive grid adjustments
    function adjustGrid() {
        const windowWidth = $(window).width();
        const speakerGrid = $('.speaker-card').parent();
        
        if (windowWidth < 768) {
            speakerGrid.removeClass('lg:grid-cols-3 md:grid-cols-2').addClass('grid-cols-1');
        } else if (windowWidth < 1024) {
            speakerGrid.removeClass('lg:grid-cols-3 grid-cols-1').addClass('md:grid-cols-2');
        } else {
            speakerGrid.removeClass('md:grid-cols-2 grid-cols-1').addClass('lg:grid-cols-3');
        }
    }
    
    adjustGrid();
    $(window).resize(adjustGrid);
});

