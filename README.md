# RetroShop — Site de vente de Consoles Vintage

- Projet réalisé dans le cadre du module **Développement Web**
- Licence 2 Informatique - Année universitaire 2025/2026

---

## Présentation du projet

**RetroShop** est un site e-commerce spécialisé dans la vente de consoles,il a été conçu et développé entièrement en HTML, CSS et JavaScript.

---

## Membres du groupe

| Nom | Prénom |
|-----|--------|
| Kessi| Mohamed Rayane |
| Boughias| Mohamed Abdelwahab |
| Bouzar| Mohamed Ali |

---

- **HTML5** : structure et sémantique des pages
- **CSS3** : mise en page, design responsive, animations
- **JavaScript** : interactions, gestion du panier
- **localStorage** : stockage côté navigateur (panier, comptes utilisateurs)

---

## Structure du projet

```
RetroShop/
│
├── index.html                  ← Page d'accueil
│
├── content/
│   ├── produits.html           ← Catalogue avec filtres par catégorie
│   ├── connexion.html          ← Formulaire de connexion
│   ├── inscription.html        ← Formulaire d'inscription
│   ├── panier.html             ← Formulaire de paiement et récapitulatif du panier
│   └── contactus.html          ← Formulaire de contact
│
├── style/
│   └── *.css                   ← Feuilles de style par page
│
├── javascript/
│   ├── compteur_panier.js      ← Mise à jour dynamique du compteur du panier
│   └── navco.js                ← Gestion de navigation ( connexion / deconnexion )
│
└── images/
    └── ...                     ← Contients les images / icones dessiné en utilisant l'application asprite 
```

---

## Guide d'utilisation

### 1. Lancer le site en local

Ouvrir le fichier `index.html` directement dans un navigateur. 
Ou il suffit d'entrer dans le site https://retropshop.netlify.app

---

### 2. Parcourir le catalogue

La page **Produits** affiche l'ensemble de consoles disponible.
Elle dispose de bouton pour trier les consoles en dependant de la société qui les a crée.

---

### 3. Utiliser le panier

Le bouton **Ajouter au panier** est disponible sur chaque fiche produit.  
Le contenu du panier est mis à jour dynamiquement via JavaScript et persisté dans le `localStorage` du navigateur, ce qui permet de conserver les articles même après un rechargement de page.  
le panier dispose d'un compteur.

---

### 4. Se connecter ou créer un compte

Le site dispose d'un système d'authentification simulé côté client gràce à un `localStorage`.
il suffit de créer un compte sur la page inscription puis se connecter pour avoir accés au compte.

---

### 5. Contacter la boutique

Un formulaire de contact est disponible sur la page dédiée pour toute question ou demande d'information.

---
