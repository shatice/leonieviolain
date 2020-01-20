import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

/***** COMPONENTS *****/
import Header from './Header.jsx';
 
const Desiderare = () => {
    return(
        <div class="movieSection">
            <Header/>
            <main>
                <section class="movieCover desiderare">
                    <div class="movieCover__infos movieCover__infos--desiderare">
                        <div class="movieCover__title movieCover__title--desiderare">
                            <div>
                                <p>D</p><p>E</p><p>S</p><p>I</p><p>D</p><p>E</p><p>R</p><p>A</p><p>R</p><p>E</p>
                            </div>
                        </div>
                        <div class="movieCover__details movieCover__details--desiderare">
                            <div class="movieCover__description">
                                <p class="movieCover__time">6'</p>
                                <div class="movieCover__type">
                                <p>C</p><p>O</p><p>U</p><p>R</p><p>T</p><p>-</p><p>M</p><p>É</p><p>T</p><p>R</p><p>A</p><p>G</p><p>E</p>
                                </div>
                                <p class="movieCover__date">2018</p>
                            </div>
                            <div class="movieCover__prom desktop desiderare">
                            <div class="movieCover__selection">
                                <p>En collaboration avec</p>
                                <br/>
                                <h3>Censored Magazine</h3>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="movieCover__img movieCover__img--desiderare"></div>
                </section>
                <div class="movieCover__prom movieCover__prom--desiderare mobile">
                    <div class="movieCover__selection">
                        <p>En collaboration avec :</p>
                        <h3><a href="https://censoredmagazine.bigcartel.com/" target="_blank">Censored Magazine</a></h3>
                    </div>
                </div>
                <div class="galery">
                    <ul>
                        <li><img src="/imgs/desiderare1.jpg" alt=""/></li>
                        <li><img src="/imgs/desiderare2.jpg" alt=""/></li>
                        <li><img src="/imgs/desiderare3.jpg" alt=""/></li>
                        <li><img src="/imgs/desiderare4.jpg" alt=""/></li>
                    </ul>
                </div>
                <button class="btnMovie btnMovie--desiderare"><a href="http://www.mauvais-sang.fr?wvideo=ewuubptob8">Voir le film</a></button>
            </main>
        </div>
    );
}
   
export default Desiderare;