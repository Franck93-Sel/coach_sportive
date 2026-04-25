document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // empêche le rechargement de la page

   // cacher le formulaire
    document.getElementById("contact-form").style.display = "none";

    // afficher le message
    document.getElementById("success-message").style.display = "block";

});