import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

/***** COMPONENTS *****/
import Header from './Header.jsx';
 
const Raptus = () => {
    return(
        <div class="movieSection">
            <Header/>
            <main>
                <section class="movieCover raptus">
                    <div class="movieCover__infos movieCover__infos--raptus">
                        <div class="movieCover__title">
                        <div>
                            <p>R</p><p>A</p><p>P</p><p>T</p><p>U</p><p>S</p>
                        </div>
                        </div>
                        <div class="movieCover__details">
                        <div class="movieCover__description">
                            <p class="movieCover__time">15'</p>fes
                            <div class="movieCover__type">
                            <p>C</p><p>O</p><p>U</p><p>R</p><p>T</p><p>-</p><p>M</p><p>É</p><p>T</p><p>R</p><p>A</p><p>G</p><p>E</p>
                            </div>
                            <p class="movieCover__date">2018</p>
                        </div>
                        <div class="movieCover__prom movieCover__prom--raptus desktop">
                            <div class="movieCover__selection">
                            <h3>Séléction Festival</h3>
                            <p>Tel Aviv International Film Festival 2019 - Israël</p>
                            <p>Edera Film Festival 2019 - Italie</p>
                            <p>Festival Format Court - France</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="movieCover__img movieCover__img--raptus"></div>
                </section>
                <div class="movieCover__prom raptus mobile">
                <div class="movieCover__selection">
                    <h3>Séléction Festival</h3>
                    <p>Tel Aviv International Film Festival 2019 - Israël</p>
                    <p>Edera Film Festival 2019 - Italie</p>
                    <p>Festival Format Court - France</p>
                </div>
                </div>
                <div class="galery">
                <ul>
                    <li><img src="/imgs/raptus1.jpg" alt=""/></li>
                    <li><img src="/imgs/raptus2.jpg" alt=""/></li>
                    <li><img src="/imgs/raptus3.jpg" alt=""/></li>
                    <li><img src="/imgs/raptus4.jpg" alt=""/></li>
                </ul>
                </div>
                <button class="btnMovie btnMovie--raptus"><a href="https://vimeo.com/342248210" target="_blank">Voir le film</a></button>
            </main>
        </div>
    );
}
   
export default Raptus;