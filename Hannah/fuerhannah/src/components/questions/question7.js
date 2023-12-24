import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Chacha from "../../images/SpeziChacha2.jpg"

function Question7({ setScene }) {
  

 

  const handleClick =(value) => {
    if(value=="8")
        setScene("question8");
    }
    

    return (
        <div className='container'>
          <div className='question-container'>
            <h1>Charlie le vendió su alma al diablo?</h1>
            <h5>(Wähle nur eins)</h5>
      
            <div className='button-container'>
              
              <div className='choice-button'>
                <button  onClick={() => handleClick("8")}>Si</button>
              </div>

              <div className='choice-button'>
                <button  onClick={() => handleClick("8")}>Ja</button>
              </div>

              <div className='choice-button'>
                <button  onClick={() => handleClick("8")}>Yes</button>
              </div>

              <div className='choice-button'>
                <button  onClick={() => handleClick("8")}>Oui</button>
              </div>
            </div>
          </div>
        </div>
      );
    }      

export default Question7;
