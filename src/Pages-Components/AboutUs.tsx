import React, { useState, useEffect } from 'react';
import '../Styles/Plans.css';
import '../Styles/App.css';
import '../Styles/Home.css';
import '../Styles/AboutUs.css';

import * as globals from './Globals';

function AboutUs() {

  const [plans, setPlans] = useState([]);

  

  return (
    <div className="main-container-loggedin-Plans">
      
      <p className='header-text-plans'>
        About Us
      </p>
      <div className="module-AboutUs-big">
        <p>SENAL is a modular NLP application intended to analyze and evaluate different
            components of essays written by students of Spanish as a second language (L2). 
            Currently, SEÑAL can provide a lexical-syntactic analysis of the complexity of an L2 essay, 
            information about the frequency of various grammatical forms (such as nouns, adjectives, 
            adverbs, and various verb tenses), a grammatical agreement checker, a ML L2 proficiency classifier, 
            and a machine translation identification system.
            
        </p>
        
      </div>
      
      
    </div>
  );
}

export default AboutUs;
export {}