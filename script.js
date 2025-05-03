document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggle-mode");
    const body = document.body;
  
    toggleButton.addEventListener("click", () => {
      body.classList.toggle("dark-mode");
      toggleButton.textContent = body.classList.contains("dark-mode") ? "☀️" : "🌙";
    });
  });

  // alternar enter modo claro e escuro
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggle-mode");
    const body = document.body;
  
    toggleButton.addEventListener("click", () => {
      body.classList.toggle("dark-mode");
      toggleButton.textContent = body.classList.contains("dark-mode") ? "☀️" : "🌙";
    });
  
    // Adiciona classe "scrolled" ao header quando o usuário rola a página
    const header = document.querySelector(".header");
  
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  });