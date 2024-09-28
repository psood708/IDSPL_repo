import React from 'react';
import './UnderConstruction.css'; // Import the CSS file

const UnderConstruction = () => {
  return (
    <div className="construction-container">
      <div className="construction-content">
        <h1 className="construction-title">We're Under Construction</h1>
        <p className="construction-message">
          This Page is currently undergoing scheduled maintenance.
          <br />
          We'll be back soon!
        </p>
        <div className="construction-icon">
          🚧
        </div>
        <p className="construction-footer">
          Thank you for your patience!
        </p>
      </div>
    </div>
  );
};

export default UnderConstruction;
