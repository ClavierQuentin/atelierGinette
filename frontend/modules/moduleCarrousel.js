//On importe les données de data.js
//import {photosCarrousel} from "../data.js";

//import data from "../data.js";


const fonctionCarrousel = async () => {

    const response = await fetch("/api/produit/",{
        headers:{
            "Content-Type":"application/json",
        }
    });
    if(!response || !response.ok){
        return `<div>Error dans la lecture de la bdd</div>`
    }
    const listeCategories = await response.json(); 

    //const listeCategories = data.listeCategories
    
//On récupère l'élément carrousel dans html
let carrousel = document.getElementById('carrousel');
//On déclare une variable à 1
let idBtn = 1;

//On récupère la largeur de l'écran de l'utilisateur
let largeurEcran = screen.width;
//Création d'une fonction de génération du carrousel selon la taille du array
function generate(){
    for(let i = 0; i < listeCategories.length; i++){

        //On crée un élément img
        let photo = document.createElement('img');
        //On y modifie l'id et src selon le array
        photo.src = listeCategories[i].url_img;
        photo.id = listeCategories[i].id_categorie;
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
    if(compteur == listeCategories.length){
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
};
export {fonctionCarrousel}