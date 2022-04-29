import {listeCategories} from "../data.js";
import {listeProduits} from "../data.js";
import {parseRequestUrl} from '../utils.js';
let request = parseRequestUrl();


for(let i = 0; i < listeCategories.length; i++){
    if(request.id == listeCategories[i].id){
        console.log('test');
    }
}

const produits = {
    render: () => {
        
        for(let i = 0; i < listeCategories.length; i++){
            if(request.id == listeCategories[i].id){
                console.log('test2');
            return `
            <div class="sectionProduits backGroundFleur">
            <div class="titreProduits">
                <h3>${listeCategories[i].categorie} :</h3>
            </div>
            <div id="cardsProduits" class="cardsProduits">
            ${listeCategories[i].produit.map( 
                produit =>`

                        <a href="#/pages/categorie/" class="cardProduit">
                            <div class="conteneurImgProduit">
                                <img class="imgProduit" src="${produit.urlImgProduit}" alt="">
                            </div>
                            <label>${produit.nom}</label>
                            <label>${produit.prix}€</label>
                        </a>
                        `
                        ).join('\n')}

            </div>
        </div>
            ` 
                console.log(listeProduits[i].nom);
            }
        }
      
    }
}
export default produits;


