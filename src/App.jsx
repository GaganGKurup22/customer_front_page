import React from 'react';
import Header from './components/Header';
import TabNavigation from './components/TabNavigation';
import MainContent from './components/MainContent';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="content-container">
        <main className="main-container">
          <TabNavigation />
          <MainContent />
        </main>
      </div>
    </div>
  );
}

export default App;