let scoreJoueur = 0, scoreOrdi = 0;

function selectionOrdi() {
    const choix = ["pierre", "papier", "ciseaux"];
    let randomIndex = Math.floor(Math.random() * choix.length);
    return choix[randomIndex];
}

function selectionJoueur() {
    while(true){
        let choix = prompt("pierre, papier ou ciseaux?").toLowerCase();
        if(choix === "pierre" || choix === "papier" || choix ==="ciseaux"){
            return choix;
        }
    }
}

function jeu(choixJoueur, choixOrdi) {
    choixJoueur = choixJoueur.toLowerCase();
    choixOrdi = choixOrdi.toLowerCase();

    if (choixJoueur === choixOrdi) {
        return "Egalité";
    } else if (
        (choixJoueur === "pierre" && choixOrdi === "ciseaux") ||
        (choixJoueur === "papier" && choixOrdi === "pierre") ||
        (choixJoueur === "ciseaux" && choixOrdi === "papier")
    ) {
        scoreJoueur++;
        return `Gagné! ${choixJoueur} bat ${choixOrdi}.`;
    } else {
        scoreOrdi++;
        return `Perdu! ${choixOrdi} bat ${choixJoueur}.`;
    }
}

function repeat(){
    while(true){
        let repeat = prompt("Voulez-vous encore jouer?").toLowerCase();
        if(repeat === "oui"){
            return true;
        } else if(repeat === "non"){
            return false;
        }
    }
}

function game() {
    do{
        let choixJoueur = selectionJoueur();
        let choixOrdi = selectionOrdi();
        console.log(jeu(choixJoueur, choixOrdi));
        
    }while(repeat());

    alert(`Score Final - Joueur: ${scoreJoueur}, Ordi: ${scoreOrdi}`);
}

game();