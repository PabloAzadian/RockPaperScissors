import React from 'react';
import './ChoiceButtons.css';

const ChoiceButtons = ({ onPlayerChoice, gameEnded, playerChoice, computerChoice }) => {
  const handleClick = (choice) => {
    onPlayerChoice(choice);
  }

  const images= {
    rock: {
      src: "https://cdn2.iconfinder.com/data/icons/valuable-items/200/minerals_coal-512.png",
      name: "Rock"
    },
    paper: {
      src: "https://www.iconpacks.net/icons/2/free-paper-plane-icon-2563-thumb.png",
      name: "Paper"
    },
    scissors: {
      src: "https://cdn-icons-png.flaticon.com/512/2769/2769646.png",
      name: "Scissors"
    },
    player: {
      src: "https://t4.ftcdn.net/jpg/04/18/72/23/360_F_418722306_XN0M7K7v23wrcGh6UtigcPACsnQAV9bt.jpg",
      name: "Pablo"
    },

    computer:{
      src: "https://cdn-icons-png.flaticon.com/512/3398/3398643.png",
      name: "AI"
    }


  }
    


  return (
    <div>
      <div className="choice-container">
        <div className='player-container'>  
          <div className='userBox'>
            <img src={images.player.src} />
            <h1>{images.player.name}</h1>
          </div>
        
          <div className="chosen-item">
            
          {playerChoice && ( <img src={images[playerChoice].src} alt={images[playerChoice].name} />)}
            <p>{playerChoice}</p>

          </div>
        
        </div>
        <h2>VS</h2>

        <div className='computer-container'>
        
          <div className="chosen-item">
            
           {computerChoice && ( <img src={images[computerChoice].src} alt={images[computerChoice].name} />)}
            <p>{computerChoice}</p>
          </div>
        
          <div className='userBox'>
            <img src={images.computer.src} />
            <h1>{images.computer.name}</h1>
          </div>
        </div>
      </div>
      <div className='choice-buttons'>
        <button disabled={gameEnded} onClick={() => handleClick("rock")}>
          <img src={images.rock.src} alt={images.rock.name} />
          Rock
        </button>
        <button disabled={gameEnded} onClick={() => handleClick("paper")}>
          <img src={images.paper.src} alt={images.paper.name} />
          Paper
        </button>
        <button disabled={gameEnded} onClick={() => handleClick("scissors")}>
          <img src={images.scissors.src} alt={images.scissors.name} />
          Scissors
        </button>
      </div>  
      
    </div>
  );
};

export default ChoiceButtons;