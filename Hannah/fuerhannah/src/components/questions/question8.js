import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Chacha from "../../images/SpeziChacha2.jpg"

function Question8({ setScene }) {
  const handleClick =(value) => {
    if(value=="9")
        setScene("outro");
    }
    

    return (
        <div className='container'>
          <div className='question-container'>
            <h1>Hier gibt's keine Frage</h1>
            <div className='button-container'>
              
              <div className='choice-button'>
                <button onClick={() => handleClick("9")}>Wollte nur </button>
              </div>

              <div className='choice-button'>
                <button onClick={() => handleClick("9")}>sagen, dass</button>
              </div>

              <div className='choice-button'>
                <button onClick={() => handleClick("9")}>ich dich</button>
              </div>

              <div className='choice-button'>
                <button onClick={() => handleClick("9")}>LIEBE {"<3"}</button>
              </div>
            </div>
          </div>
        </div>
      );
    }      

export default Question8;
