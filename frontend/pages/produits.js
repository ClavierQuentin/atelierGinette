/*import {listeCategories} from "../data.js";
import {listeProduits} from "../data.js";*/
import {parseRequestUrl} from '../utils.js';
let request = parseRequestUrl();




const produits = {
    render: async  () => {
        const response = await fetch(`http://localhost:5000/pages/categories/${request.id}`,{
            headers:{
                "Content-Type":"application/json",
            }
        })
        if(!response || !response.ok){
            return console.log(response);
             `<div>Erreur dans la lecture de la BDD</div>`
        }
        const produits = await response.json();
  
            return `
            <div class="sectionProduits backGroundFleur">
            <div class="titreProduits">
                <h3>${produits[0].nom_categorie} :</h3>
            </div>
            <div id="cardsProduits" class="cardsProduits">
            ${produits.map( 
                produits =>`

                        <a href="#/pages/produit/${produits.id_produit}" class="cardProduit">
                            <div class="conteneurImgProduit">
                                <img class="imgProduit" src="${produits.url_image}" alt="">
                            </div>
                            <label>${produits.nom_produit}</label>
                            <label>${produits.prix_produit}€</label>
                        </a>
                        `
                        ).join('\n')}
            </div>
        </div>
            ` 
            }
        }
      
    

export default produits;


