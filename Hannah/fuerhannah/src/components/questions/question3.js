import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Repasador from "../../images/pano-de-cocina.jpg" 

function Question3({ setScene }) {
  

  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const handleCharacterClick = (name) => {
    if (name === "repasador") {
      setSelectedCharacter(name);
      setTimeout(() => {
        setScene("question4");
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
        <h1>Como se le dice a esto?</h1>
        <img
        src={Repasador}
        width="270px"
        height="200px"/>
        <div className='cards-container'>
          <div className='row justify-content-around text-center'>
            
          <div  className='col-lg-2 col-md-2 col-sm-4 col-4 p-3'>
                <Card
                  style={{
                    maxWidth: '10rem',
                    margin: "auto",
                    backgroundColor: selectedCharacter === '1' ? 'red' : '',
                  }}
                  onClick={() => handleCharacterClick("1")}
                >
                <Card.Title>Raspador</Card.Title>
                  
                </Card>
              </div>
              <div  className='col-lg-2 col-md-2 col-sm-4 col-4 p-3'>
                <Card
                  style={{
                    maxWidth: '10rem',
                    margin: "auto",
                    backgroundColor: selectedCharacter === '2' ? 'red' : '',
                  }}
                  onClick={() => handleCharacterClick("2")}
                >
                <Card.Title>Remador</Card.Title>
                  
                </Card>
              </div>
              <div  className='col-lg-2 col-md-2 col-sm-4 col-4 p-3'>
                <Card
                  style={{
                    maxWidth: '10rem',
                    margin: "auto",
                    backgroundColor: selectedCharacter === '3' ? 'red' : '',
                  }}
                  onClick={() => handleCharacterClick("3")}
                >
                <Card.Title>Reparador</Card.Title>
                  
                </Card>
              </div>
              <div  className='col-lg-2 col-md-2 col-sm-4 col-4 p-3'>
                <Card
                  style={{
                    maxWidth: '10rem',
                    margin: "auto",
                    backgroundColor: selectedCharacter === '4' ? 'red' : '',
                  }}
                  onClick={() => handleCharacterClick("4")}
                >
                <Card.Title>Resplandor</Card.Title>
                  
                </Card>
              </div>
              <div  className='col-lg-2 col-md-2 col-sm-4 col-4 p-3'>
                <Card
                  style={{
                    maxWidth: '10rem',
                    margin: "auto",
                    backgroundColor: selectedCharacter === '5' ? 'red' : '',
                  }}
                  onClick={() => handleCharacterClick("5")}
                >
                <Card.Title>Refrescador</Card.Title>
                  
                </Card>
              </div>
              <div  className='col-lg-2 col-md-2 col-sm-4 col-4 p-3'>
                <Card
                  style={{
                    maxWidth: '10rem',
                    margin: "auto",
                    backgroundColor: selectedCharacter === '6' ? 'red' : '',
                  }}
                  onClick={() => handleCharacterClick("6")}
                >
                <Card.Title>Rebanador</Card.Title>
                  
                </Card>
              </div>
              <div  className='col-lg-2 col-md-2 col-sm-4 col-4 p-3'>
                <Card
                  style={{
                    maxWidth: '10rem',
                    margin: "auto",
                    backgroundColor: selectedCharacter === 'repasador' ? 'green' : '',
                  }}
                  onClick={() => handleCharacterClick("repasador")}
                >
                <Card.Title>Repasador</Card.Title>
                  
                </Card>
              </div>
              <div  className='col-lg-2 col-md-2 col-sm-4 col-4 p-3'>
                <Card
                  style={{
                    maxWidth: '10rem',
                    margin: "auto",
                    backgroundColor: selectedCharacter === '7' ? 'red' : '',
                  }}
                  onClick={() => handleCharacterClick("7")}
                >
                <Card.Title>Relampador</Card.Title>
                  
                </Card>
              </div>
              <div  className='col-lg-2 col-md-2 col-sm-4 col-4 p-3'>
                <Card
                  style={{
                    maxWidth: '10rem',
                    margin: "auto",
                    backgroundColor: selectedCharacter === '56' ? 'red' : '',
                  }}
                  onClick={() => handleCharacterClick("56")}
                >
                <Card.Title>Reposador</Card.Title>
                  
                </Card>
              </div>
              <div  className='col-lg-2 col-md-2 col-sm-4 col-4 p-3'>
                <Card
                  style={{
                    maxWidth: '10rem',
                    margin: "auto",
                    backgroundColor: selectedCharacter === '55' ? 'red' : '',
                  }}
                  onClick={() => handleCharacterClick("55")}
                >
                <Card.Title>Rendidor</Card.Title>
                  
                </Card>
              </div>
              <div  className='col-lg-2 col-md-2 col-sm-4 col-4 p-3'>
                <Card
                  style={{
                    maxWidth: '10rem',
                    margin: "auto",
                    backgroundColor: selectedCharacter === '45' ? 'red' : '',
                  }}
                  onClick={() => handleCharacterClick("45")}
                >
                <Card.Title>Remecador</Card.Title>
                  
                </Card>
              </div>
              <div  className='col-lg-2 col-md-2 col-sm-4 col-4 p-3'>
                <Card
                  style={{
                    maxWidth: '10rem',
                    margin: "auto",
                    backgroundColor: selectedCharacter === '66' ? 'red' : '',
                  }}
                  onClick={() => handleCharacterClick("66")}
                >
                <Card.Title>Retumbador</Card.Title>
                  
                </Card>
              </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Question3;
