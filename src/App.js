
import './App.css';
import Game from './Game';
import CharacterSelection from './CharacterSelection';
import { useState, useEffect } from 'react';
import userEvent from '@testing-library/user-event';


function App() {
  
  const [active, setActive] = useState("Character");
  const [player, setPLayer] = useState({name: "", img: ""})
  

  // <div className="Selected">
  //               <p>Selected character:</p>
  //               <img src={currentPlayer.img}/>
  //               <p>{currentPlayer.name}</p>
  //               {playerSelected && (<button onClick={() => setEnablePlay(true)}>Go Play</button>)}
  // </div>
  

  return (
    <div>
      <div className='header-container'>
        <button onClick={() => setActive("Character")}> Character</button>
        <h1 className='header'>Rock Paper Scissors</h1>
        <button onClick={() =>setActive("Game")}> Game</button>
      </div>
      
      {active==="Character" && <CharacterSelection /*player={player}*//>} 
      {active==="Game" && <Game /*player={player}*//>}

    </div>
  );
}

export default App;
