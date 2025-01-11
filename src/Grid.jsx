import React from 'react';
import { range } from './utils';
import './index.css'; // Import the CSS file

function Grid({ numRows, numCols }) {
  return (
    <div className="grid-container">
      {range(numRows).map((rowIndex) => (
        <div key={rowIndex} className="grid-row">
          {range(numCols).map((colIndex) => (
            <div key={colIndex} className="grid-cell"></div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Grid;
