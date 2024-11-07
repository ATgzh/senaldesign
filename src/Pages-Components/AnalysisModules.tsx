// src/Pages-Components/AnalysisModules.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/AnalysisModules.css';

const AnalysisModules: React.FC = () => {
  return (
    <div className="analysis-modules-page">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-logo">
          <h2>SENAL</h2>
        </div>
        <nav className="sidebar-nav">
          <Link to="/about">About Us</Link>
          <Link to="/analysis" className="active">Analysis Modules</Link>
          <Link to="/scoring">Scoring</Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="module-box">
          <h2>1. SEÑAL-LEX</h2>
          <p>
            This module analyzes lexical sophistication. First, this result displays the degree of advanced lexicon and 
            lower frequency items in the repertoire of the learner (Luque and Bowden, 2014). In addition, this analysis 
            provides a window into the mental vocabulary available in the learner and the expansion of the Spanish 
            resources during a semester of classes (Jarvis, 2013).
          </p>
        </div>

        <div className="module-box">
          <h2>2. SEÑAL-SYNT</h2>
          <p>
            This module of SEÑAL focuses on measuring the proportional production of predicate constructions (i.e., 
            number of verbs and auxiliary verbs), sentence length (i.e., number of words and sentential coordination), 
            measured in T-units (Bardovi-Harlig, 1992) and conjunctions; and sentence complexity (i.e., number of 
            clauses, both relative and adverbial).
          </p>
        </div>

        <div className="module-box">
          <h2>3. SEÑAL-GRAMMAR</h2>
          <p>
            This module utilizes a frequency profile of different grammatical elements. These include the total number 
            of nouns, adjectives, adverbs, and verbs incorporated in the composition, as well as a breakdown of different 
            inflected aspects such as tense, manner, number, and syntactic perspective such as active, passive, or 
            imperfect iteration. Additionally, the grammar checker component identifies non-standard forms. This module 
            also contains a gender and number agreement checker between the different nouns found in the text and their 
            accompanying articles and adjectives. This component works by scanning the list of nouns indicated by the 
            parser, and indicating mismatched articles and number markers according to the attributes assigned to each 
            noun clause by the parser. The output of this module shows the results in terms of relative frequencies.
          </p>
        </div>

        <div className="module-box">
          <h2>4. SEÑAL-MLL2</h2>
          <p>
            SEÑAL-MLL2 is a machine learning classifier of L2 writing proficiency. The classifier was trained using the 
            Spanish version of the transformer-based language model of BERT (Canete et al., 2020). The training data 
            involves a reliable corpus of Spanish L2 compositions (CEDEL2; Lozano et al. 2020). The training corpus 
            is composed of 3034 essays written by Spanish L2 learners with English as their L1. Six writing stages were 
            employed, including Lower Beginner, Upper Beginner, Lower Intermediate, Upper Intermediate, Lower Advanced, 
            and Upper Advanced. These proficiency levels in SEÑAL-MLL2 are directly mapped by the classifier to their 
            placement test scores and are based on the Common European Framework of Reference for Languages.
          </p>
        </div>

        <div className="module-box">
          <h2>5. SEÑAL-CAPTURA</h2>
          <p>
            CAPTURA allows the instructor to check whether a suspicious L2 text produced by an English L1 learner of 
            Spanish has been copied verbatim from Google’s machine translation service. We used the free allowance of 
            Google Translate API (500,000 characters) to deploy the first version of the module.
          </p>
        </div>

        <div className="module-box">
          <h2>6. SEÑAL-SENTIMENT</h2>
          <p>
            This module is a sentiment analyzer of Spanish L2 compositions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnalysisModules;
