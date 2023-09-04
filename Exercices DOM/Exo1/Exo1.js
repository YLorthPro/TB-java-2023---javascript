  
function addElement(){

    // Création d'un élément li
    let li = document.createElement("li"); 

    // Remplacement par la chaine de caractère "item"
    li.innerHTML = "item";

    // Obtention de l'élément ul01
    let ul = document.getElementById("ul01");

    //Insertion de li dans ul
    ul.appendChild(li);
}