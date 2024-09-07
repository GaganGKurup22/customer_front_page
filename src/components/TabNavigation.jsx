import React from 'react';
import './TabNavigation.css';

function TabNavigation() {
  return (
    <nav className="tab-navigation">
      <button className="tab">Pre-Harvesting Contract</button>
      <button className="tab">Post-Harvesting Contract</button>
    </nav>
  );
}

export default TabNavigation;