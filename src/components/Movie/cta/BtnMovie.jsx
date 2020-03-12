import React from "react";

/***** STYLES *****/
import './btnMovie.scss'; 

/***** DATAS *****/
import moviesList from '../../../datas/moviesList';

const BtnMovie = () => {
	return (
    <button className="btnMovie">
      { moviesList.map( movie =>
      <a href={ movie.cta.link } target="_blank" rel="noopener noreferrer">{ movie.cta.text }</a>
      )}
    </button> 
	);
}
   
export default BtnMovie;