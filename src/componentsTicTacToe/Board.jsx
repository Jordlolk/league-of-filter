import App from "../App";
import '../App.css';
import Square from "./Square";

export default function Board({squares , player , winner , onclicked}){
    return (
        <div>
            <div className='board'>
                <Square onclick={() => {onclicked(0)}} value={squares[0]} player={player} winner={winner}></Square>
                <Square onclick={() => {onclicked(1)}} value={squares[1]} player={player} winner={winner}></Square>
                <Square onclick={() => {onclicked(2)}} value={squares[2]} player={player} winner={winner} ></Square>
            </div>
            <div className='board'>
                <Square onclick={() => {onclicked(3)}} value={squares[3]} player={player} winner={winner}></Square>
                <Square onclick={() => {onclicked(4)}} value={squares[4]} player={player} winner={winner}></Square>
                <Square onclick={() => {onclicked(5)}} value={squares[5]} player={player} winner={winner}></Square>
             </div>
            <div className='board'>
                <Square onclick={() => {onclicked(6)}} value={squares[6]} player={player} winner={winner}></Square>
                <Square onclick={() => {onclicked(7)}} value={squares[7]} player={player} winner={winner}></Square>
                <Square onclick={() => {onclicked(8)}} value={squares[8]} player={player} winner={winner}></Square>
            </div>
        </div>
    )
}