// fonction de validation du formulaire de connexion sous systeme regex
function validerConnexion() {
  var email = document.getElementById("email").value.trim();
  var motdepasse = document.getElementById("motdepasse").value;
  var regexEmail = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  var champs = ["erreur-email", "erreur-motdepasse"];
  
  for (var i = 0; i < champs.length; i++) {
    var el = document.getElementById(champs[i]);
    el.textContent = "";
    el.style.display = "none";
  }

  var valide = true;

  if (!regexEmail.test(email)) {
    afficherErreur("erreur-email", "Adresse email invalide (ex: exemple@gmail.com).");
    valide = false;
  }

  if (motdepasse === "") {
    afficherErreur("erreur-motdepasse", "Veuillez entrer votre mot de passe.");
    valide = false;
  }

  if (!valide) return false;

  var utilisateursStr = localStorage.getItem("utilisateurs");
  var utilisateurs = utilisateursStr ? JSON.parse(utilisateursStr) : [];
  var utilisateur = null;

  for (var i = 0; i < utilisateurs.length; i++) {
    if (utilisateurs[i].email === email) {
      utilisateur = utilisateurs[i];
      break;
    }
  }

  if (!utilisateur) {
    afficherErreur("erreur-email", "Aucun compte trouvé avec cet email.");
    return false;
  }

  if (utilisateur.motdepasse !== motdepasse) {
    afficherErreur("erreur-motdepasse", "Mot de passe incorrect.");
    return false;
  }

  localStorage.setItem("utilisateurConnecte", JSON.stringify(utilisateur));
  localStorage.removeItem("panier");
  alert("Bienvenue " + utilisateur.prenom + " !");
  window.location.href = "../index.html";
  return false;
}

// affichage des messages d'erreur
function afficherErreur(id, message) {
  var el = document.getElementById(id);
  el.textContent = message;
  el.style.display = "block";
}