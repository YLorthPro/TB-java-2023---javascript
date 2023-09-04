let d = new Date();

let jour = d.getDay();

let phrase = "Bonjour, nous sommes "; // Début de ma phrase

let mot; // Mot changeant.

switch(jour) {
  case 0 : mot = "dimanche";
  break;
  case 1 : mot = "lundi";
  break;
  case 2 : mot = "mardi";
  break;
  case 3 : mot = "mercredi";
  break;
  case 4 : mot = "jeudi";
  break;
  case 5 : mot = "vendredi";
  break;
  case 6 : mot = "samedi";
  break;
  default : mot = "erreur";
  break;
}
alert(phrase + mot);

///////////////////////////


let chaine = "A";
for(let i=0; i<10; i++){
  console.log(chaine);
  chaine += "A";
}