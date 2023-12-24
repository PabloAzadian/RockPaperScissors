import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Chacha from "../../images/SpeziChacha2.jpg"

function Question5({ setScene }) {
  

  

  const handleClick =(value) => {
    if(value=="seis"){
        setScene("question6");
    }
    }
    

  return (
    <div className='container'>
      <div className='question-container'>
        <h1>Kurze Pause</h1>
        <h3>Charlie Bietet dir eine Spezi an :)</h3>
        <img
        src={Chacha}
        width="250px"
        height="250px"
        />
        <div className='cards-container'>
          <div className='login-button'>
          <button
          onClick={() => handleClick("seis")}>Danke Chacha {"<3"}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Question5;
