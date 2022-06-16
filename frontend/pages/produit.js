import { getPanierItems, setPanierItems } from '../localStorage.js';
import {parseRequestUrl} from '../utils.js';
//import data from '../data.js'
let request = parseRequestUrl();

let ajouterAuPanier = (item, forceUpdate = false) => {
    let panierItems = getPanierItems();
    const itemExiste = panierItems.find(x => x.produit === item.produit);
    if(itemExiste){
        if(forceUpdate){
           panierItems = panierItems.map((x) => x.product === itemExiste.produit ? item : x); 
        }
    }
    else{
        panierItems = [...panierItems, item]
    }
    setPanierItems(panierItems)
}

const produit = {
    after_render: async   () => {
       const request = parseRequestUrl();
         const response = await fetch(`http://localhost:3000/pages/produit/${request.id}`,{
            headers:{
                "Content-Type":"application/json",
            }
        })
        const produit = await response.json() 

        /*let produit = []
            for(let i = 0; i < data.listeProduits.length; i++){
                if(request.id == data.listeProduits[i].id_produit){
                     produit = data.listeProduits[i];
                }
            }*/
        document.getElementById('boutonAjouter').addEventListener('click', () => {
            console.log(produit);
            ajouterAuPanier({
                "produit": produit[0].id_produit,
                "nom": produit[0].nom_produit,
                "image": produit[0].url_image,
                "prix": produit[0].prix_produit,  
                "stock": produit[0].stock_produit,
                "qte":1
            })
            location.reload()
        })
    },
    render: async () => {
       const response = await fetch(`http://localhost:3000/pages/produit/${request.id}`,{
            headers:{
                "Content-Type":"application/json",
            }
        })
        if(!response || !response.ok){
            return `<div>Erreur dans la lecture de la BDD</div>`
        }
        const produit = await response.json()
        /*let produit = []
            for(let y = 0; y < data.listeProduits.length; y++){
                if(request.id == data.listeProduits[y].id_produit){
                     produit = data.listeProduits[y];
                }
            }*/
        
        return `
        <div class="backGroundFleur">
            <div class="sectionPhoto">
                <img src="${produit[0].url_image}" alt="" class="imgProduitUnique">
                <div class="description1">
                    <h3>${produit[0].nom_produit}</h3>
                    <div class="prix">
                        <p>
                            ${produit[0].prix_produit}€
                        </p>
                    </div>
                    <div class="descriptionCourte">
                            ${produit[0].description_courte} 
                    </div>
                    <div><button id="boutonAjouter">Ajouter au panier</button></div>
                </div>
            </div>
            <hr>
            <div class="compo">
                ${produit[0].description_longue}
            </div>
            <!--<hr>
            <div>
                <h3 class="titreProduitEquivalent">Vous pourriez aussi aimer :</h3>
            </div>-->
        </div>
       `
    }
}
export default produit;
