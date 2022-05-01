import {parseRequestUrl} from '../utils.js';
let request = parseRequestUrl();

const produit = {
    render: async () => {
        const response = await fetch(`http://localhost:5000/pages/produit/${request.id}`,{
            headers:{
                "Content-Type":"application/json",
            }
        })
        if(!response || !response.ok){
            return `<div>Erreur dans la lecture de la BDD</div>`
        }
        const produit = await response.json()

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
                    <button>Ajouter au panier</button>
                </div>
            </div>
            <hr>
            <div class="compo">
                ${produit[0].description_longue}
            </div>
            <hr>
            <div>
                <h3 class="titreProduitEquivalent">Vous pourriez aussi aimer :</h3>
            </div>
        </div>
       `
    }
}
export default produit;
