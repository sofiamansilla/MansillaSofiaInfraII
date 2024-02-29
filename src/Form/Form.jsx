
import React, { useState } from 'react'
import { Card } from '../Card'
import './Form.style.css'


/**
 * 
 * @return {React.Component} A form component with two inputs and a submit button
 */

export const Form = () => {

    const [user, setUser] = useState({
        name: '',
        game: '',
        console: ''
    })
 

    const [showSuccess, setShowSuccess] = useState(false)
    const [hasError, setHasError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
   
        if(user.name.length >= 3 && user.name[0]!=" " && user.game.length >= 6 && user.console){
            setShowSuccess(true)
            setHasError(false)
        } else {
            setHasError(true)
        }
    }

    const onChangeName = (e) => {
        setUser({
            ...user,
            name: e.target.value
        })

    }

    const onChangeGame = (e) => {
        setUser({
            ...user,
            game: e.target.value
        })

    }

    const onChangeConsole = (e) => {
        setUser({
            ...user,
            console: e.target.value
        })

    }


  return (
    <div className='form-component'>
        {!showSuccess &&
            <form onSubmit={handleSubmit}>

                <input type="text" placeholder='Escribe tú nombre' onChange={onChangeName}/>
                <input type="text" placeholder='Ingresa un videojuego' onChange={onChangeGame} />
                <input type="text" placeholder='Ingresa la consola' onChange={onChangeConsole}/>
                <button>Enviar</button>
            </form>
        }
        {showSuccess ? 
            <>
                <Card name={user.name} game={user.game} console={user.console}/>           
            </>
        : <p className='intruction'>Cuentanos cual es tu juego favorito y en que consola es desplegado.</p>}
        {hasError ? <p style={{color: 'red'}}>Por favor chequea que la información sea correcta</p> : null}
    </div>
  )
}

