import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/App.css';
import '../Styles/Home.css';
import { isLoggedIn } from './Globals';

const App: React.FC = () => {
    return (
        <div>
            <div>
                {/* Render different content based on the isLoggedIn status */}
                {isLoggedIn ? (
                // Logged-in View
                <>  
                    <div className="main-container-loggedin">
                        <div className="Upload">
                        <p className="main-text">Start Analyzing!</p>
                        {true && (
                            <p>
                            Please <a href="/login">log in</a> or <a href="/signup">sign up</a> to use the analyzer.
                            </p>
                        )}
                        <textarea
                            placeholder="Enter Student Text"
                            className="input-upload"
                            
                        ></textarea>
                        
                        <p className="main-text">Select Analysis Types</p>
                        <p className="credit-reminder">(1 Credit Each)</p>
                        
                        <div className="checkbox-container">
                            
                            
                            
                        </div>
            
                        {/* Only render the vertical border when logged in */}
                        
                        </div>

                        <div className='right-section'>
                            <div className='module-small'>
                                <p>My Proficiency Level</p>
                            </div>
                            <div className='module-small'>
                                <p>Credits</p>
                            </div>
                        </div>
                    </div>
                </>
            
                ) : (
                // Not Logged-in View
                <>
                    <div className='main-container-notlogged'>
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
                            <p className="right-header">
                            Log in or Sign up Today<br />to Start Analyzing
                            </p>
                            <a
                            href="#"
                            className="btn btn-link"
                            style={{ display: 'block', textAlign: 'center', margin: '0 auto' }}
                            >
                            Get Started for Free
                            </a>
                        </div>
                        </div>
                    </div>
                </>
                )}
            </div>

      {/* Only render this section if the user is not logged in */}
      {!isLoggedIn && (
        <>
          <div className='borderline'></div>
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