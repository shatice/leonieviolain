import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

/***** COMPONENTS *****/
import Header from './Header.jsx';
 
const Home = () => {
    return(
        <div id ="homeSection" class="homeSection">
            <Header/>
            <main>
                <article class="movie movie--desiderare">
                    <div id="desiderare" class="movieTitle">
                        <a href="./pages/desiderare.html">DESIDERARE: <br></br>cor ne adito</a>
                    </div>
                </article>
                <article class="movie movie--apache">
                    <div id="apache" class="movieTitle">
                        <a href="./pages/apache.html">L'APACHE</a>
                    </div>
                </article> 
                <article class="movie movie--raptus">
                    <div id="raptus" class="movieTitle">
                        <a href="./pages/raptus.html">RAPTUS</a>
                    </div>
                </article> 
                <article class="movie movie--piscine">
                    <div id="piscine" class="movieTitle">
                        <a href="./pages/piscine.html">5H MOINS 20 <br></br>à la piscine</a>
                    </div>
                </article> 
                <article class="movie movie--chienne">
                    <div id="chienne" class="movieTitle">
                        <a href="./pages/chienne.html">CHIENNE</a>
                    </div>
                </article>
            </main>
        </div>
    );
}
   
export default Home;