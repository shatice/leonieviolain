import React from "react";

/***** STYLES *****/
import './gallery.scss'; 

/***** DATAS *****/
import moviesList from '../../datas/moviesList';

const Gallery = () => {
	return (
    <div className="galery">
      { moviesList.map( movie =>
      <ul>
        { movie.gallery.map( item => <li><img src={ item.image } alt={ item.alt }/></li> )}
      </ul>
      )}
    </div>
	);
}
   
export default Gallery;