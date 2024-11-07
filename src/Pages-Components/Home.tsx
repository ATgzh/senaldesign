import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/App.css';
import '../Styles/Home.css';
import { isLoggedIn } from './Globals';

const App: React.FC = () => {
    return (
      <div>
        <div className='borderline'></div>
        <main className="main-container">
          {/* Render different content based on the isLoggedIn status */}
          {isLoggedIn ? (
            // Logged-in View
            <div className="logged-in-content">
              <h2>Welcome Back!</h2>
              <p>Your personalized dashboard is here.</p>
              {/* Add any other logged-in specific content here */}
            </div>
          ) : (
            // Not Logged-in View
            <>
              <div className="left-section">
                {/* Header Section inside the blue rectangle */}
                <div>
                  <p className="senal-header">SEÑAL</p>
                  <p className="senal-subheader">Spanish Essay<br />Evaluation Made Easy</p>
                </div>
              </div>
      
              <div className="right-section">
                {/* Header Right Section inside the white rectangle */}
                <div>
                  <p className="right-header">Log in or Sign up Today<br />to Start Analyzing</p>
                  <a
                    href="#"
                    className="btn btn-link"
                    style={{ display: 'block', textAlign: 'center', margin: '0 auto' }}
                  >
                    Get Started for Free
                  </a>
                </div>
              </div>
            </>
          )}
        </main>

        {/* Only render this section if the user is not logged in */}
        {!isLoggedIn && (
          <>
            <div className='borderline-2'></div>
            {/* Explore Models Section */}
            <section className="explore-section text-center">
              <div className='explore-text'>Explore Models</div>
              <div className="model-grid">
                <div className="model-card">
                  <h5>CAPTURA</h5>
                  <p>Check if an English L1 learner’s Spanish text was copied from Google Translate.</p>
                </div>
                <div className="model-card">
                  <h5>MLL2</h5>
                  <p>Classify L2 writing proficiency into six levels using a machine learning model.</p>
                </div>
                <div className="model-card">
                  <h5>SENTIMENT</h5>
                  <p>Analyze sentiment in Spanish L2 compositions.</p>
                </div>
                <div className="model-card">
                  <h5>LEX</h5>
                  <p>Assess advanced vocabulary and growth in Spanish over a semester.</p>
                </div>
                <div className="model-card">
                  <h5>SYNT</h5>
                  <p>Measure production of verbs, sentence length, and sentence complexity.</p>
                </div>
                <div className="model-card">
                  <h5>GRAMMAR</h5>
                  <p>Analyze grammatical elements, tenses, and check gender/number agreement.</p>
                </div>
              </div>
            </section>
          </>
        )}
      </div>
    );
};

export default App;