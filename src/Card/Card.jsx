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
    
    <h1>Gracias, {name}!</h1>
    <h2>Tú recomendación:</h2>
    <h3>Juego: {game}</h3>
    <p>Consola: {console}</p>
</div>
  )
}
