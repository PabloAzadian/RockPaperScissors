import React, { useState, useEffect } from 'react';
import ChoiceButtons from './ChoiceButtons';
import ResultComponent from './ResultComponent';
import ScoreComponent from './ScoreComponent';
import "./Game.css"



const Game = (props) => {
  // Defining the states of the Game
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState("");
  const [score, setScore] = useState({player: 0, computer: 0});
  const [gameEnded, setGameEnded] = useState(false);

  const handlePlayerChoice = (choice) =>{
    setPlayerChoice(choice);
    makeComputerChoice();
  }

  useEffect(() => {
    if (score.player === 3 || score.computer === 3) {
      setGameEnded(true);
    }
  }, [score]);

  useEffect(() => {
    determineResult();
  }, [playerChoice, computerChoice]);

  const resetGame= () => {
    setGameEnded(false)
    setScore({
      computer:0,
      player:0
    })
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult("Choose your weapon!");

  }

  const makeComputerChoice = () =>{
    let randomIndex = Math.floor(Math.random()*3);
    const choices= ["rock", "paper", "scissors"];

    setComputerChoice(choices[randomIndex]);
  }
  const playerWin = () => {
    setResult("You win!");
    
    setScore((prevScore) => ({
      ...prevScore,
      player: prevScore.player + 1,
    }));
    
  }

  const computerWin = () => {
    setResult("AI wins!");
    setScore((prevScore) => ({
      ...prevScore,
      computer: prevScore.computer + 1,
    }));
    
  }

  const handleButtonClick = () => {
    props.onSelectScene("Character");
  }

  

  const determineResult = () => {
    if (computerChoice === playerChoice && playerChoice) {
      setResult("It's a tie!");
    } else {
      switch (computerChoice) {
        case "rock":
          if (playerChoice === "paper") {
            playerWin();
          } else if (playerChoice === "scissors") {
            computerWin();
          }
          break;
        case "paper":
          if (playerChoice === "rock") {
            computerWin();
          } else if (playerChoice === "scissors") {
            playerWin();
          }
          break;
        case "scissors":
          if (playerChoice === "paper") {
            computerWin();
          } else if (playerChoice === "rock") {
            playerWin();
          }
          break;
        default:
          break;
      }
    }
  };
    
      
    
    return (
        <div>
          <ScoreComponent score={score}/>
          <ChoiceButtons selectedChar={props.selectedChar} gameEnded={gameEnded} onPlayerChoice={handlePlayerChoice} playerChoice={playerChoice} computerChoice={computerChoice}/>
          <ResultComponent result={result}/>
          <div className='gameEnd'>
            {gameEnded && <div className='gameEnd'>
                            <p>The game has ended! {score.player === 3 ? 'Player' : 'Computer'} won!</p> 
                            <button onClick={resetGame}>Play again?</button> 
                            <button onClick={handleButtonClick}>Back to Character selection</button>
                          </div>}
          </div>
        </div>
    );
    
};

export default Game;