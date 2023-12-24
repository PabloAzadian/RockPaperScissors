import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Chacha from "../../images/SpeziChacha2.jpg"

function Question6({ setScene }) {
  

  

  const handleClick =(value) => {
    if(value=="siete"){
        setScene("question7");
    }
    }
   
    

    return (
        <div className='container'>
          <div className='question-container'>
            <h1>Was kann dein Freund gut kochen?</h1>
            <h5>(Wähle nur eins)</h5>
      
            <div className='button-container'>
              
              <div className='choice-button'>
                <button> Popcorn</button>
              </div>

              <div className='choice-button'>
                <button >Pizza</button>
              </div>

              <div className='choice-button'>
                <button >Pasta</button>
              </div>

              <div className='choice-button'>
                <button >Guacamole</button>
              </div>
              <div className='choice-button'>
                <button onClick={() => handleClick("siete")}>Alle oben genannten</button>
              </div>
            </div>
          </div>
        </div>
      );
    }      

export default Question6;
