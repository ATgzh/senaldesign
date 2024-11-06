import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link, useLocation} from 'react-router-dom';
import '../Styles/App.css';
import Navbar from './Navbar';

function App() {
  return (
    <main>
      <Router>
        <Navbar/>
      <Routes>
        
      </Routes>
    </Router>
    </main>
  );
}

export default App;
