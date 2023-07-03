import React from 'react';
import "./ScoreComponent.css";

const ScoreComponent = ({score}) => {
  

  return (
    
      <div>
        <h1>Score:</h1>
        <div className="score-component">
         <h1>Player: {score.player}</h1>
         <h1>Computer: {score.computer}</h1>
        </div>
    </div>
  );
};

export default ScoreComponent;
