import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Link, useLocation} from 'react-router-dom';
import '../Styles/App.css';
import NavScrollExample from './Navbar'; 
import Navbar from './Navbar';
import About from './About';
import AnalysisModules from './AnalysisModules';

function App() {
  return (
    <div>
      <NavScrollExample />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/analysis" element={<AnalysisModules />} />
        {/* Add other routes as needed */}
      </Routes>
    </div>
  );
}

export default App;
