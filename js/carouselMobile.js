document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track-mobile");
  const cards = document.querySelectorAll(".card-depoimentos-mobile");
  const dots = document.querySelectorAll("#depoimentosMobile .dot");

  let currentIndex = 0;
  let intervalId = null;
  const totalCards = cards.length;
  const maxIndex = totalCards - 1;

  function showCard(index) {
    if (index < 0) index = 0;
    if (index > maxIndex) index = maxIndex;

    track.style.transform = `translateX(-${index * 100}%)`;

    dots.forEach((dot, i) => {
      dot.classList.toggle("bg-[#EF7D00]", i === index);
      dot.classList.toggle("bg-[#183154]", i !== index);
    });

    currentIndex = index;
  }

  function startAutoplay() {
    stopAutoplay(); // evita duplicar interval
    intervalId = setInterval(() => {
      if (currentIndex < maxIndex) {
        showCard(currentIndex + 1);
      } else {
        showCard(0); // reinicia no primeiro
      }
    }, 10000);
  }

  function stopAutoplay() {
    clearInterval(intervalId);
  }

  // ---- Bolinhas ----
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      stopAutoplay();
      showCard(index);
      startAutoplay();
    });
  });

  // ---- Swipe ----
  let startX = 0;
  let isDragging = false;

  track.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
    isDragging = true;
    stopAutoplay();
  });

  track.addEventListener("touchmove", (e) => {
    if (!isDragging) return;
    const diffX = e.touches[0].clientX - startX;
    track.style.transform = `translateX(calc(-${currentIndex * 100}% + ${diffX}px))`;
  });

  track.addEventListener("touchend", (e) => {
    if (!isDragging) return;
    isDragging = false;

    const diffX = e.changedTouches[0].clientX - startX;
    const threshold = 50;

    if (diffX > threshold && currentIndex > 0) {
      showCard(currentIndex - 1);
    } else if (diffX < -threshold && currentIndex < maxIndex) {
      showCard(currentIndex + 1);
    } else {
      showCard(currentIndex);
    }

    startAutoplay();
  });

  // inicia
  showCard(0);
  startAutoplay();
});
