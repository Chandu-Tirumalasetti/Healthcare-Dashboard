import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DashboardMainContent from './components/DashboardMainContent';
import '../src/styles/global.css';

const App = () => {
  return (
    <div className="app-container">
      {/* <Header/> */}
      <Sidebar />
      <div className="main-content">
        <DashboardMainContent />
      </div>
    </div>
  );
};

export default App;