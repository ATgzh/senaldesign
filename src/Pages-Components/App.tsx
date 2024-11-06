import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Link, useLocation} from 'react-router-dom';
import '../Styles/App.css';
import NavScrollExample from './Navbar'; 
import Navbar from './Navbar';
import About from './About';

function App() {
  return (
    <div>
      <NavScrollExample />
      <Routes>
        <Route path="/about" element={<About />} />
        {/* Add other routes as needed */}
      </Routes>
    </div>
  );
}

export default App;
