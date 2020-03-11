import React from "react";

/***** STYLES *****/
import './movie_mobile.scss';
import './movie_desktop.scss';
 
const Movie = () => {
	return(
    <div className="">
      <section className="movieCover apache">
        <div className="movieCover__infos movieCover__infos--apache">
          <div className="movieCover__title">
          <div>
            <p>L'</p><p>A</p><p>P</p><p>A</p><p>C</p><p>H</p><p>E</p>
          </div>
          </div>
          <div className="movieCover__details">
            <div className="movieCover__description">
              <p className="movieCover__time">2'20</p>
              <div className="movieCover__type">
              <p>C</p><p>O</p><p>U</p><p>R</p><p>T</p><p>-</p><p>M</p><p>É</p><p>T</p><p>R</p><p>A</p><p>G</p><p>E</p>
              </div>
              <p className="movieCover__date">2018</p>
            </div>
            <div className="movieCover__prom desktop apache">
              <div className="movieCover__selection">
              <h3>Séléction Festival</h3>
              <p>Nikon Festival : Prix des Écoles</p>
              </div>
              <div className="movieCover__press">
              <h3>Articles :</h3>
              <ul>
                <li><a href="https://www.lesinrocks.com/2019/03/29/cinema/actualite-cinema/le-nikon-film-festival-offre-un-9e-palmares-sous-le-signe-du-partage/" target="_blank" rel="noopener noreferrer">Les Inrockuptibles</a></li>
                <li><a href="https://www.konbini.com/fr/cinema/nikon-film-festival-2019-coup-de-coeur-15-courts-metrages/" target="_blank" rel="noopener noreferrer">Konbini</a></li>
                <li><a href="https://www.fisheyemagazine.fr/decouvertes/actu/le-palmares-du-nikon-film-festival-une-histoire-de-partage/" target="_blank" rel="noopener noreferrer">Fisheye</a></li>
                <li><a href="https://www.artyparis.net/leonie-violain-nikon-film-festival/" target="_blank" rel="noopener noreferrer">ArtyParis</a></li>
              </ul>
              </div>
            </div>
            </div>
        </div>
        <div className="movieCover__img movieCover__img--apache"></div>
      </section>
      <div className="movieCover__prom movieCover__prom--apache mobile">
      <div className="movieCover__selection">
        <h3>Séléction Festival</h3>
        <p>Nikon Festival : Prix des Écoles</p>
      </div>
      <div className="movieCover__press">
        <h3>Articles :</h3>
        <ul>
            <li><a href="https://www.lesinrocks.com/2019/03/29/cinema/actualite-cinema/le-nikon-film-festival-offre-un-9e-palmares-sous-le-signe-du-partage/" target="_blank" rel="noopener noreferrer">Les Inrockuptibles</a></li>
            <li><a href="https://www.konbini.com/fr/cinema/nikon-film-festival-2019-coup-de-coeur-15-courts-metrages/" target="_blank" rel="noopener noreferrer">Konbini</a></li>
            <li><a href="https://www.fisheyemagazine.fr/decouvertes/actu/le-palmares-du-nikon-film-festival-une-histoire-de-partage/" target="_blank" rel="noopener noreferrer">Fisheye</a></li>
            <li><a href="https://www.artyparis.net/leonie-violain-nikon-film-festival/" target="_blank" rel="noopener noreferrer">ArtyParis</a></li>
          </ul>
      </div>
      </div>
      <div className="galery">
        <ul>
          <li><img src="images/gallery/apache1.jpg" alt=""/></li>
          <li><img src="images/gallery/apache2.jpg" alt=""/></li>
          <li><img src="images/gallery/apache3.jpg" alt=""/></li>
          <li><img src="images/gallery/apache4.jpg" alt=""/></li>
        </ul>
      </div>
      <button className="btnMovie btnMovie--apache"><a href="https://vimeo.com/357378807" target="_blank" rel="noopener noreferrer">Voir le film</a></button>
    </div>
	);
}

export default Movie;