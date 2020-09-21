import React, { useState, useEffect } from 'react';
import Board from './Board';

export default function Game() {
  const [history, setHistory] = useState([{
    squares: Array(9).fill(null)
  }]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);
  
  useEffect(() => {
    const currentSquares = getCurrentSquares();
    const winner = calculateWinner(currentSquares);
    setWinner(winner);
  });

  const getCurrentSquares = () => {
    return history[stepNumber].squares;
  };  

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };
  
  const handleClick = (i) => {
    const histo = history.slice(0, stepNumber + 1);
    const current = histo[histo.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? 'X' : 'O';
    setHistory(
      histo.concat([{
        squares: squares,
      }])
    );
    setStepNumber(histo.length);
    setXIsNext(!xIsNext);
  };
  
  const jumpTo = (step) => {
    setStepNumber(step);
    setXIsNext((step % 2) === 0);
  };
  
  const getMoves = (history) => {
    return history.map((step, move) => {
      const desc = move ?
        'Revenir au tour n°' + move :
        'Revenir au début de la partie';
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{desc}</button>
        </li>
      );
    });
  };
  
  const getStatus = (winner) => {
    return (winner)? 
      winner + ' a gagné' :
      'Prochain joueur : ' + (xIsNext ? 'X' : 'O');
  };

  return (
    <div className="game">
        <div className="game-board">
          <Board
            squares={getCurrentSquares()}
            onClick={(i) => handleClick(i)} />
        </div>
        <div className="game-info">
          <div>{getStatus(winner)}</div>
          <ol>{getMoves(history)}</ol>
        </div>
      </div>
  );
};
