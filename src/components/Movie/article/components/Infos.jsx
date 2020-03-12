import React from "react";

/***** STYLES *****/
import '../../movie.scss'; 

import moviesList from '../../../../datas/moviesList';
 
const Infos = () => {
	return (
    <div>
      { moviesList.map( movie => 
      <div className="movieCover__infos" key={ movie.id }>
        <div className="movieCover__title" >
          <div>{ movie.title.map( letter => <p> { letter } </p>) }</div>
          { movie.titleBis ? <div>{ movie.title.map( letter => <p> { letter } </p>) }</div> : "" }
        </div>
        <div className="movieCover__details">
          <div className="movieCover__description">
            <p className="movieCover__time">{ movie.time }</p>
            <div className="movieCover__type">
              { movie.type.map( letter => <p> { letter } </p>) }
            </div>
            <p className="movieCover__date">{ movie.year }</p>
          </div>
          { movie.selection || movie.press ? 
          <div className="movieCover__prom desktop apache">
            { movie.selection ? 
            <div className="movieCover__selection">
              <h3>{ movie.selection.h3 }</h3>
              { movie.selection.names.map( name =><p> { name } </p>) }
            </div>
            : "" }
            { movie.press ?
            <div className="movieCover__press">
              <h3>{ movie.press.h3 }</h3>
              <ul>
                { movie.press.articles.map( article => 
                <li>
                  <a href={ article.link } target="_blank" rel="noopener noreferrer">{ article.source }</a>
                </li> 
                )}
              </ul>
            </div>
            : "" }
          </div>
          : "" }
        </div>
      </div>
      )}
    </div>
        
	);
}
   
export default Infos;