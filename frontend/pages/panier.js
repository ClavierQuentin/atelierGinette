import { getPanierItems, setPanierItems } from "../localStorage.js";
import { parseRequestUrl, rerender } from "../utils.js";

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
    if(forceUpdate){
        rerender(panier)
    }
}

const panier = {
    after_render: () => {
        const qteSelects = document.getElementsByClassName("qte-select");
        Array.from(qteSelects).forEach(qteSelect => {
            qteSelect.addEventListener("change", () => {
                let item = getPanierItems()
                for(let i = 0; i < item.length; i++){
                    if(item[i].produit == qteSelect.id){
                        item[i]['qte'] = Number.parseInt(qteSelect.value);
                        setPanierItems(item);
                        if(!request.id){
                            location.reload()
                        }
                        else{
                            document.location.hash = '/pages/panier'
                        }
                    }
                }   
                console.log(item);
               // let item = getPanierItems().find((x) => x.produit === qteSelect.id);
                //ajouterAuPanier({...item, qte: Number(e.target.value)}, true)
            })
        })
        const deleteButtons = document.getElementsByClassName('delete-button');
        Array.from(deleteButtons).forEach(deleteButton => {
            deleteButton.addEventListener('click', (e) => {
                let item = getPanierItems();
               for(let i = 0; i < item.length; i++){
                    if(deleteButton.id == item[i].produit){
                        item.splice(i,1);
                        setPanierItems(item);
                        if(!request.id){
                            location.reload()
                        }
                        else{
                            document.location.hash = '/pages/panier'
                        }
                    }
                }
            })
        })
    },
    render: async () => {
        if(request.id){
                const response = await fetch(`http://localhost:5000/pages/panier/${request.id}`,{
                    headers:{
                        "Content-Type":"application/json",
                    }
                })
           
            if(!response || !response.ok){
                return `<div>Erreur dans la lecture de la BDD</div>`
            } 
            let produit = await response.json();
        
            ajouterAuPanier({
                "produit": produit[0].id_produit,
                "nom": produit[0].nom_produit,
                "image": produit[0].url_image,
                "prix": produit[0].prix_produit,  
                "stock": produit[0].stock_produit,
                "qte":1
            })    
        }   
        let panierItems = getPanierItems()
        return    `
        <div class="basket backGroundFleur">
           <div class="pagePanier">
                <h3>Votre panier</h3>
                <div>
                    ${
                        panierItems.length === 0? '<div>Votre panier est vide <a href="/#/">Retour à l\'accueil</a></div>':
                        panierItems.map(produit => `
                        <div class="produitPanier">
                        <div class="divImageProduitPanier">
                            <img src="${produit.image}" alt="" class="imgProduitPanier">
                        </div>
                        <div class="nomProduitPanier">
                            <div>
                                <a href="#/pages/produit/${produit.produit}">${produit.nom}</a>
                            </div>
                            <div>
                                Qté : <select class="qte-select" name="" id="${produit.produit}">
                                    ${
                                        [...Array(produit.stock).keys()].map(x => produit.qte === x+1?
                                            `<option selected value="${x+1}">${x+1}</option>`:
                                            `<option value="${x+1}">${x+1}</option>`
                                            )
                                    }
                                </select>
                                <button id="${produit.produit}" class="delete-button">Supprimer</button>
                            </div>
                        </div>
                        <div class="prixProduitPanier">
                             ${produit.prix}€
                        </div>
                    </div>
    
                        `).join('\n')
                    }
                </div>
           </div>
           <div class="sousTotal">
                    <h3>Sous-Total (${panierItems.reduce((a,c) => a + c.qte, 0)} produit(s)) : ${panierItems.reduce((a,c) => a+c.prix*c.qte, 0)}€</h3>
                    <button class="boutonCheckout" id="boutonCheckout">Procéder au paiement</button>
           </div>
        </div>
    `
    }
}
export default panier;