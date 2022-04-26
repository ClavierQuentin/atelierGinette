//J'importe les données de data.js
import {photosPrez} from "../data.js";

const fonctionCarrouselPrez = () => {
//On récupère l'élément HTML
let carrouselPrez = document.getElementById('carrouselPrez');

//On initialise une variable avec la longueur du array
let tailleCarrouselPrez = photosPrez.length;
//On initialise une largeur du carrousel de 400px
let largeurCarrouselPrez = 400;

//Fonction de génération des images
function generate(){
//Pour la taille du tableau, on implémente le src et la classe aux images
    for(let i = 0; i < tailleCarrouselPrez; i++){
        let photoPrez = document.createElement('img');
        photoPrez.src = photosPrez[i].photo;
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
    if(compteurPrez == tailleCarrouselPrez){
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