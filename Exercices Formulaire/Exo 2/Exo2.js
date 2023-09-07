function remplissage(){
    //modification de l'input "prenom" dans le form "formulaire"
    document.formulaire.prenom.value = "Jean";

    //modification de l'input "nom" dans le form "formulaire"
    document.formulaire.nom.value = "Dupont";

    //modification de l'input "codePostal" dans le form "formulaire"
    document.formulaire.codePostal.value="1234";
    };
   
function reset(){
    //Reset du form "formulaire"
    document.formulaire.reset();
    };

function codePostal(){

    //1. Verifier si pas de champs vide
    if(document.formulaire.prenom.value == "" || document.formulaire.nom.value == "" || document.formulaire.codePostal.value == "")
        alert("Les champs ne peuvent pas être vide");

    //2. Verifier si le code postal est compris entre 1000 et 9999
    else if (document.formulaire.codePostal.value < 1000 || document.formulaire.codePostal.value >9999 || isNaN(document.formulaire.codePostal.value))
        alert("Ce n'est pas un nombre valide");
    // Formulaire valide
    else
        alert("Formulaire envoyé")
};