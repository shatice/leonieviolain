import React from "react";

/***** STYLES *****/
import './movieArticle.scss'; 

/***** COMPONENT(S) *****/
import Infos from './components/Infos';
import Cover from './components/Cover';
 
const movieArticle = () => {
	return (
    <section className="movieCover">
      <Infos/>
      <Cover/>         
    </section>
	);
}
   
export default movieArticle;
