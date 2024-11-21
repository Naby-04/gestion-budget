// declaration des variables
// --------------------------PRESENTATION
const contextName = document.getElementById("contexte-name");
// -------------------------------------------------------------------------gestion depense
const selectedDepenseTitre = document.getElementById("depense-titre");
const depenseTitreInput = document.getElementById("depense-titre-input");
const depenseMontantinput = document.getElementById("depenseMontant");

// fonction pour changement de titre
if (selectedDepenseTitre && depenseTitreInput) {
  selectedDepenseTitre.addEventListener("change", function () {
    // Récupération de la valeur du select
    depenseTitreInput.value = selectedDepenseTitre.value || "";
  });
} else {
  console.log("impossible");
}
// -------------------------------------------------------------------------gestion revenu
const revenuTitreInput = document.getElementById("revenu-titre-input");
const selectedRevenuTitre = document.getElementById("revenu-titre");
const revenuMontantinput = document.getElementById("revenuMontant");

// fonction pour changement de titre
if (selectedRevenuTitre && revenuTitreInput) {
  selectedRevenuTitre.addEventListener("change", function () {
    // Récupération de la valeur du select
    revenuTitreInput.value = selectedRevenuTitre.value || "";
  });
}
// --------------------------CALCUL
const addRevenu = document.getElementById("add-revenue");
const addDepense = document.getElementById("add-depense");
const revenu = document.getElementById("revenu-price");
const depense = document.getElementById("dépense-price");
const solde = document.getElementById("solde-price");
const epargne = document.getElementById("epargne-price");
// --------------------------AFFICHAGE
const Form = document.getElementById("formulaire");
const depenseTableau = document.getElementById("depense-table-body");
const revenuTableau = document.getElementById("revenu-table-body");
// ---------------------------------------------------------------------------

// gestion rapport budget
function calculSolde(revenu, depense) {
  return revenu - depense;
}
function calculRevenue(revenuMontant) {
  let revenue = 0;
}

// gestion des valeurs
