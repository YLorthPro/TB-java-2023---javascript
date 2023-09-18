// Etape 1 - Sélectionner nos éléments

let input = document.getElementById("prix");
let error = document.getElementById("error");
let formulaire = document.getElementById("formulaire");
let score = document.getElementById("score").children;
let nombreChoisi;

// Etape 2 - Cacher l'erreur

error.style.display = "none"

// Etape 3 - Générer un nombre aléatoire

let nombreAleatoire = Math.floor(Math.random() * 1001);
let essais = 0;

// Etape 4 - Vérifier que l'utilisateur donne bien un nombre

input.addEventListener("keyup", () => {

    if(isNaN(input.value))
        error.style.display = "inline"

    else
        error.style.display = "none"

});

// Etape 5 - Agir à l'envoi du formulaire

formulaire.addEventListener("submit",(e) =>{

    e.preventDefault();

    if(isNaN(input.value)||input.value == ""||input.value <0||input.value>1000)

        input.style.borderColor = "red";

    else{
        input.style.borderColor = "silver";
        essais++;
        nombreChoisi = input.value;
        input.value = "";
        verifier(nombreChoisi);
    }
})

// Etape 6 - Créer la fonction vérifier

function verifier (nombreChoisi){

    let instruction = document.createElement('div');

    if (nombreChoisi==nombreAleatoire){

        instruction.textContent = "essai "+ essais + ": C'est gagné";
        instruction.className = "instruction fini";
        input.disabled = true;
        document.getElementsByClassName("btn-primary")[0].disabled = true;
        score[0].innerHTML = parseInt(score[0].innerHTML) +1;
        rejouer();

    }else if (nombreChoisi<nombreAleatoire){

        instruction.textContent = "essai "+ essais + ": C'est plus!";
        instruction.className = "instruction plus";

    } else {

        instruction.textContent = "essai "+ essais + ": C'est moins!";
        instruction.className = "instruction moins";

        }

    document.getElementById('instructions').prepend(instruction);

    if(essais === 10 && nombreChoisi!=nombreAleatoire){
        input.disabled = true;
        document.getElementsByClassName("btn-primary")[0].disabled  = true;
        score[1].innerHTML = parseInt(score[1].innerHTML) +1;
        rejouer();
    }

}

//Etape 7 - Proposer de rejouer

function rejouer(){
    let rejouer = document.getElementsByClassName("row")[3];

    let boutton = document.createElement("button");
    boutton.innerHTML = "Rejouer";
    boutton.addEventListener("click",()=> nouvellePartie());
    boutton.setAttribute("id", "boutton");
    boutton.setAttribute("class", "btn btn-success")

    rejouer.appendChild(boutton);
}

function nouvellePartie(){
    error.style.display = "none";
    document.getElementsByClassName("btn-primary")[0].disabled = false;
    nombreAleatoire = Math.floor(Math.random() * 1001);
    essais = 0;
    document.getElementById('instructions').innerHTML = "";
    input.disabled = false;
    document.getElementById("boutton").outerHTML = "";
}