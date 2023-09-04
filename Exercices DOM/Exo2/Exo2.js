
function addElement(){

    //Obtention de l'input
    let champs = document.getElementById("input01");

    //Vérification si le champs est vide ou non
    if (champs.value === "")
    {
        //Insertion du texte dans l'élément avec l'id error
        document.getElementById("error").innerHTML = "Le champs ne peut être vide";
    }
    else
    {
        //Création d'un élément li
        let li = document.createElement("li");

        //Insertion de la valeur du champ dans l'élément li
        li.innerHTML = champs.value;

        //remise à 0 du champs
        champs.value = "";

        //Obtention de l'élément ul01
        let ul = document.getElementById("ul01");

        //Insertion de l'élément li dans ul
        ul.appendChild(li);

        //Remise à 0 de l'élément avec l'id error
        document.getElementById("error").innerHTML = "";
    }		 	
}
