import React from 'react';

export default function Moves(props) {
    const moves = props.history.map((step, move) => {
          const desc = move ?
            'Revenir au tour n°' + move :
            'Revenir au début de la partie';
          return (
            <li key={move}>
              <button onClick={() => props.jumpTo(move)}>{desc}</button>
            </li>
          );
        });

    return (
        <ol>{moves}</ol>
    );
};