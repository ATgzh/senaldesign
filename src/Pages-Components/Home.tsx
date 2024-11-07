import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/App.css';

const App: React.FC = () => {
    return (
      <main className="main-container">
        {/* Blue Rectangle Section (Left Side) */}
        <div className="left-section">
          {/* Header Section inside the blue rectangle */}
          <div className="header">
            <p>Señal</p>
            <p>Spanish Essay Evaluation Made Easy</p>
          </div>
        </div>
  
        {/* White Rectangle Section (Right Side) */}
        <div className="right-section">
          {/* Header Right Section inside the white rectangle */}
          <div className="header-right">
            <p>Log in or Sign up Today to Start Analyzing</p>
            <a href="#" className="btn btn-link">Get Started for Free</a>
          </div>
        </div>
      </main>
    );
  }
  
  export default App;