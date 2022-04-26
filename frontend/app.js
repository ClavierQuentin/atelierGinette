import {fonctionCarrousel} from "./modules/moduleCarrousel.js";
import {fonctionCarrouselPrez} from "./modules/moduleCarrouPrez.js";
import accueil from "./pages/accueil.js";
import about from "./pages/about.js";
import {parseRequestUrl} from './utils.js'
import error404 from "./pages/error404.js";

const conteneurName = document.getElementById('conteneurName');
const nav = document.querySelector('nav');

let request = parseRequestUrl();

function isAccueil(param){
    if(!param){
        conteneurName.style.position = "absolute";
        fonctionCarrousel();
    }
    else{
        conteneurName.style.position = "relative";
        fonctionCarrouselPrez();
        nav.style.height = '75vh';
        
    } 
}

const routes = {
    '/': accueil,
    '/pages': accueil,
    '/pages/about': about
}
const router = () =>{
     request = parseRequestUrl();
    const parseUrl = 
    (request.page ? `/${request.page}` : '/') + 
    (request.destination ? `/about` : '');
    const screen = routes[parseUrl]? routes[parseUrl] : error404;
    const main = document.getElementById('main-conteneur');
    main.innerHTML = screen.render();
}

window.addEventListener('load', () =>{
    router();
   isAccueil(request.destination);    
})
window.addEventListener('hashchange', () =>{

    router();
    location.reload();
    isAccueil(request.destination);     
});