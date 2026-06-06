// fonction validation du formulaire d'inscription selon les règles de chaque champs (on a utilisé systeme regex)
function validerInscription() {
  var prenom = document.getElementById("prenom").value.trim();
  var nom = document.getElementById("nom").value.trim();
  var email = document.getElementById("email").value.trim();
  var motdepasse = document.getElementById("motdepasse").value;
  var confirmer = document.getElementById("confirmer-motdepasse").value;

  var regexNom = /^[a-zA-ZÀ-ÿ\- ]{2,}$/;
  var regexEmail = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  var regexMotdepasse = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/;

  var champs = ["erreur-prenom", "erreur-nom", "erreur-email", "erreur-motdepasse", "erreur-confirmer"];
  for (var i = 0; i < champs.length; i++) {
    var el = document.getElementById(champs[i]);
    el.textContent = "";
    el.style.display = "none";
  }

  var valide = true;

  if (!regexNom.test(prenom)) {
    afficherErreur("erreur-prenom", "Le prénom doit avoir au moins 2 lettres (pas de chiffres).");
    valide = false;
  }

  if (!regexNom.test(nom)) {
    afficherErreur("erreur-nom", "Le nom doit avoir au moins 2 lettres (pas de chiffres).");
    valide = false;
  }

  if (!regexEmail.test(email)) {
    afficherErreur("erreur-email", "Adresse email invalide (ex: exemple@gmail.com).");
    valide = false;
  }

  if (!regexMotdepasse.test(motdepasse)) {
    afficherErreur("erreur-motdepasse", "8 caractères min, avec une majuscule, une minuscule et un chiffre.");
    valide = false;
  }

  if (motdepasse !== confirmer) {
    afficherErreur("erreur-confirmer", "Les mots de passe ne correspondent pas.");
    valide = false;
  }

  if (!valide) {
    return false;
  }
  // utilisation du local storage pour stocker les utilisateurs
  var utilisateursStr = localStorage.getItem("utilisateurs");
  var utilisateurs = utilisateursStr ? JSON.parse(utilisateursStr) : [];

  for (var i = 0; i < utilisateurs.length; i++) {
    if (utilisateurs[i].email === email) {
      afficherErreur("erreur-email", "Cet email est déjà utilisé.");
      return false;
    }
  }
// on cree un objet si tout marche bien
  var nouvelUtilisateur = {
    prenom: prenom,
    nom: nom,
    email: email,
    motdepasse: motdepasse
  };

  utilisateurs.push(nouvelUtilisateur);
  localStorage.setItem("utilisateurs", JSON.stringify(utilisateurs));

  alert("Compte créé avec succès ! Bienvenue " + prenom + " !");
  window.location.href = "connexion.html";

  return false;
}
// fonction d'affichage d'erreurs
function afficherErreur(id, message) {
  var el = document.getElementById(id);
  el.textContent = message;
  el.style.display = "block";
}