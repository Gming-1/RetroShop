// ================= PRODUITS =================
const produits = [
    { id: 1, nom: "Nintendo NES",        prix: 9000,  categorie: "nintendo", image:"../images/nintendo-nes.png", },
    { id: 2, nom: "Super Nintendo",      prix: 8000,  categorie: "nintendo", image:"../images/super-nintendo.png" },
    { id: 3, nom: "Game Boy",            prix: 8500,  categorie: "nintendo", image:"../images/game-boy.png" },
    { id: 4, nom: "Nintendo 64",         prix: 12000,  categorie: "nintendo", image:"../images/nintendo-64.png" },
    { id: 5, nom: "Sega Mega Drive",     prix: 16000,  categorie: "sega",     image:"../images/sega-mega-drive.png" },
    { id: 6, nom: "Sega Dreamcast",      prix: 13000,  categorie: "sega",     image:"../images/sega-dreamcast.png" },
    { id: 7, nom: "Sega Saturn",         prix: 12500,  categorie: "sega",     image:"../images/sega-saturn.png" },
    { id: 8, nom: "Atari 2600",          prix: 16000,  categorie: "atari",    image:"../images/atari-2600.png" },
    { id: 9, nom: "Atari Jaguar",        prix: 19000, categorie: "atari",    image:"../images/atari-jaguar.png" },
    { id:10, nom: "Atari Lynx",          prix: 20000,  categorie: "atari",    image:"../images/atari-lynx.png" },
];

let panier = JSON.parse(localStorage.getItem("panier")) || [];

function afficherProduits(liste) {
    const container = document.getElementById("grille-produits");
    container.innerHTML = "";

    liste.forEach(p => {
        const div = document.createElement("div");
        div.classList.add("produit-carte");

        div.innerHTML = 
        '<img src="' + p.image + '" alt="' + p.nom + '">' +
        '<h3>' + p.nom + '</h3>' +
        '<p>' + p.prix.toLocaleString() + ' DA</p>' +
        '<button onclick="ajouterPanier(' + p.id + ')">Ajouter au panier</button>';

        container.appendChild(div);
    });
}

function filtrerProduits(bouton, categorie) {
    document.querySelectorAll(".filtre-btn").forEach(b => b.classList.remove("actif"));
    bouton.classList.add("actif");

    if (categorie === "tous") {
        afficherProduits(produits);
    } else {
        afficherProduits(produits.filter(p => p.categorie === categorie));
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
        searchInput.addEventListener("input", () => {
            const valeur = searchInput.value.toLowerCase();
            const resultat = produits.filter(p => p.nom.toLowerCase().includes(valeur));
            afficherProduits(resultat);
        });
    }

    afficherProduits(produits);
    updatePanierCount();
});

function ajouterPanier(id) {
    const produit = produits.find(p => p.id === id);
    panier.push(produit);
    localStorage.setItem("panier", JSON.stringify(panier));
    updatePanierCount();
    alert(produit.nom + " ajouté au panier !");
}

function updatePanierCount() {
    const el = document.getElementById("cartCount");
    if (el) el.textContent = panier.length;

    const badge = document.getElementById("badge-panier");
    if (badge) {
        badge.textContent = panier.length;
        badge.style.display = panier.length > 0 ? "inline-flex" : "none";
    }
}
