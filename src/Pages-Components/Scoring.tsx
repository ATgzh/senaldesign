import React, { useState, useEffect } from 'react';
import '../Styles/Plans.css';
import '../Styles/App.css';
import '../Styles/Home.css';
import '../Styles/Scoring.css';

import * as globals from './Globals';

function Plans() {

    const [plans, setPlans] = useState([]);
  
    return (
      <div className="main-container-loggedin-Plans">
        <p className='header-text-plans'>
          Scoring
        </p>
        <div className="module-scoring-big">
          <p className='module-scoring-text'>SEÑAL scores students into one of our 6 proficiency levels:</p>
          
          <div className="proficiency-list">
            <ul>
              <li>Lower Beginner</li>
              <li>Upper Beginner</li>
              <li>Lower Intermediate</li>
              <li>Upper Intermediate</li>
              <li>Lower Advanced</li>
              <li>Upper Advanced</li>
            </ul>
          </div>
        </div>

        {/* Sample text for each level */}
        <div className="sample-text-container">
          <h3>Sample Text For Each Level</h3>
          <ol>
            <li>
              <strong>Lower Beginner:</strong> Quiero estar un director de película bueno. Son mi tradajo soñar. Me gusta mucho películas de horror y comedia. Tengo mas películas de DVD. Yo estudio película en la universidad de Georgia State.
            </li>
            <li>
              <strong>Upper Beginner:</strong> En el futuro, yo quiero dar un diploma de comunicacións a Penn State University. Entonces, yo quiero a obtinar un trabajo de película y fotografía. Yo prefiero un trbajo en Pennsylvania. Quizá, me abro mi propio negocio en DuBois.
            </li>
            <li>
              <strong>Lower Intermediate:</strong> El robó coches, una moto y una helicoptre y cruzó la ciudad dejando un rastro de sangre, rotos coches y edificios. La estilo es muy rapido, con muchos escenas no mi gusta la sexualidad sin razon - hay muchas pechas desnudas pero no sé porque.
            </li>
            <li>
              <strong>Upper Intermediate:</strong> Mi persona famosa es un buen actor. Su nombre es Leonardo DiCaprio. El es mi actor favorito porque el es muy guapo, y es el buen actor de todo el mundo. El había presentado muchas ganas de acting, pero él nunca gana. Es el mayor triste de todo el mundo.
            </li>
            <li>
              <strong>Lower Advanced:</strong> Mientras, su esposa embarazada, una anglosajona, está intentando averiguar donde está su marido. Tiene un amigo que trabaja para un político que la ayuda y, poco a poca, dan cuenta que el CIA está involucrado en la desaparacencia de su marido.
            </li>
            <li>
              <strong>Upper Advanced:</strong> Hace dos días, un amiga y yo fuimos a ver una película méxicana se llama Bajo la misma luna. (No puedo subrayar el texto). Uno de mis maestros recomendaron que veamos esta película porque es muy linda. Normalmente, no voy a ver muchas películas porque son muy caros. Prefiero esperar hasta que sean disponibles en DVD.
            </li>
          </ol>
        </div>
      </div>
    );
}

export default Plans;