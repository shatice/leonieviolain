import React from "react";

/***** STYLES *****/
import './movie.scss'; 

// /***** DATAS *****/
import moviesList from '../../datas/moviesList';

/***** COMPONENT(S) *****/
import Gallery from "./gallery/Gallery";
import BtnMovie from "./cta/BtnMovie";
import MovieArticle from "./article/MovieArticle";
 
const Movie = () => {
	return (
    <div>
      { moviesList ? moviesList.map( movie => 
      <div className={"moviePage " + movie.id} key={ movie.id }>
        <MovieArticle />
        <Gallery />
        <BtnMovie />
      </div>
      ) : "" }
    </div>
	);
}

export default Movie;