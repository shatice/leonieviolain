import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

/***** COMPONENTS *****/
import Header from './Header.jsx';
 
const Apache = () => {
    return(
        <div class="movieSection">
            <Header/>
            <main>
                <section class="movieCover apache">
                    <div class="movieCover__infos movieCover__infos--apache">
                        <div class="movieCover__title">
                        <div>
                            <p>L'</p><p>A</p><p>P</p><p>A</p><p>C</p><p>H</p><p>E</p>
                        </div>
                        </div>
                        <div class="movieCover__details">
                        <div class="movieCover__description">
                            <p class="movieCover__time">2'20</p>
                            <div class="movieCover__type">
                            <p>C</p><p>O</p><p>U</p><p>R</p><p>T</p><p>-</p><p>M</p><p>É</p><p>T</p><p>R</p><p>A</p><p>G</p><p>E</p>
                            </div>
                            <p class="movieCover__date">2018</p>
                        </div>
                        <div class="movieCover__prom desktop apache">
                            <div class="movieCover__selection">
                            <h3>Séléction Festival</h3>
                            <p>Nikon Festival : Prix des Écoles</p>
                            </div>
                            <div class="movieCover__press">
                            <h3>Articles :</h3>
                            <ul>
                                <li><a href="https://www.lesinrocks.com/2019/03/29/cinema/actualite-cinema/le-nikon-film-festival-offre-un-9e-palmares-sous-le-signe-du-partage/" target="_blank">Les Inrockuptibles</a></li>
                                <li><a href="https://www.konbini.com/fr/cinema/nikon-film-festival-2019-coup-de-coeur-15-courts-metrages/" target="_blank">Konbini</a></li>
                                <li><a href="https://www.fisheyemagazine.fr/decouvertes/actu/le-palmares-du-nikon-film-festival-une-histoire-de-partage/" target="_blank">Fisheye</a></li>
                                <li><a href="https://www.artyparis.net/leonie-violain-nikon-film-festival/" target="_blank">ArtyParis</a></li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="movieCover__img movieCover__img--apache"></div>
                </section>
                <div class="movieCover__prom movieCover__prom--apache mobile">
                <div class="movieCover__selection">
                    <h3>Séléction Festival</h3>
                    <p>Nikon Festival : Prix des Écoles</p>
                </div>
                <div class="movieCover__press">
                    <h3>Articles :</h3>
                    <ul>
                    <li><a href="https://www.lesinrocks.com/2019/03/29/cinema/actualite-cinema/le-nikon-film-festival-offre-un-9e-palmares-sous-le-signe-du-partage/" target="_blank">Les Inrockuptibles</a></li>
                    <li><a href="https://www.konbini.com/fr/cinema/nikon-film-festival-2019-coup-de-coeur-15-courts-metrages/" target="_blank">Konbini</a></li>
                    <li><a href="https://www.fisheyemagazine.fr/decouvertes/actu/le-palmares-du-nikon-film-festival-une-histoire-de-partage/" target="_blank">Fisheye</a></li>
                    <li><a href="https://www.artyparis.net/leonie-violain-nikon-film-festival/" target="_blank">ArtyParis</a></li>
                    </ul>
                </div>
                </div>
                <div class="galery">
                    <ul>
                        <li><img src="/imgs/apache1.jpg" alt=""/></li>
                        <li><img src="/imgs/apache2.jpg" alt=""/></li>
                        <li><img src="/imgs/apache3.jpg" alt=""/></li>
                        <li><img src="/imgs/apache4.jpg" alt=""/></li>
                    </ul>
                </div>
                <button class="btnMovie btnMovie--apache"><a href="https://vimeo.com/357378807" target="_blank">Voir le film</a></button>
            </main>
        </div>
    );
}
   
export default Apache;