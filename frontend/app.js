import {fonctionCarrousel} from "./modules/moduleCarrousel.js";
import {fonctionCarrouselPrez} from "./modules/moduleCarrouPrez.js";
import accueil from "./pages/accueil.js";
import about from "./pages/about.js";
import {parseRequestUrl} from './utils.js'
//import error404 from "./pages/error404.js";
import categories from "./pages/categorie.js";
import produits from "./pages/produits.js";
import produit from "./pages/produit.js";
import panier from "./pages/panier.js";
import paiement from "./pages/paiement.js";

const conteneurName = document.getElementById('conteneurName');
const nav = document.querySelector('nav');

let request = parseRequestUrl();

function isAccueil(param, param2){
    if(param != 'pages' ||!param2 ){
        conteneurName.style.position = "absolute";
       fonctionCarrousel();
    }
    else if(param2 == 'about'){
        conteneurName.style.position = "relative";
        fonctionCarrouselPrez();        
    } 
}

const routes = {
    '/': accueil,
    '/pages': accueil,
    '/pages/about': about,
    '/pages/categories': categories,
    '/pages/categories/id': produits,
    '/pages/produit/id': produit,
    '/pages/panier':panier,
    '/pages/panier/id':panier,
    '/pages/paiement':paiement
}
const router = async () =>{
    request = parseRequestUrl();
    const parseUrl = 
    (request.page ? `/${request.page}` : '/') + 
    (request.destination ? `/${request.destination}` : '') +
    (request.id ? `/id` : '');
    const screen = routes[parseUrl]? routes[parseUrl] : accueil;
    const main = document.getElementById('main-conteneur');
   // if(!request.destination || request.destination == 'about'){
       // main.innerHTML = screen.render();
    //}
    //else{
        main.innerHTML = await screen.render();
        if (screen.after_render){
            await screen.after_render()
        };
    //}   
}

window.addEventListener('load', () =>{
    router();
   isAccueil(request.page, request.destination);    
})
window.addEventListener('hashchange', () =>{
    router();
    location.reload();
    document.documentElement.scrollTop = 0;
        isAccueil(request.page, request.destination);     
});