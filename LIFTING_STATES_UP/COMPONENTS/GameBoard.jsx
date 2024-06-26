

const initialGameBoard  = [   
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export default function GameBoard({onSelectSquare, turns }){
     let gameBoard = initialGameBoard; 

     for (const turn of turns){
         //  DESTRUCTURING THE TURNS
         const { square, player} = turn;
         const { row, col} = square;   // OBJECT DESTRUCTURING TWICE

         gameBoard[row][col]  = player;  
         // We dont need to manage any state here instead we are deriving state here from props
         // In react you can manage as little states as needed and derive more values and information as you can
     }
 
    return( <ol id = "game-board">
        {gameBoard.map((row, rowIndex) => (  //beginning of gameBoard.map
        <li key={rowIndex}>      
            <ol>
                {row.map((playerSymbol, colIndex) => (
                <li key={colIndex}>
                    <button onClick = {()=> onSelectSquare(rowIndex, colIndex)}> {playerSymbol}</button>   
               </li>     
                ))  // end of bracket from row.map and arrow function =>
                }
            </ol>   
        </li>  // end of <li key={rowIndex}>
    ))   //end of  gameBoard.map
    }
   
    </ol>
    );  // end of return
}  