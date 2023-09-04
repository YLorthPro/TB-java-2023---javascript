//Demande du prix du livre
let prix = prompt("Prix du livre?");

//Demande la quantité
let quantite = prompt("Quantité?");

//Déclaration de la constante TVA
const TVA = 0.21;

//Calcul du prix total HTVA
let prix_total = quantite*prix;

//Calcul du prix total TVAC
let prix_total_TTC = prix_total + prix_total*TVA;

//Affichge du prix total TVAC
alert("Le prix TTC de la commande :"+prix_total_TTC);

//--------------------------------------------
//Opérateur ternaire
let x = prompt("entrez un nombre");
alert(x%2==0?"Le nombre est pair":"Le nombre est impair");