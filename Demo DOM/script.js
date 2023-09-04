//--------------------------------------------- Modification

//Obtention de l'élément portant l'id "démo"
let x = document.getElementById("demo");

//Remplacement du contenu de l'élément x par une chaine de caractère
x.innerHTML = "j'ai été remplacé";

//Obtention des éléments ayant comme classe classeDemo
let classeDemo = document.getElementsByClassName("classeDemo");

//Affichage en console du résultat
console.log(classeDemo);

//Modification du deuxième élément ayant comme classe classeDemo
classeDemo[1].innerHTML ="Je remplace cette classe";

//--------------------------------------------- Ajout

//Création d'un élément h2
let y = document.createElement("h2");

//Remplacement du contenu de l'élément y par une chaine de caractère
y.innerHTML = "Je suis un sous titre";

//Insertion de l'élément y dans x
x.appendChild(y);

//Création et insertion de l'élément footer dans le body (insertion en dernière ligne du body)
let footer = document.createElement("p");
footer.innerHTML= "Je suis un footer";
document.body.appendChild(footer);

//--------------------------------------------- Utilisation dans une fonction

// Création d'une fonction permettant d'ajouter un sous titre
function ajouterTitre(){
    let titre = document.createElement("h2"); 
    titre.innerHTML = "sous titre";
    x.appendChild(titre);
    }

//--------------------------------------------- Les nodes

//Affichage de tous les noeuds du body
console.log(document.body.childNodes);

//Affichage de tous le noeuds de l'élément avec l'id node
console.log(document.getElementById("node"));

//Affichage du texte du 2e enfant de l'élément avec l'id node 
console.log(document.getElementById("node").childNodes[1].textContent);

//Changement du texte du 5e enfant de l'élément avec l'id node
document.getElementById("node").childNodes[5].innerHTML = "J'ai changé un noeud";

//Création d'un élément "li"
let li = document.createElement("li");

//Modification du texte
li.textContent = "Bonjour";

//Obtention de l'élément ayant comme id maListe
let ul = document.getElementById("maListe");

//Obtention du 2e noeud enfant de ul
let li1 = ul.childNodes[1];

//remplacer l'enfant li par li1 dans le parent ul
ul.replaceChild(li, li1);

//--------------------------------------------- outerHTML et innerHTML

document.getElementById("inner").innerHTML = "innerHTML";

document.getElementById("outer").outerHTML = "outerHTML";


