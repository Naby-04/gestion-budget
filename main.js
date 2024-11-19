// declaration des variables
// --------------------------PRESENTATION
const contextName = document.getElementById("contexte-name");
const selectedDepenseTitre = document.getElementById("depense-titre");
const selectedRevenueTitre = document.getElementById("revenu-titre");
const titreInput = document.getElementById("titre-input");
const montantinput = document.getElementById("montant");
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

// initialisation
// if (selectedDepenseTitre && selectedRevenueTitre) {
//   selectedDepenseTitre.style.display = "none";
//   selectedRevenueTitre.style.display = "none";
// }

// fonction pour changement de contexte
if (addRevenu && contextName && selectedRevenueTitre && selectedDepenseTitre) {
  addRevenu.addEventListener("click", function () {
    contextName.textContent = "REVENU";
    selectedDepenseTitre.style.display = "none";
    selectedRevenueTitre.style.display = "block";
  });
}
if (addDepense && contextName && selectedRevenueTitre && selectedDepenseTitre) {
  addDepense.addEventListener("click", function (e) {
    contextName.textContent = "DÉPENSE";
    selectedDepenseTitre.style.display = "block";
    selectedRevenueTitre.style.display = "none";
  });
}

// if (selectedContext) {
//   selectedRevenueTitre.style.display = "none";
//   selectedContext.addEventListener("change", function () {
//     // Récupération de la valeur du select
//     contextName.textContent = selectedContext.value;
//     // gestion contexte
//     if (
//       selectedContext.value == "DÉPENSE" &&
//       selectedDepenseTitre &&
//       selectedRevenueTitre
//     ) {
//       selectedDepenseTitre.style.display = "block";
//       selectedRevenueTitre.style.display = "none";
//     } else if (
//       selectedContext.value == "REVENUE" &&
//       selectedDepenseTitre &&
//       selectedRevenueTitre
//     ) {
//       selectedDepenseTitre.style.display = "none";
//       selectedRevenueTitre.style.display = "block";
//     }
//   });
// }

// fonction pour changement de titre
if (selectedRevenueTitre && titreInput) {
  selectedRevenueTitre.addEventListener("change", function () {
    // Récupération de la valeur du select
    titreInput.value = selectedRevenueTitre.value || "";
  });
}
if (selectedDepenseTitre && titreInput) {
  selectedDepenseTitre.addEventListener("change", function () {
    // Récupération de la valeur du select
    titreInput.value = selectedDepenseTitre.value || "";
  });
}

// gestion rapport budget
function calculSolde(revenu, depense) {
  return revenu - depense;
}
function calculRevenue(revenuMontant) {
  let revenue = 0;
}

// gestion des valeurs
