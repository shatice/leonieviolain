import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

/***** COMPONENTS *****/
import Header from './Header.jsx';
 
const Chienne = () => {
    return(
        <div class="movieSection">
            <Header/>
            <main>
                <section class="movieCover">
                    <div class="movieCover__infos movieCover__infos--chienne">
                        <div class="movieCover__title">
                        <div>
                            <p>C</p><p>H</p><p>I</p><p>E</p><p>N</p><p>N</p><p>E</p>
                        </div>
                        </div>
                        <div class="movieCover__details">
                        <div class="movieCover__description">
                            <p class="movieCover__time">9'31</p>
                            <div class="movieCover__type">
                            <p>C</p><p>O</p><p>U</p><p>R</p><p>T</p><p>-</p><p>M</p><p>É</p><p>T</p><p>R</p><p>A</p><p>G</p><p>E</p>
                            </div>
                            <p class="movieCover__date">2018</p>
                        </div>
                        </div>
                    </div>
                    <div class="movieCover__img movieCover__img--chienne"></div>
                </section>
                <div class="galery">
                    <ul>
                        <li><img src="/imgs/chienne1.jpg" alt=""/></li>
                        <li><img src="/imgs/chienne2.jpg" alt=""/></li>
                        <li><img src="/imgs/chienne3.jpg" alt=""/></li>
                        <li><img src="/imgs/chienne4.jpg" alt=""/></li>
                    </ul>
                </div>
                <button class="btnMovie btnMovie--chienne"><a href="https://www.youtube.com/watch?v=jMzPI-lGgpo" target="_blank">Voir le film</a></button>
            </main>
        </div>
    );
}
   
export default Chienne;