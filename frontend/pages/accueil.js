const accueil = {
    render:  async () => {
        const response = await fetch("http://localhost:5000/api/produit/",{
            headers:{
                "Content-Type":"application/json",
            }
        });
        /*if(!response || !response.ok){
            return `<div>Error dans la lecture de la bdd</div>`
        }*/
        const listeCategories = await response.json(); 
        return `  
    <header>
        <div class="conteneurNew">
            <h2>Nos nouveautés</h2>
            <button id="boutonNouveaute" onclick="accederNouveaute()"><a href="#/pages/categories">Découvrir</a></button>
        </div>
        <div id="conteneur" class="conteneur">
            <div id="carrousel" class="carrousel">
            </div>
        </div>
    </header>
    <!---------------------------------BANNIERE PRESENTATION------------------------>
    <div class="prez">
                <!--TITRE-->
        <h2>Quelques mots sur l'Atelier :</h2>
    </div>
    <!--TEXTE-->
    <div class="banniereCitation">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed vulputate arcu, vel lacinia odio. Praesent non nibh ac velit laoreet luctus vitae ac velit. Nullam non eros eget augue gravida porta sit amet ultrices dui. Praesent hendrerit nisl vel magna egestas venenatis. Nunc id enim odio. Phasellus feugiat, dui nec porta pellentesque, elit purus hendrerit ligula, vel sagittis augue risus sit amet mauris. Nunc vel auctor mauris, a hendrerit turpis. Suspendisse potenti. Maecenas orci diam, eleifend sed pharetra in, finibus vel nibh. Phasellus ullamcorper mollis magna, id venenatis lectus. Proin felis dui, gravida ac scelerisque vel, luctus in purus. Phasellus nec blandit neque, at fringilla nisi. Sed quam dui, rhoncus in leo ut, imperdiet venenatis est. </p>
    </div>
    <!-------------------------------------BANNIERE CATEGORIES---------------------------------------->
    <div class="backGroundFleur">
        <div class="decouvrir">
            <!--TITRE-->
            <h2>A Découvrir</h2>
        </div>
        <div class="categories">
            <!--CATEGORIE-->
            <a href="#/pages/categories/${listeCategories[0].id_categorie}">
                <div>
                    <div class="divImg">
                        <img class="imgCategorie" src="${listeCategories[0].url_img}" alt="">
                    </div
                    <label for="">${listeCategories[0].nom_categorie}</label>
                </div>
            </a>
            <!---->
            <!--CATEGORIE-->
            <a href="#/pages/categories/${listeCategories[1].id_categorie}">
                <div>
                    <div class="divImg">
                        <img class="imgCategorie" src="${listeCategories[1].url_img}" alt="">
                    </div>
                    <label for="">${listeCategories[1].nom_categorie}</label>
                </div>
            </a>
            <!---->
            <!--CATEGORIE-->
            <a href="#/pages/categories/${listeCategories[2].id_categorie}">
                <div>
                    <div class="divImg">
                        <img class="imgCategorie" src="${listeCategories[2].url_img}" alt="">
                    </div>
                    <label for="">${listeCategories[2].nom_categorie}</label>
                </div>
            </a>
            <!---->
            <!--CATEGORIE-->
            <a href="#/pages/categories/${listeCategories[3].id_categorie}">
                <div>
                <div class="divImg">
                        <img class="imgCategorie" src="${listeCategories[3].url_img}" alt="">
                </div>
                <label for="">${listeCategories[3].nom_categorie}</label>
                </div>
            </a>
            <!---->
        </div>
    </div>
    <!----------------------------------BANNIERE PICTOS---------------------------------------->
    <div class="bannierePicto">
        <div>
            <img src="./img/hand-made.png" alt="">
            <label for="">Fait maison</label>
        </div>
        <div>
            <img src="./img/icons8-machine-à-coudre-80.png" alt="">
            <label for="">Produits artisanaux</label>
        </div>
        <div>
            <img src="./img/ecologique.png" alt="">
            <label for="">Eco-responsable</label>
        </div>
    </div>
`
    }
};
export default accueil;