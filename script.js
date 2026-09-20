document.addEventListener("DOMContentLoaded", () => {
    const rdvForm = document.getElementById("rdvForm");
    const feedback = document.getElementById("formFeedback");

    // Définir la date minimale à aujourd'hui pour le calendrier
    const dateInput = document.getElementById("date");
    if (dateInput) {
        const today = new Date().toISOString().split("T")[0];
        dateInput.setAttribute("min", today);
    }

    // Gestion de la soumission du formulaire
    rdvForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const nom = document.getElementById("nom").value;
        const date = document.getElementById("date").value;

        // Affichage d'un message de confirmation
        feedback.style.color = "#16a34a";
        feedback.textContent = `Merci ${nom} ! Votre demande de RDV pour le ${date} a bien été enregistrée. Un conseiller Princesse Net vous contactera rapidement.`;

        // Réinitialisation du formulaire
        rdvForm.reset();
    });
});