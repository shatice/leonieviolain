import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

/***** COMPONENTS *****/
import Home from './Home.jsx';
 
const Header = () => {
    return(
        <header>
            <h1><Link to="/">Léonie Violain</Link></h1>
        </header>
    );
}
   
export default Header;