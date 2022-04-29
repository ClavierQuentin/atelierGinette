const parseRequestUrl = () => {
    const url = document.location.hash.toLowerCase();
    const request = url.split("/");
    return{
        page: request[1],
        destination: request[2],
        id: request[3]
    } ;
}
let requestUrl = parseRequestUrl();
let pageAccueil = false
if(!requestUrl.page){
    pageAccueil = true
}
else{
    pageAccueil = false
}
//On récupère la div cliquable
let divMenu = document.getElementById('divMenu');

//On récupère les éléments nav et main de l'html
let nav = document.querySelector('nav');
let main = document.getElementById('main-conteneur');

//On récupère le titre principale
let nom = document.getElementById('name');

//On récupère conteneur-name
let conteneurName = document.getElementById('conteneurName');

//On déclare un booléen faux pour valider une condition
let isOuvert = false;
//Au click du menu
divMenu.addEventListener('click', () => {
    //Si le booléen est faux
    if(!isOuvert){
        //On rajoute la class css pour effectuer les mouvements
        divMenu.classList.add('ouverture');
        
        //On initialise setTimeOut pour une apparition dans 0.3s
        setTimeout(function(){
            //On fait apparaître nav et passe en flex
            nav.style.display = 'block';
            nav.style.display = 'flex';
            //On fait disparaitre le reste de la page
            main.style.display = 'none';
            //On rajoute une classe pour corriger le décalage du titre
            nom.classList.add('marginRight10');
            //On change la position du titre du site lors de l'apparation des liens de navigation
            conteneurName.style.position = "absolute";
        },300)
        //On passe le booléen à vrai
        isOuvert = true;
    }
    else{//Si le booléen est vrai
        //On retire la classe
        divMenu.classList.remove('ouverture');
        //On retire nav et on remets le reste de la page
        setTimeout(function(){
            nav.style.display = 'none';
            main.style.display = 'block';
            //On replace le titre
            nom.classList.remove('marginRight10');
            conteneurName.style.position = "relative";
            if(pageAccueil){
                conteneurName.style.position = "absolute";
            }

        },300)
        isOuvert = false;
    }
})