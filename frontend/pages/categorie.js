/*function generateCards(){
    let mainConteneur = document.getElementById('main-conteneur');

    let section = document.createElement('div');

    section.classList.add('sectionProduits','backGroundFleur');

    mainConteneur.appendChild(section);
    console.log('test' );


   let divTitre = document.createElement('div');
    divTitre.classList.add('titreProduits');
    section.appendChild(divTitre);

    let titreProduits = document.createElement('h3');
   //titreProduits.textContent = 'Tous les produits :';
    divTitre.appendChild(titreProduits);

    let cardsProduits = document.createElement('div');
    cardsProduits.classList.add('cardsProduits');
    section.appendChild(cardsProduits);

    for(let i =0; i<listeCategories.length; i++){
        let card = document.createElement('div');
        card.classList.add('card');
        cardsProduits.appendChild(card);

        let conteneurImg = document.createElement('div');
        conteneurImg.classList.add('conteneurImgCard');
        card.appendChild(conteneurImg);

        let img = document.createElement('img');
        img.classList.add('imgCardProduit');
        img.src = listeCategories[i].urlImageCategorie;
        conteneurImg.appendChild(img);

        let label = document.createElement('label');
        label.textContent = listeCategories[i].categorie;
        card.appendChild(label);
    }
}*/
const categories = {
    render:  async () => {
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
         return `
         <div class="sectionProduits backGroundFleur">
            <div class="titreProduits">
                <h3>Toutes les catégories :</h3>
            </div>
            <div id="cardsProduits" class="cardsProduits">
                ${listeCategories.map( 
                    listeCategories =>`
                    
                        <a href="#/pages/categories/${listeCategories.id_categorie}" class="card">
                            <div class="conteneurImgCard">
                                <img class="imgCardProduit" src="${listeCategories.url_img}" alt="">
                            </div>
                            <label>${listeCategories.nom_categorie}</label>
                        </a>
                    `
                ).join('\n')}
            </div>
        </div>
         `       
    }
}
export default categories;