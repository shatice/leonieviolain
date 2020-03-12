import React, { useState } from "react";

/***** ROUTER *****/
import { BrowserRouter as Router, Link } from "react-router-dom";

/***** STYLES *****/
import './home.scss';

/***** DATAS *****/
import moviesLink from '../../datas/moviesLink';

/***** COMPONENTS *****/
import Header from '../header/Header';

const Home = () => {
	const [ isHovered, setIsHovered ] = useState(false);

	/**
	 * When hoverring a movie title, body's bg-image === title's bg-image
	 */
	const toggle = ( id ) => {
		if ( isHovered ) {
			setIsHovered(false); 
			document.body.classList.remove( 'is-changed-' + id );
		} else {
			setIsHovered(true);
			document.body.classList.add( 'is-changed-' + id );
		}
	}

	return (
		<div id ="home" className="home">
			<Header/>

			<ul>
				{ moviesLink ? moviesLink.map( c => <li className={ "movie movie--" + ( c.id ) } key={ c.id }>

					<Link 
					id={ c.id } 
					className="movieTitle" 
					to="/movie" 
					onMouseEnter={() => { toggle( c.id ) }}
					onMouseLeave={() => {  toggle( c.id ) }}>

						<p>{ c.title }</p>
						{ c.titleBis ? <p>{ c.titleBis }</p> : ""}

					</Link>

				</li> ) : "" }
			</ul>
		</div>
	);
}
   
export default Home;