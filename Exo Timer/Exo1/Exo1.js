//Je fais un setTimeout qui m'executera une fonction au bout d'1 seconde (1000 millisecondes)
setTimeout(function(){set_hour_title();},1000);

const set_hour_title = function () {
    //J'obtiens la date actuelle
    let today = new Date();
    
    //Je récupère l'élèment titre
    let title_html = document.querySelector('title');

    //J'insère l'heure dans le titre
    title_html.innerText = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    //Je relance un setTimeout
    setTimeout(function(){set_hour_title();},1000);
}

setInterval(function(){set_hour_body();},1000);

const set_hour_body = function () {
    
    //J'obtiens les éléments h2 et h3
    let h2= document.querySelector('h2');
    let h3 = document.querySelector('h3');

    //J'obtiens la date actuelle
    let today = new Date();

    //Insertion de la date dans le h2 avec un toLocaleDateString
    h2.innerHTML = new Date().toLocaleDateString('fr-FR', { weekday:"long", month:"long", day:"numeric", year:"numeric"});

    //Insertion de l'heure dans le h3
    h3.innerHTML = (`${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`);
    
}