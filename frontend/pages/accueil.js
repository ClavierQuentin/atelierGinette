const accueil = {
    render: () =>{
        return `  
    <header>
        <div class="conteneurNew">
            <h2>Nos nouveautés</h2>
            <button id="boutonNouveaute" onclick="accederNouveaute()">Découvrir</button>
        </div>
        <div id="conteneur" class="conteneur">
            <div id="carrousel" class="carrousel">
            </div>
        </div>
    </header>
    <!---------------------------------BANNIERE PRESENTATION------------------------>
    <div class="prez">
                <!--TITRE-->
        <h4>Quelques mots sur l'Atelier :</h4>
    </div>
    <!--TEXTE-->
    <div class="banniereCitation">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed vulputate arcu, vel lacinia odio. Praesent non nibh ac velit laoreet luctus vitae ac velit. Nullam non eros eget augue gravida porta sit amet ultrices dui. Praesent hendrerit nisl vel magna egestas venenatis. Nunc id enim odio. Phasellus feugiat, dui nec porta pellentesque, elit purus hendrerit ligula, vel sagittis augue risus sit amet mauris. Nunc vel auctor mauris, a hendrerit turpis. Suspendisse potenti. Maecenas orci diam, eleifend sed pharetra in, finibus vel nibh. Phasellus ullamcorper mollis magna, id venenatis lectus. Proin felis dui, gravida ac scelerisque vel, luctus in purus. Phasellus nec blandit neque, at fringilla nisi. Sed quam dui, rhoncus in leo ut, imperdiet venenatis est. </p>
    </div>
    <!-------------------------------------BANNIERE CATEGORIES---------------------------------------->
    <div class="backGroundFleur">
        <div class="decouvrir">
            <!--TITRE-->
            <h4>A Découvrir</h4>
        </div>
        <div class="categories">
            <!--CATEGORIE-->
            <a href="#">
                <div>
                    <img class="imgCategorie" src="./img/trousse-maquillage-artisanat-atelier-ginette-4.jpg" alt="">
                    <label for="">Les trousses</label>
                </div>
            </a>
            <!---->
            <!--CATEGORIE-->
            <a href="">
                <div>
                    <img class="imgCategorie" src="./img/DSCF9440.jpg" alt="">
                    <label for="">Les sacs</label>
                </div>
            </a>
            <!---->
            <!--CATEGORIE-->
            <a href="">
                <div>
                    <img class="imgCategorie" src="./img/cotons-lavables-bambou-atelier-ginette-1.jpg" alt="">
                    <label for="">Les cotons</label>
                </div>
            </a>
            <!---->
            <!--CATEGORIE-->
            <a href="">
                <div>
                    <img class="imgCategorie" src="./img/DSCF0477.jpg" alt="">
                    <label for="">Les pochettes à savon</label>
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