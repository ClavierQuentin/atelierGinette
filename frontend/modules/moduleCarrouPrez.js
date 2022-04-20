//J'importe les données de data.js
import {photosPrez} from "../data.js";

//On récupère l'élément HTML
let carrousel = document.getElementById('carrousel');

//On initialise une variable avec la longueur du array
let tailleCarrousel = photosPrez.length;
//On initialise une largeur du carrousel de 400px
let largeurCarrousel = 400;

//Fonction de génération des images
function generate(){
//Pour la taille du tableau, on implémente le src et la classe aux images
    for(let i = 0; i < tailleCarrousel; i++){
        let photo = document.createElement('img');
        photo.src = photosPrez[i].photo;
        photo.classList.add('tailleImg');
        carrousel.appendChild(photo);
    }
}
generate();

//Initialisation d'un compteur pour suivre les positions des images
let compteur = 1;
//Fonction pour le slide du carrousel
function slide(){
    //Si on arrive sur la dernière image
    if(compteur == tailleCarrousel){
        //On met le compteur à 0
        compteur = 0;
    }
    //On translate de la largeur du carrou multipplié par la position de l'image
    carrousel.style.transform = 'translateX(-' + largeurCarrousel * compteur + 'px)';
    //Incrémentation de compteur
    compteur++;
}
//setInterval pour lancer la fonction toutes les 6s
setInterval(slide,6000);