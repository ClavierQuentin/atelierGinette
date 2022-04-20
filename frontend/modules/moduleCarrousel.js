//On importe les données de data.js
import {photosCarrousel} from "../data.js";

//On récupère l'élément carrousel dans html
let carrousel = document.getElementById('carrousel');
//On déclare une variable à 1
let idBtn = 1;

//On récupère la taille du tableau photosCarrousel
let tailleCarrousel = photosCarrousel.length;

//On récupère la largeur de l'écran de l'utilisateur
let largeurEcran = screen.width;

//Création d'une fonction de génération du carrousel selon la taille du array
function generate(){
    for(let i = 0; i < tailleCarrousel; i++){
        //On crée un élément img
        let photo = document.createElement('img');
        //On y modifie l'id et src selon le array
        photo.src = photosCarrousel[i].photo;
        photo.id = photosCarrousel[i].id;
        //On donne à l'image la largeur de l'écran
        photo.style.minWidth = largeurEcran+"px";
        photo.classList.add('tailleImg')
        //On rajoute l'image au carrousel
        carrousel.appendChild(photo);
    }
}
generate();

//On appelle un compteur pour suivre la position des images
let compteur = 1;
//On créer la fonction slide du carrousel
function slide(){
    //Si est arrivé à la dernière image
    if(compteur == tailleCarrousel){
        //On remet le compteur à 0
        compteur = 0;
    }
    //On translate le carrousel selon la largeur de l'écran et multiplié par le compteur (position de l'image)
    carrousel.style.transform = 'translateX(-' +largeurEcran*compteur+'px)';
    //On incrémente compteur
    compteur++;
    //On assigne le compteur à la variable idBtn
    idBtn = compteur;
    //On retourne la variable
    return idBtn
}
//setInterval nous permet de lancer slide toutes les 6s
setInterval(slide,6000);