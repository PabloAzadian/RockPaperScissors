import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import dtfassung from "../../images/dtfassung.png"
import engfassung from "../../images/engfassung.png"

function Question4({ setScene }) {
  

  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const handleCharacterClick = (name) => {
    if (name === "eng") {
      setSelectedCharacter(name);
      setTimeout(() => {
        setScene("question5");
      }, 2000);
    } else {
      setSelectedCharacter(name);
      setTimeout(() => {
        setSelectedCharacter(null); // Reset the state after a delay
      }, 1000); // Adjust the delay as needed
    }
  };

  return (
    <div className='container'>
      <div className='question-container'>
        <h1>Welches Filmformat guckt sich der Pablo am liebsten an?</h1>
        <div className='cards-container'>
          <div className='row justify-content-around text-center'>
            
          <div  className='col-lg-5 col-md-5 col-sm-4 col-4 p-3'>
                <Card
                  style={{
                    maxWidth: '10rem',
                    margin: "auto",
                    backgroundColor: selectedCharacter === '1' ? 'red' : '',
                  }}
                  onClick={() => handleCharacterClick("1")}
                >
                <Card.Img variant="top" src={dtfassung} />
                  
                </Card>
              </div>
              <div  className='col-lg-5 col-md-5 col-sm-4 col-4 p-3'>
                <Card
                  style={{
                    maxWidth: '10rem',
                    margin: "auto",
                    backgroundColor: selectedCharacter === 'eng' ? 'green' : '',
                  }}
                  onClick={() => handleCharacterClick("eng")}
                >
                <Card.Img variant="top" src={engfassung} />
                  
                </Card>
              </div>
              
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Question4;
