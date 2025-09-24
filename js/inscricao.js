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
    
    // Form validation and submission
    $("#inscricao-form").on("submit", function(e) {
        e.preventDefault();
        
        // Basic validation
        if (validateForm()) {
            // Show loading state
            const submitBtn = $(this).find('button[type="submit"]');
            const originalText = submitBtn.text();
            submitBtn.text('Enviando...').prop('disabled', true);
            
            // Simulate form submission (replace with actual API call when database is ready)
            setTimeout(function() {
                alert('Inscrição realizada com sucesso! Em breve você receberá um e-mail de confirmação.');
                
                // Reset form
                $("#inscricao-form")[0].reset();
                
                // Reset button
                submitBtn.text(originalText).prop('disabled', false);
                
                // Redirect to success page or home
                // window.location.href = 'index.html';
            }, 2000);
        }
    });
    
    // Form validation function
    function validateForm() {
        let isValid = true;
        const requiredFields = ['nome', 'email', 'celular', 'cpf', 'cidade', 'empresa', 'porte', 'perfil', 'cargo'];
        
        // Clear previous error states
        $('.error-message').remove();
        $('input, select').removeClass('border-red-500');
        
        requiredFields.forEach(function(fieldName) {
            const field = $(`#${fieldName}`);
            const value = field.val().trim();
            
            if (!value) {
                showFieldError(field, 'Este campo é obrigatório');
                isValid = false;
            }
        });
        
        // Email validation
        const email = $('#email').val().trim();
        if (email && !isValidEmail(email)) {
            showFieldError($('#email'), 'Por favor, insira um e-mail válido');
            isValid = false;
        }
        
        // CPF validation
        const cpf = $('#cpf').val().replace(/\D/g, '');
        if (cpf && !isValidCPF(cpf)) {
            showFieldError($('#cpf'), 'Por favor, insira um CPF válido');
            isValid = false;
        }
        
        // CNPJ validation (if filled)
        const cnpj = $('#cnpj').val().replace(/\D/g, '');
        if (cnpj && !isValidCNPJ(cnpj)) {
            showFieldError($('#cnpj'), 'Por favor, insira um CNPJ válido');
            isValid = false;
        }
        
        return isValid;
    }
    
    // Show field error
    function showFieldError(field, message) {
        field.addClass('border-red-500');
        field.after(`<p class="error-message text-red-500 text-sm mt-1">${message}</p>`);
    }
    
    // Email validation
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // CPF validation
    function isValidCPF(cpf) {
        if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
            return false;
        }
        
        let sum = 0;
        for (let i = 0; i < 9; i++) {
            sum += parseInt(cpf.charAt(i)) * (10 - i);
        }
        let remainder = (sum * 10) % 11;
        if (remainder === 10 || remainder === 11) remainder = 0;
        if (remainder !== parseInt(cpf.charAt(9))) return false;
        
        sum = 0;
        for (let i = 0; i < 10; i++) {
            sum += parseInt(cpf.charAt(i)) * (11 - i);
        }
        remainder = (sum * 10) % 11;
        if (remainder === 10 || remainder === 11) remainder = 0;
        if (remainder !== parseInt(cpf.charAt(10))) return false;
        
        return true;
    }
    
    // CNPJ validation
    function isValidCNPJ(cnpj) {
        if (cnpj.length !== 14) return false;
        
        // Validate first check digit
        let sum = 0;
        let weight = 5;
        for (let i = 0; i < 12; i++) {
            sum += parseInt(cnpj.charAt(i)) * weight;
            weight = weight === 2 ? 9 : weight - 1;
        }
        let remainder = sum % 11;
        let digit1 = remainder < 2 ? 0 : 11 - remainder;
        
        if (digit1 !== parseInt(cnpj.charAt(12))) return false;
        
        // Validate second check digit
        sum = 0;
        weight = 6;
        for (let i = 0; i < 13; i++) {
            sum += parseInt(cnpj.charAt(i)) * weight;
            weight = weight === 2 ? 9 : weight - 1;
        }
        remainder = sum % 11;
        let digit2 = remainder < 2 ? 0 : 11 - remainder;
        
        return digit2 === parseInt(cnpj.charAt(13));
    }
    
    // Input masks
    $('#celular').on('input', function() {
        let value = $(this).val().replace(/\D/g, '');
        value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
        value = value.replace(/(\d)(\d{4})$/, '$1-$2');
        $(this).val(value);
    });
    
    $('#cpf').on('input', function() {
        let value = $(this).val().replace(/\D/g, '');
        value = value.replace(/(\d{3})(\d)/, '$1.$2');
        value = value.replace(/(\d{3})(\d)/, '$1.$2');
        value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
        $(this).val(value);
    });
    
    $('#cnpj').on('input', function() {
        let value = $(this).val().replace(/\D/g, '');
        value = value.replace(/^(\d{2})(\d)/, '$1.$2');
        value = value.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
        value = value.replace(/\.(\d{3})(\d)/, '.$1/$2');
        value = value.replace(/(\d{4})(\d)/, '$1-$2');
        $(this).val(value);
    });
    
    // Real-time validation feedback
    $('input[required], select[required]').on('blur', function() {
        const field = $(this);
        const value = field.val().trim();
        
        // Remove previous error for this field
        field.next('.error-message').remove();
        field.removeClass('border-red-500 border-green-500');
        
        if (!value) {
            field.addClass('border-red-500');
            field.after('<p class="error-message text-red-500 text-sm mt-1">Este campo é obrigatório</p>');
        } else {
            field.addClass('border-green-500');
        }
    });
    
    // Email real-time validation
    $('#email').on('blur', function() {
        const email = $(this).val().trim();
        $(this).next('.error-message').remove();
        $(this).removeClass('border-red-500 border-green-500');
        
        if (email) {
            if (isValidEmail(email)) {
                $(this).addClass('border-green-500');
            } else {
                $(this).addClass('border-red-500');
                $(this).after('<p class="error-message text-red-500 text-sm mt-1">Por favor, insira um e-mail válido</p>');
            }
        }
    });
    
    // Smooth scrolling for form errors
    function scrollToFirstError() {
        const firstError = $('.border-red-500').first();
        if (firstError.length) {
            $('html, body').animate({
                scrollTop: firstError.offset().top - 100
            }, 500);
            firstError.focus();
        }
    }
    
    // Add loading animation
    $(window).on('load', function() {
        $('body').addClass('loaded');
        $('.loading-overlay').fadeOut(500);
    });
    
    // Form progress indicator (future enhancement)
    function updateFormProgress() {
        const totalFields = $('input[required], select[required]').length;
        const filledFields = $('input[required], select[required]').filter(function() {
            return $(this).val().trim() !== '';
        }).length;
        
        const progress = (filledFields / totalFields) * 100;
        console.log(`Form progress: ${progress.toFixed(0)}%`);
        
        // Future: Update progress bar
        // $('.progress-bar').css('width', progress + '%');
    }
    
    // Update progress on input change
    $('input, select').on('input change', updateFormProgress);
    
    // Initialize progress
    updateFormProgress();
});

