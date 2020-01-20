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
                        <Link to="/desiderare">DESIDERARE: <br/>cor ne adito</Link>
                    </div>
                </article>
                <article class="movie movie--apache">
                    <div id="apache" class="movieTitle">
                        <Link to="/apache">L'APACHE</Link>
                    </div>
                </article> 
                <article class="movie movie--raptus">
                    <div id="raptus" class="movieTitle">
                        <Link to="/raptus">RAPTUS</Link>
                    </div>
                </article> 
                <article class="movie movie--piscine">
                    <div id="piscine" class="movieTitle">
                        <Link to="/piscine">5H MOINS 20 <br/>à la piscine</Link>
                    </div>
                </article> 
                <article class="movie movie--chienne">
                    <div id="chienne" class="movieTitle">
                        <Link to="/chienne">CHIENNE</Link>
                    </div>
                </article>
            </main>
        </div>
    );
}
   
export default Home;