$(function () {
  const formFields = [
    { id: "nome", label: "Nome completo", kind: "input", inputType: "text", placeholder: "Digite seu nome completo", required: true, icon:"bi-person" },
    { id: "email", label: "E-mail", kind: "input", inputType: "email", placeholder: "Digite seu e-mail", required: true, icon: "bi-envelope" },

    { id: "celular", label: "Celular", kind: "input", inputType: "tel", placeholder: "(11) 99999-9999", required: true, icon: "bi-telephone" },
    { id: "cpf", label: "CPF", kind: "input", inputType: "text", placeholder: "000.000.000-00", required: true, icon: "bi-person-badge" },

    { id: "cidade", label: "Cidade", kind: "input", inputType: "text", placeholder: "Digite sua cidade", required: true, icon: "bi-geo" },
    { id: "empresa", label: "Empresa", kind: "input", inputType: "text", placeholder: "Digite o nome da empresa", required: true, icon: "bi-building" },

    // CNPJ ocupa 2 colunas
    { id: "cnpj", label: "CNPJ", kind: "input", inputType: "text", placeholder: "00.000.000/0000-00", required: false, gridClass: "md:col-span-2", icon: "bi-credit-card-2-front" },

    // selects na mesma linha (porte + perfil)
    {
      id: "porte",
      label: "Qual o porte da sua empresa?",
      kind: "select",
      required: true,
      options: [
        { value: "", text: "Selecione o porte" },
        { value: "micro", text: "Microempresa" },
        { value: "pequena", text: "Pequena empresa" },
        { value: "media", text: "Média empresa" },
        { value: "grande", text: "Grande empresa" }
      ]
    },
    {
      id: "perfil",
      label: "Qual o perfil da sua empresa?",
      kind: "select",
      required: true,
      options: [
        { value: "", text: "Selecione o perfil" },
        { value: "fabricante", text: "Fabricante" },
        { value: "distribuidor", text: "Distribuidor" },
        { value: "integrador", text: "Integrador" },
        { value: "instalador", text: "Instalador" },
        { value: "consultor", text: "Consultor" },
        { value: "usuario-final", text: "Usuário Final" }
      ]
    },

    // cargo ocupa 2 colunas
    {
      id: "cargo",
      label: "Qual seu cargo na empresa?",
      kind: "select",
      required: true,
      gridClass: "md:col-span-2",
      options: [
        { value: "", text: "Selecione o cargo" },
        { value: "diretor", text: "Diretor" },
        { value: "gerente", text: "Gerente" },
        { value: "coordenador", text: "Coordenador" },
        { value: "supervisor", text: "Supervisor" },
        { value: "analista", text: "Analista" },
        { value: "tecnico", text: "Técnico" },
        { value: "vendedor", text: "Vendedor" },
        { value: "consultor", text: "Consultor" },
        { value: "proprietario", text: "Proprietário" },
        { value: "outro", text: "Outro" }
      ]
    }
  ];

  const $formGrid = $("#inscricao-form .grid-dinamica");
  if ($formGrid.length === 0) {
    console.warn("Div .grid-dinamica não encontrada. Coloque <div class=\"grid grid-cols-1 md:grid-cols-2 gap-6 grid-dinamica\"></div> dentro do form.");
    return;
  }
  $formGrid.empty();

  formFields.forEach(field => {
    const gridClass = field.gridClass ? field.gridClass : "";
    const iconHtml = field.icon ? `<i class="bi ${field.icon} text-[#183154] inline mr-1"></i>` : "";
    const requiredMark = field.required ? ' <span class="text-[#183154]">*</span>' : "";

    const $col = $(`<div class="${gridClass}"></div>`);

    const $label = $(`
      <label for="${field.id}" class="block font-medium text-[#183154] mb-2">
        ${iconHtml}${field.label}${requiredMark}
      </label>
    `);

    if (field.kind === "input") {
      const $input = $(`
        <input
          type="${field.inputType}"
          id="${field.id}"
          name="${field.id}"
          ${field.required ? "required" : ""}
          placeholder="${field.placeholder || ""}"
          class="text-[#404040] w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
        >
      `);
      $col.append($label).append($input);
    } else if (field.kind === "select") {
      // monta options
      let optionsHtml = field.options.map(opt => `<option value="${opt.value}">${opt.text}</option>`).join("");
      const $select = $(`
        <select
          id="${field.id}"
          name="${field.id}"
          ${field.required ? "required" : ""}
          placeholder="${field.placeholder || ""}"
          class="text-[#404040] w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors appearance-none bg-white"
        >
          ${optionsHtml}
        </select>
      `);
      $col.append($label).append($select);
    }

    $formGrid.append($col);
  });

  // Form validation and submission
  $("#inscricao-form").on("submit", function (e) {
    e.preventDefault();

    // Basic validation
    if (validateForm()) {
      // Show loading state
      const submitBtn = $(this).find('button[type="submit"]');
      const originalText = submitBtn.text();
      submitBtn.text("Enviando...").prop("disabled", true);

      // Simulate form submission (replace with actual API call when database is ready)
      setTimeout(function () {
        alert(
          "Inscrição realizada com sucesso! Em breve você receberá um e-mail de confirmação."
        );

        // Reset form
        $("#inscricao-form")[0].reset();

        // Reset button
        submitBtn.text(originalText).prop("disabled", false);

        // Redirect to success page or home
        // window.location.href = 'index.html';
      }, 2000);
    }
  });

  // Form validation function
  function validateForm() {
    let isValid = true;
    const requiredFields = [
      "nome",
      "email",
      "celular",
      "cpf",
      "cidade",
      "empresa",
      "porte",
      "perfil",
      "cargo",
    ];

    // Clear previous error states
    $(".error-message").remove();
    $("input, select").removeClass("border-red-500");

    requiredFields.forEach(function (fieldName) {
      const field = $(`#${fieldName}`);
      const value = field.val().trim();

      if (!value) {
        showFieldError(field, "Este campo é obrigatório");
        isValid = false;
      }
    });

    // Email validation
    const email = $("#email").val().trim();
    if (email && !isValidEmail(email)) {
      showFieldError($("#email"), "Por favor, insira um e-mail válido");
      isValid = false;
    }

    // CPF validation
    const cpf = $("#cpf").val().replace(/\D/g, "");
    if (cpf && !isValidCPF(cpf)) {
      showFieldError($("#cpf"), "Por favor, insira um CPF válido");
      isValid = false;
    }

    // CNPJ validation (if filled)
    const cnpj = $("#cnpj").val().replace(/\D/g, "");
    if (cnpj && !isValidCNPJ(cnpj)) {
      showFieldError($("#cnpj"), "Por favor, insira um CNPJ válido");
      isValid = false;
    }

    return isValid;
  }

  // Show field error
  function showFieldError(field, message) {
    field.addClass("border-red-500");
    field.after(
      `<p class="error-message text-red-500 text-sm mt-1">${message}</p>`
    );
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
  $("#celular").on("input", function () {
    let value = $(this).val().replace(/\D/g, "");
    value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
    value = value.replace(/(\d)(\d{4})$/, "$1-$2");
    $(this).val(value);
  });

  $("#cpf").on("input", function () {
    let value = $(this).val().replace(/\D/g, "");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    $(this).val(value);
  });

  $("#cnpj").on("input", function () {
    let value = $(this).val().replace(/\D/g, "");
    value = value.replace(/^(\d{2})(\d)/, "$1.$2");
    value = value.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
    value = value.replace(/\.(\d{3})(\d)/, ".$1/$2");
    value = value.replace(/(\d{4})(\d)/, "$1-$2");
    $(this).val(value);
  });

  // Real-time validation feedback
  $("input[required], select[required]").on("blur", function () {
    const field = $(this);
    const value = field.val().trim();

    // Remove previous error for this field
    field.next(".error-message").remove();
    field.removeClass("border-red-500 border-green-500");

    if (!value) {
      field.addClass("border-red-500");
      field.after(
        '<p class="error-message text-red-500 text-sm mt-1">Este campo é obrigatório</p>'
      );
    } else {
      field.addClass("border-green-500");
    }
  });

  // Email real-time validation
  $("#email").on("blur", function () {
    const email = $(this).val().trim();
    $(this).next(".error-message").remove();
    $(this).removeClass("border-red-500 border-green-500");

    if (email) {
      if (isValidEmail(email)) {
        $(this).addClass("border-green-500");
      } else {
        $(this).addClass("border-red-500");
        $(this).after(
          '<p class="error-message text-red-500 text-sm mt-1">Por favor, insira um e-mail válido</p>'
        );
      }
    }
  });

  // Smooth scrolling for form errors
  function scrollToFirstError() {
    const firstError = $(".border-red-500").first();
    if (firstError.length) {
      $("html, body").animate(
        {
          scrollTop: firstError.offset().top - 100,
        },
        500
      );
      firstError.focus();
    }
  }

  // Add loading animation
  $(window).on("load", function () {
    $("body").addClass("loaded");
    $(".loading-overlay").fadeOut(500);
  });

  // Form progress indicator (future enhancement)
  function updateFormProgress() {
    const totalFields = $("input[required], select[required]").length;
    const filledFields = $("input[required], select[required]").filter(
      function () {
        return $(this).val().trim() !== "";
      }
    ).length;

    const progress = (filledFields / totalFields) * 100;
    console.log(`Form progress: ${progress.toFixed(0)}%`);

    // Future: Update progress bar
    // $('.progress-bar').css('width', progress + '%');
  }

  // Update progress on input change
  $("input, select").on("input change", updateFormProgress);

  // Initialize progress
  updateFormProgress();
});
