import React , { useEstate} from 'react';
import './App.css'
import Board from './componentsTicTacToe/Board';

export const winnerPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
export function calculateWinner(squares){
  for(let i = 0 ; i < winnerPatterns.length ; i++){
      const [a,b,c] = winnerPatterns[i]
      if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
        return squares[a]
        
      } 
    }
      return null;
  }
function calculateEmpate(squares){
      if(squares.every(squares => squares !== null)){
        return 'EMPATE!'
      } 
      return null;
}
function App() {
    const [squares , setSquares] = useState(Array(9).fill(null))
    const [isX , setIsX] = useState(true)

    function handlePlay(i){
      if(squares[i] || calculateWinner(squares) || calculateEmpate(squares)){
        return;
        }
        squares[i] = isX ? 'X': 'O' ;
        setSquares(squares)
        setIsX(!isX)
      }
       const winner = calculateWinner(squares)
      const empate = calculateEmpate(squares)
      let status =  winner ? `The Winner is: ${winner}` : empate ? `${empate}` : `The Next is ${isX ? 'X' : 'O'}`

     function restartGame(){
        setIsX(true)
        setSquares(Array(9).fill(null))
     }

  return (
    <div>
        <h2 style={{color : 'white'}}>{status}</h2>
        <Board player={isX ? 'X' : 'O'} squares={squares} onclicked={handlePlay} winner={winner}></Board>
        <br></br>
        <button onClick={restartGame}>RESTART GAME ?</button>
    </div>
  )
}

export default App
