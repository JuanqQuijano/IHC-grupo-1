
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      const headerOffset = 60;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    });
  });
  
  window.addEventListener("scroll", () => {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      const cardTop = card.getBoundingClientRect().top;
      if (cardTop < window.innerHeight - 100) {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }
    });
  });
  
  document.querySelectorAll(".faq-question").forEach((question) => {
    question.addEventListener("click", () => {
      const answer = question.nextElementSibling;
      if (answer.style.display === "block") {
        answer.style.display = "none";
      } else {
        answer.style.display = "block";
      }
    });
  });
  
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav ul");
  
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });
  
  document.querySelectorAll(".nav ul li a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("show");
    });
  });
  