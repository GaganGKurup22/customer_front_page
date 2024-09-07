import React from 'react';
import './MainContent.css';

function MainContent() {
  return (
    <div className="main-content">
      <div className="content-wrapper">
        <div className="buttons">
          <button className="main-btn">Analytics</button>
          <button className="main-btn">Contracts</button>
          <button className="main-btn">Market</button>
        </div>
        <div className="quote">
          <p>"Sowing the seeds of tomorrow, one harvest at a time."</p>
        </div>
      </div>
      {/* <div className="illustration">
        <img src="/path_to_illustration" alt="Farmer illustration" />
      </div> */}
    </div>
  );
}

export default MainContent;