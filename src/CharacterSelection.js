import React from "react";
import { useState, useEffect } from "react";
import "./CharacterSelection.css"
import Game from "./Game";
import App from "./App";
import ChoiceButtons from "./ChoiceButtons";

const characterList = {
    Nico: {
      src: "./images/Nico.png",
      name: "Niko"
    },
    Gus: {
      src: "./images/Gus.png",
      name: "Gushi"
    },
    Ablo: {
      src: "./images/Ablo.png",
      name: "Ablo"
    },
    Banzo: {
      src: "./images/Banzo.png",
      name: "Banzo"
    },
    Ati: {
      src: "./images/Ati.png",
      name: "Ati"
    },
    Onza: {
      src: "./images/Onza.png",
      name: "Onza"
    }
  };
  

 
  
  const CharacterSelection = (props) => {
    const [playerSelected, setPlayerSelected] = useState(false)
    const [currentPlayer, setCurrentPLayer] = useState({name: "", img: ""})
    const [enablePlay, setEnablePlay] = useState(false);
    const handleClick = (character) => {
        setCurrentPLayer(() => ({name:character.name, img: character.src}))
        props.onSelectCharacter(character.name, character.src);
        
      }

    useEffect(() => {
        if (currentPlayer.name !== "") {
          setPlayerSelected(true);
        }
    }, [currentPlayer]);

    const handleButtonClick = () => {
      props.onSelectScene("Game");
    }
    

    
    return (
    <div>
      <div>
        <h2>Choose your character</h2>
      </div>
      <div className="container">
        <div className="Selected">
                <p>Selected character:</p>
                <img src={currentPlayer.img}/>
                <p>{currentPlayer.name}</p>
                {playerSelected &&(<button onClick={handleButtonClick}>Go Play!</button>)}
                
        </div>
        <div className="Characters">
            {Object.entries(characterList).map(([key, character]) => (
            <button onClick={() => handleClick(character)} key={key}>
                <img src={character.src} alt={character.name} />
                <p>{character.name}</p>
            </button>
            ))}
        </div>
      </div>
      
    </div>
    );
}
  
  
  
  export default CharacterSelection;