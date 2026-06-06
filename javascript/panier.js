
// récuperer le panier depuis le localstorage
var panier = JSON.parse(localStorage.getItem("panier")) || [];
//Fonction pour sauvegarder le panier localement et le mettre à jour 
function sauvegarder() {
  localStorage.setItem("panier", JSON.stringify(panier));
  mettreAJourBadge();
}
// Afficher le panier au chargement de la page
document.addEventListener("DOMContentLoaded", function () {
  afficherPanier();
// récup l'ID du formulaire et quand il est soumis, on confirme la commande si le formulaire est validé
  var form = document.getElementById("form-confirmation");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (validerFormulaire()) {
        confirmerCommande();
      }
    });
  }
});

//fonction qui cache ou affiche le formulaire selon sa longueur
function afficherPanier() {
  var container = document.getElementById("cart-items");
  var blocTotal = document.getElementById("bloc-total");
  var panierVide = document.getElementById("panier-vide");
  var zoneForm = document.getElementById("zone-formulaire");

  container.innerHTML = "";
  if (panier.length === 0) {
    panierVide.style.display = "block";
    blocTotal.style.display = "none";
    if (zoneForm) {
      zoneForm.style.display = "none";
    }
    return;
  }
  panierVide.style.display = "none";
  blocTotal.style.display = "block";

  //On calcule le total de chaque article et affiche un bouton supprimer et affiche le total final
  var total = 0;
  for (var i = 0; i < panier.length; i++) {
    total += panier[i].prix;
    var div = document.createElement("div");
    div.classList.add("cart-item");
    div.innerHTML =
      '<img src="' + panier[i].image + '" alt="' + panier[i].nom + '">' +
      '<div class="cart-item-details">' +
      '<h4>' + panier[i].nom + '</h4>' +
      '<p>' + panier[i].prix.toLocaleString() + ' DA</p>' +
      '</div>' +
      '<button class="btn-supprimer" onclick="supprimerArticle(' + i + ')">' +
      'Supprimer' +
      '</button>';
    container.appendChild(div);
  }
  document.getElementById("total-price").textContent = total.toLocaleString();
}

// fonction de suppression d'article portant l'index de splice() et sauvegarder le formulaire et affichage
function supprimerArticle(index) {
  panier.splice(index, 1);
  sauvegarder();
  afficherPanier();
}

// fonction vider , sauvegarder et afficher le panier
function viderPanier() {
  panier = [];
  sauvegarder();
  afficherPanier();
}

//fonction pour afficher le formulaire et le rendre visible 
function afficherFormulaire() {
  var zoneForm = document.getElementById("zone-formulaire");
  if (zoneForm) {
    zoneForm.style.display = "block";
    zoneForm.scrollIntoView({ behavior: "smooth" });
  }
}

// Fonction validation du formulaire selon les règles de chaque champs (on a utilisé systeme regex)
function validerFormulaire() {
  var prenom    = document.getElementById("prenom").value.trim();
  var nom       = document.getElementById("nom").value.trim();
  var email     = document.getElementById("email").value.trim();
  var telephone = document.getElementById("telephone").value.trim();
  var wilaya    = document.getElementById("wilaya").value;
  var adresse   = document.getElementById("adresse").value.trim();

  var regexEmail = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  var regexTel   = /^(02|05|06|07)\d{8}$/;

  var ids = ["prenom", "nom", "email", "telephone", "wilaya", "adresse"];
  ids.forEach(function (id) {
    var el = document.getElementById("error-" + id);
    if (el) { el.textContent = ""; el.style.display = "none"; }
  });

  var valide = true;

  if (prenom.length < 2) { afficherErreur("error-prenom", "Le prénom est obligatoire."); valide = false; }
  if (nom.length < 2)    { afficherErreur("error-nom", "Le nom est obligatoire."); valide = false; }
  if (!regexEmail.test(email))  { afficherErreur("error-email", "Adresse email invalide (ex: exemple@gmail.com)."); valide = false; }
  if (!regexTel.test(telephone)) { afficherErreur("error-telephone", "10 chiffres, commence par 02, 05, 06 ou 07."); valide = false; }
  if (wilaya === "")    { afficherErreur("error-wilaya", "La wilaya est obligatoire."); valide = false; }
  if (adresse.length < 5) { afficherErreur("error-adresse", "L'adresse complète est obligatoire."); valide = false; }

  return valide;
}

//Fonction d'affichage d'erreurs selon le champ formulaire concerné
function afficherErreur(id, message) {
  var el = document.getElementById(id);
  if (el) { el.textContent = message; el.style.display = "block"; }
}

//Fonction de confirmation de la commande qui envoie un message de confirmation via alert() et sauvegarder le formulaire
function confirmerCommande() {
  panier = [];
  sauvegarder();
  alert("Commande validée ! Vous serez contacté sous 24h.");
  window.location.href = "../index.html";
}

//Fonction pour mettre à jour le badge en le cachant ou l'afficher selon la longueur du panier
function mettreAJourBadge() {
  var badge = document.getElementById("badge-panier");
  if (badge) {
    badge.textContent = panier.length;
    badge.style.display =  panier.length > 0 ? "inline-flex" : "none";
  }
}