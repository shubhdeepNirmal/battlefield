// App.jsx - Updated
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MultiplayerPage from './pages/MultiPlayerPage';
import ServerBrowserPage from './pages/ServerBrowserPage';
import ServerInfoPage from './pages/ServerInfoPage';
import Background from "./Background";
import './App.css';
import CardGrid from './components/CardGrid';
import SideBarLeft from './components/SideBarLeft';
import SideBarRight from './components/SideBarRight';
import ModuleData from './components/ModuleData'; // Importing ModuleData component
import { useEffect } from 'react';

const App = () => {
  /*useEffect(() => {
    document.title = "Battlefield Qurious"; 

  }, []);*/
  return (
    <>
      <Background />
      <div className="app-layout">
        <SideBarLeft />
        <div className='main'>
          <Router>
            <Navbar />
            <div className="main-content">
              <ModuleData />
              {/* Remove CardGrid from here if you want it only on specific routes */}
              <CardGrid />
            </div>
          </Router>
        </div>
       <SideBarRight/>
      </div>
    </>
  );
};

export default App;