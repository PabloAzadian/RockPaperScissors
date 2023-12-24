import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Pablo from "../../images/pablo.jpg";
import Brad from "../../images/Brad.png";
import ian from "../../images/ian.png";
import zac from "../../images/zac.png";
import michael from "../../images/michael.jpg";
import andi from "../../images/andi.png";

function Question2({ setScene }) {
  

  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const handleCharacterClick = (name) => {
    if (name === 'Pablo') {
      setSelectedCharacter(name);
      setTimeout(() => {
        setScene("question3");
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
        <h1>Quien es el mas lindo?</h1>
        <div className='cards-container'>
          <div className='row justify-content-around text-center'>
            
              <div  className='col-lg-4 col-md-4 col-sm-6 col-6 p-3'>
                <Card
                  style={{
                    maxWidth: '10rem',
                    margin: "auto",
                    backgroundColor: selectedCharacter === 'Andi' ? 'red' : '',
                  }}
                  onClick={() => handleCharacterClick("Andi")}
                >
                  <Card.Img variant="top" src={andi} />
                  <Card.Body>
                    <Card.Title>Andi</Card.Title>
                  </Card.Body>
                </Card>
              </div>
              <div  className='col-lg-4 col-md-4 col-sm-6 col-6 p-3'>
                <Card
                    style={{
                        maxWidth: '10rem',
                        margin: "auto",
                        backgroundColor: selectedCharacter === 'brad' ? "red" : '',
                    }}
                    onClick={() => handleCharacterClick("brad")}
                    >
                    <Card.Img variant="top" src={Brad} />
                    <Card.Body>
                        <Card.Title>Brad P.</Card.Title>
                    </Card.Body>
                </Card>
              </div>
              <div  className='col-lg-4 col-md-4 col-sm-6 col-6 p-3'>
                <Card
                    style={{
                        maxWidth: '10rem',
                        margin: "auto",
                        backgroundColor: selectedCharacter === 'Pablo' ? "green" : '',
                    }}
                    onClick={() => handleCharacterClick("Pablo")}
                    >
                    <Card.Img variant="top" src={Pablo} />
                    <Card.Body>
                        <Card.Title>Pablo</Card.Title>
                    </Card.Body>
                </Card>
              </div>
              <div  className='col-lg-4 col-md-4 col-sm-6 col-6 p-3'>
                <Card
                    style={{
                        maxWidth: '10rem',
                        margin: "auto",
                        backgroundColor: selectedCharacter === 'Ian' ? "red": '',
                    }}
                    onClick={() => handleCharacterClick("Ian")}
                    >
                    <Card.Img variant="top" src={ian} />
                    <Card.Body>
                        <Card.Title>Ian S.</Card.Title>
                    </Card.Body>
                </Card>
              </div>
              <div  className='col-lg-4 col-md-4 col-sm-6 col-6 p-3'>
                <Card
                    style={{
                        maxWidth: '10rem',
                        margin: "auto",
                        backgroundColor: selectedCharacter === 'Phoebe' ? "red" : '',
                    }}
                    onClick={() => handleCharacterClick("Phoebe")}
                    >
                    <Card.Img variant="top" src={zac} />
                    <Card.Body>
                        <Card.Title>Zac E.</Card.Title>
                    </Card.Body>
                </Card>
              </div>
              <div  className='col-lg-4 col-md-4 col-sm-6 col-6 p-3'>
                <Card
                    style={{
                        maxWidth: '10rem',
                        margin: "auto",
                        backgroundColor: selectedCharacter === 'Monica' ? "red" : '',
                    }}
                    onClick={() => handleCharacterClick("Monica")}
                    >
                    <Card.Img variant="top" src={michael} />
                    <Card.Body>
                        <Card.Title>Michael B.</Card.Title>
                    </Card.Body>
                 </Card>
              </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Question2;
