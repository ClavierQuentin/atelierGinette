import accueil from '../pages/accueil.js';

const router = () => {
    const main = document.getElementById('main-conteneur');
    main.innerHTML = accueil.render();
};
window.addEventListener('load', () => {
    router();
});