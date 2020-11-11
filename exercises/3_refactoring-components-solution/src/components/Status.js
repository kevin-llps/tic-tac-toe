import React from 'react';

export default function Status(props) {
    return (
        <>
            { !props.winner && props.nextPlayer && <div>{ `Prochain joueur : ${props.nextPlayer}` }</div> }
            { props.winner && <div>{ `${props.winner} a gagné` }</div> }
        </>
    );
};