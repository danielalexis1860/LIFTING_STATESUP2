import { useState } from 'react';

import Player from './COMPONENTS/Player.jsx';
import GameBoard from './COMPONENTS/GameBoard.jsx';
import Log from './COMPONENTS/Log.jsx';


function App(){
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectSquare() {
    //update activePlayer state by calling setActivePlayer   //tenary expression
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
    setGameTurns(prevTurns => {
      let currentPlayer = 'X';

      //adding an if statement 
      if (prevTurns.length > 0 && prevTurns[0].player === 'X') 
      {
        currentPlayer = '0';
      }

      const updatedTurns = [{ square: { row: rowIndex, col: colIndex}, player: currentPlayer }, ...prevTurns];
      return updatedTurns;
    });
  }

    return (
        <main>
             <div id = "game-container">
                <ol id = "players" className="highlight-player"> 
                  <Player initialName= "Player 1" symbol="X" isActive={activePlayer === 'X'}/> 
                  <Player initialName= "Player 2" symbol="O" isActive={activePlayer === 'O'}/> 
                </ol>
                
                <GameBoard onSelectSquare={handleSelectSquare} turns ={gameTurns}/>
             </div>
             Log
        </main>
    );
}