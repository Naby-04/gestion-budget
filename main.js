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

  const addRow = document.createElement("tr");
  addRow.innerHTML = `
  <td>
                <!-- Button trigger modal -->
                <button
                  type="button"
                  class="btn-active"
                  data-bs-toggle="modal"
                  data-bs-target="#depenseModal"
                >
                  AJOUTER DÉPENSE
                  <i class="fa-solid fa-plus ms-2"></i>
                </button>

                <!-- Modal -->
                <div
                  class="modal fade"
                  id="depenseModal"
                  tabindex="-1"
                  aria-labelledby="depenseModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="depenseModalLabel">
                          AJOUTER DÉPENSE
                        </h1>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">
                        <!-- partie formulaire -->
                        <form id="depenseFormulaire">
                          <div class="mb-3">
                            <div class="d-flex">
                              <label
                                for="depense-titre-input"
                                class="form-label me-2"
                                >TITRE</label
                              >
                              <select name="depense-titre" id="depense-titre">
                                <option value=""></option>
                                <option value="Loyer">Loyer</option>
                                <option value="Factures">
                                  Factures (électricité, eau, internet, etc.)
                                </option>
                                <option value="Courses">
                                  Courses alimentaires
                                </option>
                                <option value="Transport">Transport</option>
                                <option value="Santé">
                                  Santé (médicaments, consultations)
                                </option>
                                <option value="Éducation">
                                  Éducation (frais de scolarité, livres)
                                </option>
                                <option value="Loisirs">
                                  Loisirs (cinéma, sorties)
                                </option>
                                <option value="Shopping">
                                  Shopping (vêtements, accessoires)
                                </option>
                                <option value="Épargne">Épargne</option>
                                <option value="Dettes">
                                  Remboursement de dettes
                                </option>
                                <option value="Donations">
                                  Donations ou charité
                                </option>
                                <option value="Autre">Autre</option>
                              </select>
                            </div>

                            <input
                              type="text"
                              class="form-control p-3"
                              id="depense-titre-input"
                              required
                            />
                          </div>
                          <div class="mb-5 text-start">
                            <label for="depenseMontant" class="form-label"
                              >MONTANT</label
                            >
                            <input
                              type="number"
                              class="form-control p-3"
                              id="depenseMontant"
                              required
                            />
                          </div>
                        </form>
                        <!-- partie formulaire exit -->
                      </div>
                      <div class="modal-footer">
                        <button
                          id="add-depense"
                          type="button"
                          class="btn-active"
                          data-bs-dismiss="modal"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
              <td></td>
              <td></td>
  `;
  depenseTableau.appendChild(addRow);
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
  const addRow = document.createElement("tr");
  addRow.innerHTML = `
  <td>
        <!-- Button trigger modal -->
        <button
          type="button"
          class="btn-active"
          data-bs-toggle="modal"
          data-bs-target="#depenseModal"
        >
          AJOUTER DÉPENSE
          <i class="fa-solid fa-plus ms-2"></i>
      </button>
      <!-- Modal -->
      <div
        class="modal fade"
        id="depenseModal"
        tabindex="-1"
        aria-labelledby="depenseModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="depenseModalLabel">
                AJOUTER DÉPENSE
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <!-- partie formulaire -->
              <form id="depenseFormulaire">
                <div class="mb-3">
                  <div class="d-flex">
                    <label
                      for="depense-titre-input"
                      class="form-label me-2"
                      >TITRE</label
                    >
                    <select name="depense-titre" id="depense-titre">
                      <option value=""></option>
                      <option value="Loyer">Loyer</option>
                      <option value="Factures">
                        Factures (électricité, eau, internet, etc.)
                      </option>
                      <option value="Courses">
                        Courses alimentaires
                      </option>
                      <option value="Transport">Transport</option>
                      <option value="Santé">
                        Santé (médicaments, consultations)
                      </option>
                      <option value="Éducation">
                        Éducation (frais de scolarité, livres)
                      </option>
                      <option value="Loisirs">
                        Loisirs (cinéma, sorties)
                      </option>
                      <option value="Shopping">
                        Shopping (vêtements, accessoires)
                      </option>
                      <option value="Épargne">Épargne</option>
                      <option value="Dettes">
                        Remboursement de dettes
                      </option>
                      <option value="Donations">
                        Donations ou charité
                     </option>
                     <option value="Autre">Autre</option>
                   </select>
                 </div>
                 <input
                   type="text"
                   class="form-control p-3"
                   id="depense-titre-input"
                   required
                 />
               </div>
               <div class="mb-5 text-start">
                 <label for="depenseMontant" class="form-label"
                   >MONTANT</label
                 >
                 <input
                   type="number"
                   class="form-control p-3"
                   id="depenseMontant"
                   required
                 />
               </div>
             </form>
             <!-- partie formulaire exit -->
           </div>
           <div class="modal-footer">
             <button
               id="add-depense"
               type="button"
               class="btn-active"
               data-bs-dismiss="modal"
             >
               Submit
             </button>
           </div>
         </div>
       </div>
     </div>
   </td>
   <td></td>
   <td></td>
  `;
  revenuTableau.appendChild(addRow);
}

// Fonction pour ajouter ou modifier une donnée
if (addRevenu && revenuMontantinput && revenuTitreInput) {
  addRevenu.addEventListener("click", function addDepenseData() {
    const revenuDataItem = {
      titre: revenuTitreInput.value,
      montant: revenuMontantinput.value,
    };
    revenuData.push(revenuDataItem);
    console.table(depenseData);
    localStorage.setItem("revenus", JSON.stringify(revenuData));
    // reset
    resetRevenuForm();
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
const epargne = document.getElementById("epargne-price");
// --------------------------AFFICHAGE
// ---------------------------------------------------------------------------

// gestion rapport budget
function calculSolde(revenu, depense) {
  return revenu - depense;
}
function calculRevenue(revenuMontant) {
  let revenue = 0;
}

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
