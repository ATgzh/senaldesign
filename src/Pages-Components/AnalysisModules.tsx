import React, { useState, useEffect } from 'react';
import '../Styles/Plans.css';
import '../Styles/App.css';
import '../Styles/Home.css';

import * as globals from './Globals';

function Plans() {

  const [plans, setPlans] = useState([]);

  

  return (
    <div >
      <main className="main-container-loggedin-Plans">
      <p className='header-text-plans'>
        Analysis Modules
      </p>
      <div className="module-plans-big">
        <p className='module-plans-text'>
            1. SEÑAL-LEX
        </p>
        <p>
            This module analyzes lexical sophistication. First, this result displays the degree of advanced lexicon and lower frequency items in the repertoire of the learner (Bulte and Housen, 2014). In addition, this analysis provides a window to the mental vocabulary available in the learner and the expansion of the Spanish resources during a semester of classes (Jarvis, 2013).
        </p>
      </div>
      <div className="module-plans-big">
        <p className='module-plans-text'>
            2. SEÑAL-SYNT
        </p>
        <p>
        This module of SENAL focuses on measuring the proportional production of predicate constructions (i.e., number of verbs and auxiliary verbs), sentence length (i.e., number of words and sentential coordination, measured in T-Units (Bardovi-Harlig, 1992) and conjunctions) and sentence complexity (i.e., number of clauses, both relative and adverbial).
        </p>
      </div>
      <div className="module-plans-big">
        <p className='module-plans-text'>
            3. SEÑAL-GRAMMAR
        </p>
        <p>
        This module utilizes a frequency profile of different grammatical elements. These included the total number of nouns, adjectives, adverbs, and verbs incorporated in the composition, as well as a breakdown of different tenses and aspects used by the learner, namely: present indicative, present subjunctive, preterite, imperfect indicative, imperfect subjunctive, simple future, and simple conditional. Similarly, this module also contains a gender and number agreement checker between the different nouns found in the text and their corresponding articles and adjectives. This component works by identifying the gender and number of each noun, and matching these with the gender and number assigned to the articles and adjectives within the noun clause by the parser. The output of this module shows the results in terms of relative frequencies.
        </p>
      </div>
      <div className="module-plans-big">
        <p className='module-plans-text'>
            4. SEÑAL_MLL2
        </p>
        <p>
        SENAL-MLL2 is a machine learning classifier of L2 writing proficiency. The classifier was trained using the Spanish version of the transfomer-based language model of BERT (Canete et al., 2020). The training data involves a freely-available corpus of Spanish L2 compositions, CEDEL2 (Lozano et al., 2009). The corpus is composed of 3034 essays written by Spanish L2 learners with English as their L1. Six training arguments were employed, including Lower Beginner, Upper Beginner, Lower Intermediate, Upper intermediate, Lower Advanced, and Upper Advanced. These proficiency labels were rated by human instructors according to their placement test scores and are based on the Common European Framework of Reference for Languages.
        </p>
      </div>
      <div className="module-plans-big">
        <p className='module-plans-text'>
            5. SEÑAL-CAPTURA
        </p>
        <p>
        CAPTURA allows the instructor to check whether a suspicious L2 text produced by an English L1 learner of Spanish has been copied verbatim from Google’s machine translation service. We used the free allowance of Google Translate API (500,000 characters) to deploy the first version of the module.
        </p>
      </div>
      <div className="module-plans-big">
        <p className='module-plans-text'>
            6. SEÑAL-SENTIMENT
        </p>
        <p>
        This module is a sentiment analyzer of Spanish L2 compositions.
        </p>
      </div>
      
      </main>
    </div>
  );
}

export default Plans;
export {}