let chaine = "ma formation javascript";

//Vider la console
console.clear();

// 1. Position de "ma"
console.log(chaine.indexOf("ma"));
// 2. Position de "p"
console.log(chaine.indexOf("p"));
// 3. Charactère à l'indice 21
console.log(chaine.charAt(21));
// 4. Remplacer javascript par java
console.log(chaine.replace("javascript","Java"));
// 5. Découper la chaîne avec le délimitateur " "
let tableau = chaine.split(" ");
console.log(tableau);
// 6. Inverser la chaîne de caractère

/*
1. séparer en caractères avec split("")
2. inverser le tableau de caractères avec reverse()
3. reformer en chaîne de caractères avec join("")
*/
let eniahc = chaine.split("").reverse().join("");
console.log(eniahc);
