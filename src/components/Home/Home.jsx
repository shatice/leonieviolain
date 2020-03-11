import React from "react";

/***** ROUTER *****/
import { BrowserRouter as Router, Link } from "react-router-dom";

/***** STYLES *****/
import './home.scss';

/***** DATAS *****/
import moviesLink from '../../datas/moviesLink';

/***** COMPONENTS *****/
import Header from '../header/Header';

const Home = () => {
	return (
		<div id ="home" className="home">
			<Header/>
			<ul>
				{ moviesLink ? moviesLink.map(c => 
				<li className={ "movie movie--" + ( c.id ) } key={ c.id }>
						<Link id={ c.id } className="movieTitle" to="/movie">
							<p>{ c.title }</p>
							{ c.titleBis ? <p>{ c.titleBis }</p> : ""}
						</Link>
				</li>
				) : "" }
			</ul>
		</div>
	);
}
   
export default Home;