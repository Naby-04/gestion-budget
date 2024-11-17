// declaration des variables
const selectedContext = document.getElementById("contexte");
const contextName = document.getElementById("contexte-name");
const selectedDepenseTitre = document.getElementById("depense-titre");
const selectedRevenueTitre = document.getElementById("revenue-titre");
const titreInput = document.getElementById("titre-input");
selectedRevenueTitre.style.display = "none";
// fonction pour changement de contexte
if (selectedContext) {
  selectedContext.addEventListener("change", function () {
    // Récupération de la valeur du select
    contextName.textContent = selectedContext.value;
    // gestion contexte
    if (
      selectedContext.value == "DÉPENSE" &&
      selectedDepenseTitre &&
      selectedRevenueTitre
    ) {
      selectedDepenseTitre.style.display = "block";
      selectedRevenueTitre.style.display = "none";
    } else if (
      selectedContext.value == "REVENUE" &&
      selectedDepenseTitre &&
      selectedRevenueTitre
    ) {
      selectedDepenseTitre.style.display = "none";
      selectedRevenueTitre.style.display = "block";
    }
  });
}

// fonction pour changement de titre
if (selectedRevenueTitre) {
  selectedRevenueTitre.addEventListener("change", function () {
    // Récupération de la valeur du select
    titreInput.value = selectedRevenueTitre.value;
  });
}
if (selectedDepenseTitre) {
  selectedDepenseTitre.addEventListener("change", function () {
    // Récupération de la valeur du select
    titreInput.value = selectedDepenseTitre.value;
  });
}
