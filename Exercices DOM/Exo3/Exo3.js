function ajouterAuPanier(p_id){ 

    //On récupère la ligne de l'élément selectionné
    let produit = document.getElementById(p_id);
    
    //On recupère le panier
    let panier = document.getElementById("mon_panier");
    
    //On créé la nouvelle ligne
    let nouveauProduit = document.createElement("tr");
    let prixProduit = document.createElement("td");
    let nomProduit = document.createElement("td");

    //On recupére le prix et le nom de l'article à ajouter dans la nouvele ligne    
    prixProduit.innerHTML = produit.children[1].innerHTML;
    nomProduit.innerHTML = produit.children[0].innerHTML;
    
    //On set la nouvelle ligne
    nouveauProduit.appendChild(nomProduit);
    nouveauProduit.appendChild(prixProduit);
    panier.appendChild(nouveauProduit);
    
    //On met à jour le prix
    let total  =  document.getElementById("prix_tot");
    //On additionne le prix de l'élément au prix total. On parse pour que le + se fasse sur 2 entiers et non 2 chaînes de caractères.
    total.value = parseInt(total.value) + parseInt(prixProduit.innerHTML);

}
