// ===== Menu Burger (toutes les pages) =====
const burger = document.getElementById("burger");
const navLinks = document.getElementById("nav-links");

if (burger && navLinks) {
  burger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

// ===== Formulaire Contact (page contact uniquement) =====
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function(event) {
    event.preventDefault(); // empêche le rechargement de la page

    // cacher le formulaire
    contactForm.style.display = "none";

    // afficher le message de succès
    document.getElementById("success-message").style.display = "block";
  });
}