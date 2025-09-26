document.addEventListener("DOMContentLoaded", () => {
  const groups = document.querySelectorAll(".container-carousel > div");
  const dots = document.querySelectorAll("#depoimentos .dot");

  let currentIndex = 0;
  let intervalId = null;

  function showGroup(index) {
    groups.forEach((g, i) => {
      g.classList.toggle("active", i === index);
    });
    dots.forEach((d, i) => {
      d.classList.toggle("bg-[#EF7D00]", i === index);
      d.classList.toggle("bg-[#183154]", i !== index);
    });
    currentIndex = index;
  }

  function startAutoplay() {
    intervalId = setInterval(() => {
      let nextIndex = (currentIndex + 1) % groups.length;
      showGroup(nextIndex);
    }, 18000); // troca a cada 5s
  }

  function stopAutoplay() {
    clearInterval(intervalId);
  }

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      stopAutoplay();
      showGroup(index);
      startAutoplay();
    });
  });

  showGroup(0); 
  startAutoplay();

  const depoimentosSection = document.getElementById("depoimentos");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          depoimentosSection.classList.add("visible");
          observer.unobserve(depoimentosSection); // só anima uma vez
        }
      });
    },
    { threshold: 0.1 } // 10% da seção visível
  );

  observer.observe(depoimentosSection);
});
