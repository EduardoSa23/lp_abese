$(document).ready(function() {
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

    $(document).ready(function () {
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

    // Countdown Timer
    function updateCountdown() {
        // Set the date we're counting down to (27 de Novembro 2025)
        const countDownDate = new Date("Nov 27, 2025 14:00:00").getTime();
        
        // Get today's date and time
        const now = new Date().getTime();
        
        // Find the distance between now and the count down date
        const distance = countDownDate - now;
        
        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Display the result
        $("#days").text(days.toString().padStart(2, '0'));
        $("#hours").text(hours.toString().padStart(2, '0'));
        $("#minutes").text(minutes.toString().padStart(2, '0'));
        $("#seconds").text(seconds.toString().padStart(2, '0'));
        
        // If the count down is finished, write some text
        if (distance < 0) {
            $("#days").text("00");
            $("#hours").text("00");
            $("#minutes").text("00");
            $("#seconds").text("00");
        }
    }
    
    // Update countdown every second
    updateCountdown();
    setInterval(updateCountdown, 1000);
    
    // Mobile Menu Toggle
    $("#mobile-menu-btn").click(function() {
        $("#mobile-menu").removeClass("hidden").addClass("show");
        $("body").addClass("overflow-hidden");
    });
    
    $("#close-mobile-menu").click(function() {
        $("#mobile-menu").removeClass("show").addClass("hidden");
        $("body").removeClass("overflow-hidden");
    });
    
    // Close mobile menu when clicking outside
    $("#mobile-menu").click(function(e) {
        if (e.target === this) {
            $(this).removeClass("show").addClass("hidden");
            $("body").removeClass("overflow-hidden");
        }
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
    
    // Add hover effects to info cards
    $('.info-card').hover(
        function() {
            $(this).addClass('transform scale-105');
        },
        function() {
            $(this).removeClass('transform scale-105');
        }
    );
    
    
    // Add pulse animation to countdown
    setInterval(function() {
        $('.countdown-pulse').addClass('animate-pulse');
        setTimeout(function() {
            $('.countdown-pulse').removeClass('animate-pulse');
        }, 1000);
    }, 2000);
    
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
    
    // Responsive countdown adjustment
    function adjustCountdown() {
        if ($(window).width() < 768) {
            $('.countdown-container').addClass('flex-wrap');
        } else {
            $('.countdown-container').removeClass('flex-wrap');
        }
    }
    
    adjustCountdown();
    $(window).resize(adjustCountdown);
    
    // Add intersection observer for animations
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in');
                }
            });
        });
        
        $('.animate-on-scroll').each(function() {
            observer.observe(this);
        });
    }
});

