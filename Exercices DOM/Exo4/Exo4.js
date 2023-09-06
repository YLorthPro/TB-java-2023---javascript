let input_total  =  document.getElementById("prix_tot");
input_total.value = 0;

function ajouterAuPanier(p_id){
  
    //Récupérer le nom du produit qu'on ajoute
    let nom =  document.getElementById(p_id).firstElementChild.innerHTML;

    //Récupère le prix du produit
    let prix =  document.getElementById(p_id).children[1].innerHTML;
  
    //Parcourir le panier  
    let trPanier = document.getElementById("mon_panier").children;//Récupère les lignes tr du panier sous forme de tableau
    
    let trouve = false;
    
    for(i=0; i<trPanier.length; i++){
        let nomProdPan = trPanier[i].firstElementChild.innerHTML; //récupère le nom du produit de la [i]ème ligne de mon panier
      if(nom==nomProdPan){ //Si le nom de l'article qu'on veut ajouter est égal au nom du produit à la ième ligne
            //Je récupère le dernier élément enfant de la ligne du panier (la quantité) et je fais +1
          trPanier[i].lastElementChild.innerHTML = parseInt(trPanier[i].lastElementChild.innerHTML) + 1;
          trouve = true;
      }
         
     }  
    
    //Si pas trouvé
    if(trouve == false){
        //Je récupère l'élément qui a l'id panier
        let panier = document.getElementById("mon_panier");
      
        //Je créé une nouvelle ligne avec 3 colonnes
        let new_tr = document.createElement("tr");
        let td_prix = document.createElement("td");
        let td_nomProd = document.createElement("td");
        let td_qte = document.createElement("td");
      
        //Je mets les valeurs dans les colonnes
        td_qte.innerHTML = 1;
        td_nomProd.innerHTML = nom;
        td_prix.innerHTML = prix;
      
        //J'insère les colonnes dans la nouvelle ligne
        new_tr.appendChild(td_nomProd);
        new_tr.appendChild(td_prix);
        new_tr.appendChild(td_qte);

        //J'insère la ligne dans l'élément panier
        panier.appendChild(new_tr);    
    }

    // mise à jour de prix
    input_total.value = parseInt(input_total.value) + parseInt(prix);
   
}
  
function supprimerDuPanier(p_id){

//Récupérer le nom du produit qu'on supprime
let nom =  document.getElementById(p_id).firstElementChild.innerHTML;
//Récupère le prix du produit
let prix =  document.getElementById(p_id).children[1].innerHTML;

//Parcourir le panier  
let trPanier = document.getElementById("mon_panier").children; //Récupère les lignes tr du panier sous forme de tableau

for(i=0; i<trPanier.length; i++){
    let nomProdPan = trPanier[i].firstElementChild.innerHTML; //récupère le nom du produit de la [i]ème ligne de mon panier
        if(nom==nomProdPan){
            if(trPanier[i].lastElementChild.innerHTML>0){ //si plus grand que 0, on retire 1
                //Je récupère le dernier élément enfant de la ligne du panier (la quantité) et je fais -1
                trPanier[i].lastElementChild.innerHTML = parseInt(trPanier[i].lastElementChild.innerHTML) - 1;

                //Je soustrait le prix de l'article
                input_total.value = parseInt(input_total.value) - parseInt(prix);
                if(trPanier[i].lastElementChild.innerHTML==0){ //si qtt =0, on supprime
                    trPanier[i].remove();
                }
            }
        }
    }  
}
  