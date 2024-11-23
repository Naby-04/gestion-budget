// declaration des variables
// --------------------------PRESENTATION
const contextName = document.getElementById("contexte-name");
const Form = document.getElementById("formulaire");
const depenseData = JSON.parse(localStorage.getItem("depenses") || "[]");
const revenuData = JSON.parse(localStorage.getItem("revenus") || "[]");

// Appelle fonctions lorsque la page est chargée
document.addEventListener("DOMContentLoaded", updateDepenseTableau);
document.addEventListener("DOMContentLoaded", updateRevenuTableau);
// -------------------------------------------------------------------------gestion depense

const selectedDepenseTitre = document.getElementById("depense-titre");
const depenseTitreInput = document.getElementById("depense-titre-input");
const depenseMontantinput = document.getElementById("depenseMontant");
const addDepense = document.getElementById("add-depense");
const depenseTableau = document.getElementById("depense-table-body");
const rowAddDepense = document.getElementById("rowAddDepense");

// fonction pour changement de titre
if (selectedDepenseTitre && depenseTitreInput) {
  selectedDepenseTitre.addEventListener("change", function () {
    // Récupération de la valeur du select
    depenseTitreInput.value = selectedDepenseTitre.value || "";
  });
} else {
  console.log("impossible");
}

// fonction pour mettre a jour le tableau des depenses
function updateDepenseTableau() {
  // Vide le tableau
  depenseTableau.innerHTML = "";

  // Boucle sur les données
  depenseData.forEach((depense, depenseIndex) => {
    const row = document.createElement("tr");
    row.setAttribute("depense-index", depenseIndex); // Assigne l'index comme identifiant unique
    row.innerHTML = `
      <!-- affichage du prenom -->
  <td>${depense.titre}</td>
  <!-- affichage du nom -->
  <td>${depense.montant}</td>
  <!-- affichage des boutons -->
  <td class="d-flex justify-content-around">
     <button onclick="suppDepenseData(${depenseIndex})" id="supp-btn" class="p-2 rounded-3 bg-danger text-light" depense-index="${depenseIndex}">supprimer</button>
  </td>
    `;
    depenseTableau.appendChild(row);
  });
  depenseTableau.appendChild(rowAddDepense);
  calculDonnées();
}

// Fonction pour ajouter ou modifier une donnée

if (addDepense && depenseMontantinput && depenseTitreInput) {
  addDepense.addEventListener("click", function addDepenseData() {
    const depenseDataItem = {
      titre: depenseTitreInput.value,
      montant: depenseMontantinput.value,
    };
    depenseData.push(depenseDataItem);
    console.table(depenseData);
    localStorage.setItem("depenses", JSON.stringify(depenseData));
    // reset
    resetDepenseForm();
    updateDepenseTableau();
  });
} else {
  console.log("impossible d'ajouter dans le tableau");
}

// fonction pour supprimer un user
function suppDepenseData(depenseIndex) {
  depenseData.splice(depenseIndex, 1);
  localStorage.setItem("depenses", JSON.stringify(depenseData));
  updateDepenseTableau();
}

// -------------------------------------------------------------------------gestion revenu

const selectedRevenuTitre = document.getElementById("revenu-titre");
const revenuTitreInput = document.getElementById("revenu-titre-input");
const revenuMontantinput = document.getElementById("revenuMontant");
const addRevenu = document.getElementById("add-revenu");
const revenuTableau = document.getElementById("revenu-table-body");
const rowAddRevenu = document.getElementById("rowAddRevenu");

// fonction pour changement de titre
if (selectedRevenuTitre && revenuTitreInput) {
  selectedRevenuTitre.addEventListener("change", function () {
    // Récupération de la valeur du select
    revenuTitreInput.value = selectedRevenuTitre.value || "";
  });
} else {
  console.log("impossible");
}

// fonction pour mettre a jour le tableau des revenu
function updateRevenuTableau() {
  // Vide le tableau
  revenuTableau.innerHTML = "";
  // Boucle sur les données
  revenuData.forEach((revenu, revenuIndex) => {
    const row = document.createElement("tr");
    row.setAttribute("revenu-index", revenuIndex); // Assigne l'index comme identifiant unique
    row.innerHTML = `
      <!-- affichage du titre -->
  <td>${revenu.titre}</td>
  <!-- affichage du montant -->
  <td>${revenu.montant}</td>
  <!-- affichage des boutons -->
  <td class="d-flex justify-content-around">
     <button onclick="suppRevenuData(${revenuIndex})" id="supp-btn" class="p-2 rounded-3 bg-danger text-light" revenu-index="${revenuIndex}">supprimer</button>
  </td>
    `;
    revenuTableau.appendChild(row);
  });
  revenuTableau.appendChild(rowAddRevenu);
  calculDonnées();
}

// Fonction pour ajouter ou modifier une donnée
if (addRevenu && revenuMontantinput && revenuTitreInput) {
  addRevenu.addEventListener("click", function addDepenseData() {
    const revenuDataItem = {
      titre: revenuTitreInput.value,
      montant: revenuMontantinput.value,
    };
    revenuData.push(revenuDataItem);
    console.table(revenuData);
    localStorage.setItem("revenus", JSON.stringify(revenuData));
    // reset
    resetRevenuForm();
    updateRevenuTableau();
  });
} else {
  console.log("impossible d'ajouter dans le tableau");
}

// fonction pour supprimer un user
function suppRevenuData(revenuIndex) {
  revenuData.splice(revenuIndex, 1);
  localStorage.setItem("revenus", JSON.stringify(revenuData));
  updateRevenuTableau();
}

// -------------------------------------------------------------------------------

// --------------------------CALCUL
const revenu = document.getElementById("revenu-price");
const depense = document.getElementById("dépense-price");
const solde = document.getElementById("solde-price");

// gestion rapport budget
function calculDonnées() {
  let revenuvalue = 0;
  let depensevalue = 0;
  let soldevalue = 0;

  // recuperation des données
  revenuData.forEach((revenu) => {
    revenuvalue += parseFloat(revenu.montant) || 0;
  });
  depenseData.forEach((depense) => {
    depensevalue += parseFloat(depense.montant) || 0;
  });
  soldevalue = revenuvalue - depensevalue;

  revenu.textContent = revenuvalue + " FCFA";
  depense.textContent = depensevalue + " FCFA";
  solde.textContent = soldevalue + " FCFA";
}

// ---------------------------------------------------------------------------

// gestion des valeurs

// fonction reset
function resetDepenseForm() {
  // Réinitialiser les champs de saisie
  depenseTitreInput.value = "";
  depenseMontantinput.value = "";
}
function resetRevenuForm() {
  // Réinitialiser les champs de saisie
  revenuTitreInput.value = "";
  revenuMontantinput.value = "";
}

// fonction pour reset
function resetAll() {
  console.log("hello");
  revenuData.splice(0);
  depenseData.splice(0);
  localStorage.setItem("revenus", JSON.stringify(revenuData));
  localStorage.setItem("depenses", JSON.stringify(depenseData));
  updateRevenuTableau();
  updateDepenseTableau();
}
