import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link, useLocation} from 'react-router-dom';
import '../Styles/App.css';
import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';
import { isLoggedIn } from './Globals';

function App() {
  return (
    <main>
      <Router>
        {!isLoggedIn && <Navbar />}
      <Routes>
      <Route path="/" element={<Home/>}/>
      </Routes>
      <Footer/>
    </Router>
    </main>
  );
}

export default App;
