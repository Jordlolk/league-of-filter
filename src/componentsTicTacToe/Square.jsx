import App from "../App";
import React , {useState} from 'react';
import '../App.css';
import { calculateWinner , winnerPatterns } from "../App";

export default function Square({ value, winner, player, onclick }) {
    let cor = value === 'X' ? 'blue' : value ? 'green' : 'white';

    if(winner && value === winner) {
       cor = 'yellow'
    } 

    return (
        <button onClick={onclick} style={{ backgroundColor: `${cor}`, height: 80, width: 80, margin: 4 }} className="botao">
            {value}
        </button>
    );
}
    