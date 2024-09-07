import React from 'react';
import Header from './components/Header';
import TabNavigation from './components/TabNavigation';
import MainContent from './components/MainContent';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <TabNavigation /> {/* Placed below the header */}
      <MainContent />
    </div>
  );
}

export default App;
