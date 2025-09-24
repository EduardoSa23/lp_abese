$(document).ready(function() {
     const palestrantes = [
        {
        nome: "Palestrante 1",
        titulo: "Especialista em Segurança",
        descricao: "Informações em breve",
        foto: "./images/palestrantes/palestrante1.jpg", // pode usar img em vez de SVG
        },
        {
        nome: "Palestrante 2",
        titulo: "Especialista em Segurança",
        descricao: "Informações em breve",
        foto: "./images/palestrantes/palestrante2.jpg",
        },
        {
        nome: "Palestrante 3",
        titulo: "Especialista em Segurança",
        descricao: "Informações em breve",
        foto: "./images/palestrantes/palestrante3.jpg",
        },
        {
        nome: "Palestrante 4",
        titulo: "Especialista em Segurança",
        descricao: "Informações em breve",
        foto: "./images/palestrantes/palestrante4.jpg",
        },
        {
        nome: "Palestrante 5",
        titulo: "Especialista em Segurança",
        descricao: "Informações em breve",
        foto: "./images/palestrantes/palestrante5.jpg",
        },
        {
        nome: "Palestrante 6",
        titulo: "Especialista em Segurança",
        descricao: "Informações em breve",
        foto: "./images/palestrantes/palestrante6.jpg",
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

