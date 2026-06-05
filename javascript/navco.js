// auth.js gére l'affichage de la nav selon si l'utilisateur est connecté ou pas et aussi gére la deconnexion

// fonction pour recup l'utilisateur connecté
function getUtilisateur() {
  return JSON.parse(localStorage.getItem("utilisateurConnecte"));
}
// fonction pour se dec
function deconnecter() {
  localStorage.removeItem("utilisateurConnecte");
  localStorage.removeItem("panier");
}
// on recupere l'utilisateur connecté dans une const
const utilisateur = getUtilisateur();

// on met à jour le nav en dependant de la connexion et la deconnexion grace a des innerhtml
function mettreAJourNav() {
  const nav = document.querySelector(".nav-connexion");
  if (!nav) return null;
 if (utilisateur) {
    nav.innerHTML = 
               '<li><a href="#" id="nav-profil-btn">' + utilisateur.prenom.toUpperCase() + '</a></li>' +
               '<li><a href="../index.html" onclick="deconnecter()">DÉCONNEXION</a></li>';
 }
}
// on met à jour le DOM après le chargement de la page
document.addEventListener("DOMContentLoaded", mettreAJourNav);
