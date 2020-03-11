import React from "react";

/***** ROUTER *****/
import { BrowserRouter as Router, Link } from "react-router-dom";

/***** STYLES *****/
import './header.scss'; 
 
const Header = () => {
	return(
		<header className="header">
			<h1><Router><Link to="/">Léonie Violain</Link></Router></h1>
		</header>
	);
}
   
export default Header;