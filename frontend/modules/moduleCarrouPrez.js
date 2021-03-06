//J'importe les données de data.js
//import {photosPrez} from "../data.js";


const fonctionCarrouselPrez = async () => {

    const response = await fetch("/pages/about",{
        headers:{
            "Content-Type":"application/json",
        }
    });
    
    const listeImages = await response.json();

    let  listeImagesCarrou = [listeImages[8], listeImages[7], listeImages[4], listeImages[6]];
//On récupère l'élément HTML
let carrouselPrez = document.getElementById('carrouselPrez');

//On initialise une variable avec la longueur du array
//On initialise une largeur du carrousel de 400px
let largeurCarrouselPrez = 333;

//Fonction de génération des images
function generate(){
//Pour la taille du tableau, on implémente le src et la classe aux images
    for(let i = 0; i < listeImagesCarrou.length; i++){
        let photoPrez = document.createElement('img');
        photoPrez.src = listeImagesCarrou[i].url_image;
        photoPrez.classList.add('tailleImg');
        carrouselPrez.appendChild(photoPrez);
    }
}
generate();

//Initialisation d'un compteur pour suivre les positions des images
let compteurPrez = 1;
//Fonction pour le slide du carrousel
function slide(){
    //Si on arrive sur la dernière image
    if(compteurPrez == listeImagesCarrou.length){
        //On met le compteur à 0
        compteurPrez = 0;
    }
    //On translate de la largeur du carrou multipplié par la position de l'image
    carrouselPrez.style.transform = 'translateX(-' + largeurCarrouselPrez * compteurPrez + 'px)';
    //Incrémentation de compteur
    compteurPrez++;
}
//setInterval pour lancer la fonction toutes les 6s
setInterval(slide,6000);
}
export {fonctionCarrouselPrez};