import React from 'react';
import Grid from './Grid';
import './index.css'; // Import the CSS file

function App() {
  return (
    <div className="app-container">
      <Grid numRows={2} numCols={4} />
    </div>
  );
}

export default App;
