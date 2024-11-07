import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/App.css';
import '../Styles/Home.css';

const App: React.FC = () => {
    return (
      <main className="main-container">
        {/* Blue Rectangle Section (Left Side) */}
        <div className="left-section">
          {/* Header Section inside the blue rectangle */}
          <div >
            <p className= "senal-header"> SEÑAL</p>
            <p className='senal-subheader'>Spanish Essay<br />Evaluation Made Easy</p>
          </div>
        </div>
  
        {/* White Rectangle Section (Right Side) */}
        <div className="right-section">
          {/* Header Right Section inside the white rectangle */}
          <div >
            <p className='right-header'>Log in or Sign up Today<br />to Start Analyzing</p>
            <a href="#" className="btn btn-link" style={{ display: 'block', textAlign: 'center', margin: '0 auto' }}>Get Started for Free</a>
          </div>
        </div>
      </main>
    );
  }
  
  export default App;