// fonction de validation du formulaire de contact sous systeme regex
function validerContact() {
  var nom     = document.getElementById("nomComplet").value.trim();
  var email   = document.getElementById("email").value.trim();
  var message = document.getElementById("message").value.trim();

  var regexEmail = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  var champs = ["erreur-nomComplet", "erreur-email", "erreur-message"];
  
  for (var i = 0; i < champs.length; i++) {
    var el = document.getElementById(champs[i]);
    if (el) {
      el.textContent = "";
      el.style.display = "none";
    }
  }

  var valide = true;

  if (nom.length < 2) {
    afficherErreur("erreur-nomComplet", "Le nom complet doit contenir au moins 2 caractères.");
    valide = false;
  }

  if (!regexEmail.test(email)) {
    afficherErreur("erreur-email", "Adresse email invalide (ex: exemple@gmail.com).");
    valide = false;
  }

  if (message.length < 10) {
    afficherErreur("erreur-message", "Le message doit contenir au moins 10 caractères.");
    valide = false;
  }

  return valide;
}
// on gestionne l'envoie du formulaire de contact 
document.addEventListener("DOMContentLoaded", function () {
  var formulaire = document.getElementById("formulaireContact");

  if (!formulaire) return null;

  formulaire.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!validerContact()) {
      return null;
    }

    var btnEnvoyer = document.getElementById("btnEnvoyer");
    var btnTexte = document.getElementById("btnTexte");
    var btnChargement = document.getElementById("btnChargement");

    // une petite simulation de l'envoie du message 
    btnEnvoyer.disabled = true;
    if (btnTexte) btnTexte.style.display = "none";
    if (btnChargement) btnChargement.style.display = "inline";

    setTimeout(function () {
      btnEnvoyer.disabled = false;
      if (btnTexte) btnTexte.style.display = "inline";
      if (btnChargement) btnChargement.style.display = "none";

      formulaire.reset();
      alert("message envoyé ! On vous répondra bientot");
    }, 1000);
  });
});

// fonction d'affichage des messages d'erreur
function afficherErreur(id, message) {
  var el = document.getElementById(id);
  if (el) {
    el.textContent = message;
    el.style.display = "block";
  }
}
