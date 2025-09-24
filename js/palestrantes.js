$(document).ready(function() {
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

