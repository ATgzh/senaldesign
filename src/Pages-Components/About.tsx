import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/About.css'; // Import a CSS file for custom styling

const About: React.FC = () => {
  return (
    <div className="about-page">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-logo">
          <h2>SENAL</h2>
        </div>
        <nav className="sidebar-nav">
          <Link to="/about" className="active">About Us</Link>
          <Link to="/analysis">Analysis Modules</Link>
          <Link to="/scoring">Scoring</Link>
        </nav>
      </div>
      
      {/* Main Content */}
      <div className="main-content">
        <header className="top-nav">
          <Link to="/">Home</Link>
          <Link to="/about" className="active">About</Link>
          <Link to="/plans">Plans</Link>
          <div className="auth-buttons">
            <button className="login-button">Login</button>
            <button className="signup-button">Sign Up</button>
          </div>
        </header>

        <section className="about-content">
          <div className="about-box">
            <p>
              SENAL is a modular NLP application intended to analyze and evaluate different components
              of essays written by students of Spanish as a second language (L2). Currently, SEÑAL
              can provide a lexical-syntactic analysis of the complexity of an L2 essay, information
              about the frequency of various grammatical forms (such as nouns, adjectives, adverbs, 
              and various verb tenses), a grammatical agreement checker, an ML L2 proficiency classifier, 
              and a machine translation identification system.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <Link to="/">Home</Link> - <Link to="/about">About</Link> - <Link to="/plans">Plans</Link>
          <span className="support">
            Need Support? <Link to="/contact">Contact us</Link>
          </span>
        </footer>
      </div>
    </div>
  );
};

export default About;
