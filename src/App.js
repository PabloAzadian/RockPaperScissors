
import './App.css';
import Game from './Game';
import CharacterSelection from './CharacterSelection';
import { useState, useEffect } from 'react';
import userEvent from '@testing-library/user-event';


function App() {
  
  const [active, setActive] = useState("Character");
  const [selectedChar, setSelectedChar] = useState({name: "", src: ""})

  const onSelectSceneHandler = (scene) => {
    setActive(scene);
  };

  const onSelectCharacterHandler = (name, src) => {
    setSelectedChar(
      {
        name: name ,
        src: src
      });
  }

  return (
    <div>
      <div className='header-container'>
        <h1 className='header'>Rock Paper Scissors</h1>
      </div>
      {active==="Character" && <CharacterSelection onSelectCharacter={onSelectCharacterHandler} onSelectScene={onSelectSceneHandler} />} 
      {active==="Game" && <Game onSelectScene={onSelectSceneHandler} selectedChar={selectedChar} />}

    </div>
  );
}

export default App;
