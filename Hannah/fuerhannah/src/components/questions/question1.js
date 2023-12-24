import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Ross from "../../images/Ross.png";
import Rachel from "../../images/Rachel.png";
import Joey from "../../images/Joey.png";
import Chandler from "../../images/Chandler.jpg";
import Monica from "../../images/Monica.jpg";
import Phoebe from "../../images/Phoebe.jpg";

function Question1({ setScene }) {
  const characters = [
    { name: 'Ross', image: Ross },
    { name: 'Joey', image: Joey },
    { name: 'Chandler', image: Chandler },
    { name: 'Rachel', image: Rachel },
    { name: 'Phoebe', image: Phoebe },
    { name: 'Monica', image: Monica },
  ];

  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const handleCharacterClick = (name) => {
    if (name === 'Ross') {
      setSelectedCharacter(name);
      setTimeout(() => {
        setScene("question2");
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
        <h1>Wer ist der cringiest Friend?</h1>
        <div className='cards-container'>
          <div className='row justify-content-around text-center'>
            
              <div  className='col-lg-4 col-md-4 col-sm-6 col-6 p-3'>
                <Card
                  style={{
                    maxWidth: '10rem',
                    margin: "auto",
                    backgroundColor: selectedCharacter === 'Ross' ? 'green' : '',
                  }}
                  onClick={() => handleCharacterClick("Ross")}
                >
                  <Card.Img variant="top" src={Ross} />
                  <Card.Body>
                    <Card.Title>Ross</Card.Title>
                  </Card.Body>
                </Card>
              </div>
              <div  className='col-lg-4 col-md-4 col-sm-6 col-6 p-3'>
                <Card
                    style={{
                        maxWidth: '10rem',
                        margin: "auto",
                        backgroundColor: selectedCharacter === 'Joey' ? "red" : '',
                    }}
                    onClick={() => handleCharacterClick("Joey")}
                    >
                    <Card.Img variant="top" src={Joey} />
                    <Card.Body>
                        <Card.Title>Joey</Card.Title>
                    </Card.Body>
                </Card>
              </div>
              <div  className='col-lg-4 col-md-4 col-sm-6 col-6 p-3'>
                <Card
                    style={{
                        maxWidth: '10rem',
                        margin: "auto",
                        backgroundColor: selectedCharacter === 'Chandler' ? "red" : '',
                    }}
                    onClick={() => handleCharacterClick("Chandler")}
                    >
                    <Card.Img variant="top" src={Chandler} />
                    <Card.Body>
                        <Card.Title>Chandler</Card.Title>
                    </Card.Body>
                </Card>
              </div>
              <div  className='col-lg-4 col-md-4 col-sm-6 col-6 p-3'>
                <Card
                    style={{
                        maxWidth: '10rem',
                        margin: "auto",
                        backgroundColor: selectedCharacter === 'Rachel' ? "red": '',
                    }}
                    onClick={() => handleCharacterClick("Rachel")}
                    >
                    <Card.Img variant="top" src={Rachel} />
                    <Card.Body>
                        <Card.Title>Rachel</Card.Title>
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
                    <Card.Img variant="top" src={Phoebe} />
                    <Card.Body>
                        <Card.Title>Phoebe</Card.Title>
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
                    <Card.Img variant="top" src={Monica} />
                    <Card.Body>
                        <Card.Title>Monica</Card.Title>
                    </Card.Body>
                 </Card>
              </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Question1;
