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
	 * And title's + header's bg-image === body's bg-image
	 */
	const toggle = ( id ) => {
		const header = document.querySelector('.header');

		if ( isHovered ) {
			setIsHovered(false); 
			document.body.classList.remove( 'is-changed-' + id );
			header.classList.remove( 'is-changed');
		} else {
			setIsHovered(true);
			document.body.classList.add( 'is-changed-' + id );
			header.classList.add( 'is-changed');
		}
	}

	return (
		<div id ="home" className="home">
			<Header/>
			<ul>
				{ moviesLink ? moviesLink.map( c => <li className={ "movie movie--" + ( c.id ) } key={ c.id }>

					<Link 
					id={ c.id } 
					className={ isHovered ? "movieTitle is-changed" : "movieTitle" } 
					to="/movie" 
					onClick={() => { toggle( c.id ) }}
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