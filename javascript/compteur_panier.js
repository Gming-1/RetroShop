document.addEventListener("DOMContentLoaded", function () {
    var panier = JSON.parse(localStorage.getItem("panier")) || [];
    var badge = document.getElementById("badge-panier");
    if (badge) {
        badge.textContent = panier.length; badge.style.display =  panier.length > 0 ? "inline-flex" : "none";
    }
});