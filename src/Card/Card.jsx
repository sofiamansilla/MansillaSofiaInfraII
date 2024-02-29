import React from "react";
import './Card.style.css';

/**
 * 
 * @param {*} param0 
 * @return {React.Component} A react component that displays a card  with the given game and console.
 */
export const Card = ({
  name,
  game,
  console
}) => {
  return (
    <div className="card">
    
    <h1>Gracias {name}!</h1>
    <h2>También amamos ese juego, será recomendado para otros:</h2>
    <h3>{game}</h3>
    <p>Para jugar en la consola {console}</p>
</div>
  )
}
