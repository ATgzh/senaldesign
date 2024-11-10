import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import '../Styles/App.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import SidebarAbout from './SidebarAbout';
import Home from './Home';
import Library from './Library';
import Plans from './Plans';
import Footer from './Footer';
import About from './About';
import AboutUs from './AboutUs';
import AnalysisModules from './AnalysisModules';
import { isLoggedIn } from './Globals';

function App() {
  return (
    <main>
      <Router>
        <AppContent />
      </Router>
    </main>
  );
}

function AppContent() {
  const location = useLocation();

  return (
    <>
      {/* Conditionally render sidebars and navbar */}
      {isLoggedIn && <Sidebar />}
      {!isLoggedIn && location.pathname === "/about" && <SidebarAbout />}
      {!isLoggedIn && location.pathname === "/AnalysisModules" && <SidebarAbout />}
      {!isLoggedIn && location.pathname === "/AboutUs" && <SidebarAbout />}
      {!isLoggedIn &&  <Navbar />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Library" element={<Library />} />
        <Route path="/Plans" element={<Plans />} />
        <Route path="/about" element={<About />} /> {/* Define About route */}
        <Route path="/AnalysisModules" element={<AnalysisModules />} />
        <Route path="/AboutUs" element={<AboutUs />} />
      </Routes>
      
      <Footer />
    </>
  );
}

export default App;