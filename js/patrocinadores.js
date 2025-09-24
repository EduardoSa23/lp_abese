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
    
    // CTA Button click handlers
    $('button:contains("Quero ser Patrocinador")').click(function() {
        // Add your sponsorship contact logic here
        alert('Redirecionando para informações de patrocínio...');
        // window.location.href = 'mailto:patrocinio@abese.org.br';
    });
    
    $('button:contains("Download do Media Kit")').click(function() {
        // Add your media kit download logic here
        alert('Download do Media Kit iniciado...');
        // window.open('path/to/media-kit.pdf', '_blank');
    });
    
    // Smooth scrolling for internal links
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 100
            }, 1000);
        }
    });
    
    // Add animation on scroll for sponsor cards
    function animateOnScroll() {
        $('.card-patrocinador').each(function() {
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();
            
            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                $(this).addClass('animate-fade-in');
            }
        });
    }
    
    // Run animation on scroll
    $(window).on('scroll', animateOnScroll);
    
    // Run animation on page load
    animateOnScroll();
    
    // Add pulse animation to CTA buttons
    setInterval(function() {
        $('button:contains("Quero ser Patrocinador")').addClass('animate-pulse');
        setTimeout(function() {
            $('button:contains("Quero ser Patrocinador")').removeClass('animate-pulse');
        }, 1000);
    }, 5000);
    
    // Sponsor card click handler
    $('.card-patrocinador').click(function() {
        // Add sponsor detail modal or redirect logic here
        var sponsorName = $(this).find('span').text();
        console.log('Clicked on sponsor:', sponsorName);
        // You can add modal functionality or redirect to sponsor page
    });
    
    // Add loading animation
    $(window).on('load', function() {
        $('body').addClass('loaded');
        $('.loading-overlay').fadeOut(500);
    });
    
    // Responsive grid adjustment
    function adjustGrid() {
        var windowWidth = $(window).width();
        var sponsorGrid = $('.grid-patrocinador');
        
        if (windowWidth < 768) {
            sponsorGrid.removeClass('lg:grid-cols-6 md:grid-cols-3').addClass('grid-cols-2');
        } else if (windowWidth < 1024) {
            sponsorGrid.removeClass('lg:grid-cols-6 grid-cols-2').addClass('md:grid-cols-3');
        } else {
            sponsorGrid.removeClass('grid-cols-2 md:grid-cols-3').addClass('lg:grid-cols-6');
        }
    }
    
    // Run on window resize
    $(window).resize(adjustGrid);
    
    // Run on page load
    adjustGrid();
    
    // Add search functionality (future enhancement)
    function searchSponsors(query) {
        $('.bg-white').each(function() {
            var sponsorName = $(this).find('span').text().toLowerCase();
            var sponsorDescription = $(this).find('p').text().toLowerCase();
            
            if (sponsorName.includes(query.toLowerCase()) || sponsorDescription.includes(query.toLowerCase())) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    }
    
    // Add filter functionality (future enhancement)
    function filterSponsorsByCategory(category) {
        $('.bg-white').each(function() {
            var sponsorCategory = $(this).find('p').text().toLowerCase();
            
            if (category === 'all' || sponsorCategory.includes(category.toLowerCase())) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    }
    
    // Add sponsor counter
    function updateSponsorCount() {
        var totalSponsors = $('.bg-white').length - 3; // Subtract CTA and benefit cards
        console.log('Total sponsors:', totalSponsors);
        // You can display this count somewhere on the page
    }
    
    updateSponsorCount();
});

