// Déclaration des variables
const contextName = document.getElementById("contexte-name");

// fonction pour changement de contexte
const selectedContext = document.getElementById("contexte");
if (selectedContext) {
  selectedContext.addEventListener("change", function () {
    // Récupération de la valeur du select
    contextName.textContent = selectedContext.value;
  });
}

function changeContexte() {
  contextName.textContent = selectedContext;
}
